
import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  MapPin, 
  Wifi, 
  Phone, 
  MessageCircle, 
  Settings, 
  Save, 
  Check,
  Info,
  Navigation,
  Key,
  ClipboardList,
  Utensils,
  Camera,
  Bus,
  ExternalLink,
  ChevronDown,
  Lock,
  Umbrella,
  CircleArrowDown,
  CircleArrowUp,
  Clock,
  Pill,
  Siren,
  Plane,
  TrainFront,
  Copy,
  Car,
  Square,
  CheckSquare,
  ShoppingCart,
  Briefcase,
  Star,
  Calendar,
  Trash2,
  CircleParking,
  Youtube,
  Play,
  WashingMachine,
  Ticket
} from 'lucide-react';
import { GuideData, Language, TRANSLATIONS } from './types';
import { INITIAL_GUIDE_DATA } from './constants';

const FLAGS: Record<Language, string> = {
  [Language.IT]: "https://flagcdn.com/w80/it.png",
  [Language.EN]: "https://flagcdn.com/w80/gb.png",
  [Language.DE]: "https://flagcdn.com/w80/de.png",
  [Language.FR]: "https://flagcdn.com/w80/fr.png",
  [Language.ES]: "https://flagcdn.com/w80/es.png",
  [Language.BG]: "https://flagcdn.com/w80/bg.png",
  [Language.HU]: "https://flagcdn.com/w80/hu.png",
  [Language.PL]: "https://flagcdn.com/w80/pl.png"
};

const getIcon = (name: string) => {
  switch (name) {
    case 'key': return <Key className="w-5 h-5" />;
    case 'clipboard-list': return <ClipboardList className="w-5 h-5" />;
    case 'utensils': return <Utensils className="w-5 h-5" />;
    case 'camera': return <Camera className="w-5 h-5" />;
    case 'bus': return <Bus className="w-5 h-5" />;
    case 'taxi': return <Car className="w-5 h-5" />;
    case 'beach': return <Umbrella className="w-5 h-5" />;
    case 'pharmacy': return <Pill className="w-5 h-5" />;
    case 'siren': return <Siren className="w-5 h-5" />;
    case 'wifi': return <Wifi className="w-5 h-5" />;
    case 'shopping-cart': return <ShoppingCart className="w-5 h-5" />;
    case 'briefcase': return <Briefcase className="w-5 h-5" />;
    case 'calendar': return <Calendar className="w-5 h-5" />;
    case 'trash': return <Trash2 className="w-5 h-5" />;
    case 'parking': return <CircleParking className="w-5 h-5" />;
    case 'video': return <Youtube className="w-5 h-5" />;
    case 'washing-machine': return <WashingMachine className="w-5 h-5" />;
    case 'ticket': return <Ticket className="w-5 h-5" />;
    default: return <Info className="w-5 h-5" />;
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.IT);
  const [data] = useState<GuideData>(INITIAL_GUIDE_DATA);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [wifiCopied, setWifiCopied] = useState<{name: boolean, pass: boolean}>({ name: false, pass: false });
  const [addressCopied, setAddressCopied] = useState(false);
  const [checklistState, setChecklistState] = useState<Record<string, boolean>>({
    keys: false,
    lights: false,
    trash: false,
    windows: false
  });

  const toggleSection = (id: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleCopy = (text: string, field: 'name' | 'pass') => {
    navigator.clipboard.writeText(text);
    setWifiCopied(prev => ({ ...prev, [field]: true }));
    setTimeout(() => setWifiCopied(prev => ({ ...prev, [field]: false })), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(data.address);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2000);
  };

  const toggleChecklistItem = (item: string) => {
    setChecklistState(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const t = TRANSLATIONS[lang];
  const cleanPhone = (phone: string) => phone.replace(/\D/g, '');

  const renderDescription = (text: string) => {
    // Regex matches URLs OR Phone numbers starting with +39
    const regex = /((?:https?:\/\/[^\s]+)|(?:\+39(?:[0-9 ]){8,}))/g;
    const parts = text.split(regex);
    return parts.map((part, i) => {
      if (!part) return null;

      if (part.match(/^https?:\/\//)) {
        return (
          <a 
            key={i} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-700 hover:text-amber-800 underline underline-offset-4 decoration-amber-500/30 font-bold inline-flex items-center gap-1 transition-colors"
          >
            {part}
            <ExternalLink className="w-3 h-3" />
          </a>
        );
      }
      
      // Phone match
      if (part.trim().match(/^\+39/)) {
         return (
          <a 
            key={i}
            href={`tel:${part.replace(/\s+/g, '')}`}
            className="text-amber-700 hover:text-amber-800 font-bold inline-flex items-center gap-1 transition-colors hover:underline decoration-amber-500/30"
          >
            {part}
          </a>
         );
      }

      // Handle <small> tags
      if (part.includes('<small>') && part.includes('</small>')) {
        const smallRegex = /(<small>.*?<\/small>)/g;
        const subParts = part.split(smallRegex);
        return (
          <span key={i}>
            {subParts.map((subPart, j) => {
              if (subPart.startsWith('<small>') && subPart.endsWith('</small>')) {
                return (
                  <span key={j} className="text-xs text-stone-400 font-normal">
                    {subPart.replace(/<\/?small>/g, '')}
                  </span>
                );
              }
              return subPart;
            })}
          </span>
        );
      }

      return part;
    });
  };

  const renderSectionContent = (section: any) => {
    // Special rendering for Check-in section
    if (section.id === 'checkin') {
      const [checkinText, checkoutText] = section.description[lang].split('|||').map((s: string) => s.trim());
      const checklistKeys = ['keys', 'lights', 'trash', 'windows'];
      
      return (
        <div className="px-6 pb-8 pt-2 space-y-6">
          {/* Time Boxes */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-950/5 border border-emerald-900/10 p-5 rounded-[1.5rem] flex flex-col items-center justify-center text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/50"></div>
               <div className="flex items-center gap-1 mb-2">
                 <CircleArrowDown className="w-3 h-3 text-emerald-700" />
                 <span className="text-emerald-800 text-[10px] font-black uppercase tracking-[0.2em]">{t.arrival}</span>
               </div>
               <div className="text-3xl font-black text-emerald-600 tracking-tight">15:00</div>
            </div>
            <div className="bg-rose-950/5 border border-rose-900/10 p-5 rounded-[1.5rem] flex flex-col items-center justify-center text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-rose-500/50"></div>
               <div className="flex items-center gap-1 mb-2">
                 <CircleArrowUp className="w-3 h-3 text-rose-700" />
                 <span className="text-rose-800 text-[10px] font-black uppercase tracking-[0.2em]">{t.departure}</span>
               </div>
               <div className="text-3xl font-black text-rose-600 tracking-tight">10:00</div>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-4">
            <div className="p-6 bg-emerald-50/50 border border-emerald-100/50 rounded-[1.5rem]">
              <h4 className="flex items-center gap-2 text-emerald-800 font-bold mb-3">
                 <CircleArrowDown className="w-4 h-4" />
                 <span className="text-xs uppercase tracking-widest">{t.checkinInstructions}</span>
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed font-medium">
                {checkinText || section.description[lang]}
              </p>
            </div>
            
            {checkoutText && (
              <div className="p-6 bg-rose-50/50 border border-rose-100/50 rounded-[1.5rem]">
                <h4 className="flex items-center gap-2 text-rose-800 font-bold mb-3">
                   <CircleArrowUp className="w-4 h-4" />
                   <span className="text-xs uppercase tracking-widest">{t.checkoutInstructions}</span>
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed font-medium mb-6">
                  {checkoutText}
                </p>

                {/* Interactive Checklist */}
                <div className="bg-white/60 rounded-xl p-4 border border-rose-100/50">
                  <h5 className="flex items-center gap-2 text-rose-900/70 text-[10px] uppercase font-black tracking-widest mb-3">
                    <ClipboardList className="w-3 h-3" />
                    {t.checkoutChecklist}
                  </h5>
                  <div className="space-y-2">
                    {checklistKeys.map((key) => (
                      <button
                        key={key}
                        onClick={() => toggleChecklistItem(key)}
                        className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors text-left group"
                      >
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          checklistState[key] ? 'bg-rose-500 border-rose-500' : 'border-rose-200 bg-white group-hover:border-rose-300'
                        }`}>
                          {checklistState[key] && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className={`text-sm font-medium transition-colors ${checklistState[key] ? 'text-stone-400 line-through' : 'text-stone-700'}`}>
                          {t.checklist[key as keyof typeof t.checklist]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Special rendering for Wifi
    if (section.id === 'wifi') {
      return (
        <div className="px-6 pb-8 pt-2">
           <div className="bg-white rounded-[1.8rem] p-6 border border-stone-200 shadow-sm relative overflow-hidden group">
              {/* Amber decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div>
                  <h4 className="text-xl font-bold mb-1 text-stone-900">{section.title[lang]}</h4>
                  <p className="text-stone-500 text-xs font-medium">Tocca per copiare</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center border border-amber-200/50">
                   <Wifi className="w-6 h-6 text-amber-700" />
                </div>
              </div>

              <div className="space-y-3 relative z-10">
                 {/* Network */}
                 <button
                    className="w-full bg-stone-50 border border-stone-100 rounded-2xl p-4 flex items-center justify-between group/item hover:bg-amber-50/50 hover:border-amber-100 transition-all active:scale-[0.98] text-left"
                    onClick={() => handleCopy(data.wifi.name, 'name')}
                 >
                    <div>
                       <div className="text-[10px] text-stone-400 font-black uppercase tracking-wider mb-1">Nome Rete</div>
                       <div className="font-mono text-base sm:text-lg font-bold tracking-tight text-stone-800">{data.wifi.name}</div>
                    </div>
                    <div className={`p-2.5 rounded-xl transition-all duration-300 border ${wifiCopied.name ? 'bg-emerald-100 border-emerald-200 text-emerald-600 scale-110' : 'bg-white border-stone-200 text-stone-400 group-hover/item:border-amber-200 group-hover/item:text-amber-600'}`}>
                       {wifiCopied.name ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </div>
                 </button>

                 {/* Password */}
                 <button
                    className="w-full bg-stone-50 border border-stone-100 rounded-2xl p-4 flex items-center justify-between group/item hover:bg-amber-50/50 hover:border-amber-100 transition-all active:scale-[0.98] text-left"
                    onClick={() => handleCopy(data.wifi.password, 'pass')}
                 >
                    <div>
                       <div className="text-[10px] text-stone-400 font-black uppercase tracking-wider mb-1">Password</div>
                       <div className="font-mono text-base sm:text-lg font-bold tracking-tight text-stone-800">{data.wifi.password}</div>
                    </div>
                    <div className={`p-2.5 rounded-xl transition-all duration-300 border ${wifiCopied.pass ? 'bg-emerald-100 border-emerald-200 text-emerald-600 scale-110' : 'bg-white border-stone-200 text-stone-400 group-hover/item:border-amber-200 group-hover/item:text-amber-600'}`}>
                       {wifiCopied.pass ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </div>
                 </button>
              </div>
           </div>
        </div>
      );
    }

    // Special rendering for House Rules
    if (section.id === 'rules') {
      const rulesList = section.description[lang].split('\n').filter((r: string) => r.trim());
      return (
        <div className="px-6 pb-8 pt-4 space-y-5">
          {rulesList.map((rule: string, index: number) => {
            const cleanRule = rule.replace(/^\d+\.\s*/, '');
            // Split title and content by first colon
            const titleIndex = cleanRule.indexOf(':');
            const title = titleIndex > -1 ? cleanRule.substring(0, titleIndex) : null;
            const content = titleIndex > -1 ? cleanRule.substring(titleIndex + 1).trim() : cleanRule;

            return (
              <div key={index} className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0 group-hover:bg-amber-100 group-hover:border-amber-200 transition-colors shadow-sm mt-1">
                  <span className="text-stone-900 group-hover:text-amber-900 font-black text-lg font-serif">{index + 1}</span>
                </div>
                <div className="flex-1 bg-stone-50/50 p-4 rounded-2xl border border-stone-100/50 hover:bg-stone-50 transition-colors">
                    {title && <h5 className="font-black text-stone-800 text-xs uppercase tracking-widest mb-1">{title}</h5>}
                    <p className="text-stone-600 text-sm leading-relaxed font-medium">{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    // Special rendering for Waste
    if (section.id === 'waste') {
      const parts = section.description[lang].split('\n\n');
      const intro = parts[0];
      const locations = parts.slice(1).filter((p: string) => p.includes('Maps:'));
      
      const binsPart = parts.slice(1).find((p: string) => !p.includes('Maps:'));
      const bins = binsPart ? binsPart.split('\n').filter((b: string) => b.trim() !== '') : [];

      return (
        <div className="px-6 pb-8 pt-2 space-y-5">
          <div className="p-5 bg-stone-50 border border-stone-100 rounded-[1.8rem]">
            <p className="text-stone-600 text-sm font-medium leading-relaxed mb-4">{intro}</p>
            
            <div className="space-y-3">
              {locations.map((loc: string, idx: number) => {
                const lines = loc.split('\n');
                const name = lines[0].replace(/^•\s*/, '');
                const urlMatch = lines[1]?.match(/https?:\/\/[^\s]+/);
                const url = urlMatch ? urlMatch[0] : '';

                return (
                  <a 
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 hover:border-amber-200 hover:bg-amber-50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-stone-100 rounded-lg text-stone-500 group-hover:bg-amber-100 group-hover:text-amber-700 transition-colors">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm text-stone-700">{name}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-stone-300 group-hover:text-amber-400" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {bins.map((bin: string, idx: number) => {
              const colorMatch = bin.match(/\(([^)]+)\)/);
              const colorName = colorMatch ? colorMatch[1] : '';
              let colorClass = 'bg-stone-100 border-stone-200 text-stone-600';
              let iconColor = 'text-stone-400';

              if (colorName.toLowerCase().includes('giallo') || colorName.toLowerCase().includes('yellow') || colorName.toLowerCase().includes('gelb') || colorName.toLowerCase().includes('jaune') || colorName.toLowerCase().includes('amarillo')) {
                colorClass = 'bg-yellow-50 border-yellow-200 text-yellow-800';
                iconColor = 'text-yellow-500';
              } else if (colorName.toLowerCase().includes('blu') || colorName.toLowerCase().includes('blue') || colorName.toLowerCase().includes('blau') || colorName.toLowerCase().includes('bleu') || colorName.toLowerCase().includes('azul')) {
                colorClass = 'bg-blue-50 border-blue-200 text-blue-800';
                iconColor = 'text-blue-500';
              } else if (colorName.toLowerCase().includes('verde') || colorName.toLowerCase().includes('green') || colorName.toLowerCase().includes('grün') || colorName.toLowerCase().includes('vert')) {
                colorClass = 'bg-emerald-50 border-emerald-200 text-emerald-800';
                iconColor = 'text-emerald-500';
              } else if (colorName.toLowerCase().includes('marrone') || colorName.toLowerCase().includes('brown') || colorName.toLowerCase().includes('braun') || colorName.toLowerCase().includes('marron')) {
                colorClass = 'bg-amber-50 border-amber-200 text-amber-900';
                iconColor = 'text-amber-700';
              } else if (colorName.toLowerCase().includes('grigio') || colorName.toLowerCase().includes('gray') || colorName.toLowerCase().includes('grau') || colorName.toLowerCase().includes('gris')) {
                colorClass = 'bg-stone-100 border-stone-300 text-stone-600';
                iconColor = 'text-stone-500';
              }

              return (
                <div key={idx} className={`flex items-center gap-4 p-4 rounded-2xl border ${colorClass}`}>
                  <div className={`p-2 bg-white rounded-xl shadow-sm ${iconColor}`}>
                    <Trash2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm">{bin.replace(/•\s*/, '')}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Special rendering for Parking
    if (section.id === 'parking') {
      const parts = section.description[lang].split('|||').map((s: string) => s.trim());
      const name = parts[0] || "Saba Parking";
      const phone = parts[1] || "";
      const bookingUrl = parts[2] || "";
      const mapsUrl = parts[3] || "";

      return (
        <div className="px-6 pb-8 pt-2">
           <div className="bg-white rounded-[1.8rem] border border-stone-200 p-6 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    <CircleParking className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-black text-xl text-stone-900">{name}</h4>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Parcheggio Custodito</p>
                 </div>
              </div>

              <div className="grid gap-3">
                 {/* Navigate */}
                 <a 
                   href={mapsUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-between p-4 rounded-xl bg-stone-50 border border-stone-200 hover:border-amber-200 hover:bg-amber-50 transition-all group"
                 >
                    <div className="flex items-center gap-3">
                       <MapPin className="w-5 h-5 text-stone-400 group-hover:text-amber-600" />
                       <span className="font-bold text-stone-700">Naviga / Navigate</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-stone-300" />
                 </a>

                 {/* Call */}
                 {phone && (
                   <a 
                     href={`tel:${phone}`}
                     className="flex items-center justify-between p-4 rounded-xl bg-stone-50 border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50 transition-all group"
                   >
                      <div className="flex items-center gap-3">
                         <Phone className="w-5 h-5 text-stone-400 group-hover:text-emerald-600" />
                         <span className="font-bold text-stone-700">Chiama / Call</span>
                      </div>
                      <span className="text-xs font-mono text-stone-400">{phone}</span>
                   </a>
                 )}

                 {/* Book */}
                 {bookingUrl && (
                   <a 
                     href={bookingUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-center gap-2 p-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all mt-2"
                   >
                      <span>Prenota Online / Book Now</span>
                      <ExternalLink className="w-4 h-4" />
                   </a>
                 )}
              </div>
           </div>
        </div>
      );
    }

    // Special rendering for Bus
    if (section.id === 'bus') {
      const parts = section.description[lang].split('|||');
      return (
        <div className="px-6 pb-8 pt-2 space-y-4">
          {parts.map((part: string, idx: number) => {
            const isAirport = idx === 0;
            const lines = part.split('\n');
            const urlMatch = part.match(/https?:\/\/[^\s]+/);
            const url = urlMatch ? urlMatch[0] : '';
            const title = lines[0] || '';
            const description = lines.slice(1).filter(l => !l.includes('http')).join('\n');

            return (
              <div key={idx} className="bg-stone-50 border border-stone-200 rounded-[1.8rem] overflow-hidden group hover:border-amber-200 transition-colors">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${isAirport ? 'bg-sky-100 text-sky-700' : 'bg-indigo-100 text-indigo-700'}`}>
                      {isAirport ? <Plane className="w-6 h-6" /> : <TrainFront className="w-6 h-6" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">{title}</h4>
                      <p className="text-stone-500 text-xs mt-1 font-medium whitespace-pre-line">{description}</p>
                    </div>
                  </div>
                  
                  {url && (
                    <a 
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                        isAirport 
                          ? 'bg-sky-50 text-sky-700 hover:bg-sky-100' 
                          : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                      Scendi qui / Get off here
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    
    // Special rendering for Taxi
    if (section.id === 'taxi') {
      const taxiNumber = "+390805343333";
      const taxiStandLink = "https://maps.app.goo.gl/2rpWZWiQTBzvcnxv7?g_st=ac";

      return (
        <div className="px-6 pb-8 pt-2 space-y-5">
           {/* Location Card */}
           <div className="bg-stone-50 border border-stone-200 p-6 rounded-[1.8rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-amber-900">
                <MapPin size={100} />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-3">La tua posizione / Your Location</p>
                <p className="text-xl sm:text-2xl font-black text-stone-800 leading-tight mb-4">{data.address}</p>
                <div className="flex gap-2">
                   <div className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-lg inline-block">
                     Dimora Sorriso
                   </div>
                </div>
              </div>
           </div>

           {/* Call Button */}
           <a 
             href={`tel:${taxiNumber}`}
             className="flex items-center justify-between p-6 rounded-[1.8rem] bg-yellow-400 text-yellow-950 shadow-lg shadow-yellow-400/20 active:scale-95 transition-all group border-2 border-yellow-300 hover:bg-yellow-300"
           >
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div>
                    <div className="font-black text-lg">Taxi Bari</div>
                    <div className="text-xs font-bold opacity-80 uppercase tracking-widest">Call Now</div>
                 </div>
              </div>
              <div className="text-2xl font-black tracking-tight">{taxiNumber}</div>
           </a>

           {/* Taxi Stand Link */}
           <a
             href={taxiStandLink}
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-4 p-5 rounded-[1.8rem] bg-white border border-stone-200 shadow-sm hover:border-amber-200 transition-all active:scale-95 group"
           >
              <div className="w-10 h-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600 group-hover:scale-110 group-hover:bg-amber-100 group-hover:text-amber-800 transition-all">
                <Navigation className="w-5 h-5" />
              </div>
              <div className="flex-1">
                 <div className="font-bold text-stone-900 text-sm">Stazionamento / Taxi Stand</div>
                 <div className="text-xs font-medium text-stone-500">Piazza Giuseppe Garibaldi</div>
              </div>
              <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-amber-500" />
           </a>
        </div>
      );
    }

    // Special rendering for Emergency
    if (section.id === 'emergency') {
      const emergencyNumbers = [
        { number: "112", label: "Numero Unico Emergenze" }
      ];
      
      return (
        <div className="px-6 pb-8 pt-2">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {emergencyNumbers.map((item) => (
               <a 
                 key={item.number}
                 href={`tel:${item.number}`}
                 className="flex flex-col items-center justify-center p-6 rounded-[1.8rem] bg-rose-50 border border-rose-100 hover:bg-rose-100 hover:border-rose-200 transition-all active:scale-95 group text-center shadow-sm"
               >
                 <div className="text-4xl font-black text-rose-600 mb-2 group-hover:scale-110 transition-transform">{item.number}</div>
                 <div className="text-[11px] font-bold text-rose-900 uppercase tracking-widest">{item.label}</div>
               </a>
             ))}
           </div>
        </div>
      );
    }

    // Special rendering for Video Guides
    if (section.id === 'video_guides') {
      const videos = section.description[lang].split('\n').filter((v: string) => v.trim());
      
      return (
        <div className="px-6 pb-8 pt-2 space-y-5">
           {videos.length === 0 ? (
             <p className="text-stone-500 italic text-center text-sm">Nessuna video guida disponibile.</p>
           ) : (
             videos.map((videoLine: string, index: number) => {
               // Parse format: "Title | URL"
               const parts = videoLine.split('|');
               const title = parts[0]?.trim();
               const url = parts[1]?.trim() || parts[0]?.trim();
               
               // Check if it's a YouTube link
               const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
               const gdMatch = url.match(/drive\.google\.com\/file\/d\/([^\/?]+)/);
               
               return (
                 <div key={index} className="bg-white rounded-[1.8rem] border border-stone-200 shadow-sm overflow-hidden hover:border-amber-200 transition-all">
                   <div className="p-4 border-b border-stone-100 bg-stone-50/50 flex items-center gap-3">
                     <div className="p-2 bg-red-100 rounded-xl text-red-600">
                        <Youtube className="w-5 h-5" />
                     </div>
                     <h4 className="font-bold text-stone-900 text-sm">{title}</h4>
                   </div>
                   
                   {ytMatch ? (
                     <div className="relative pt-[56.25%] bg-black">
                       <iframe 
                         src={`https://www.youtube.com/embed/${ytMatch[1]}`}
                         className="absolute inset-0 w-full h-full"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen
                         title={title}
                       ></iframe>
                     </div>
                   ) : gdMatch ? (
                     <div className="relative pt-[56.25%] bg-black">
                       <iframe 
                         src={`https://drive.google.com/file/d/${gdMatch[1]}/preview`}
                         className="absolute inset-0 w-full h-full"
                         allow="autoplay"
                         allowFullScreen
                         title={title}
                       ></iframe>
                     </div>
                   ) : (
                     <div className="p-6 flex justify-center">
                        <a 
                          href={url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-stone-700 transition-colors"
                        >
                          <Play className="w-4 h-4 fill-current" />
                          Guarda Video / Watch Video
                        </a>
                     </div>
                   )}
                 </div>
               );
             })
           )}
        </div>
      );
    }

    // Special rendering for Laundry and Supermarkets
    if (section.id === 'laundry' || section.id === 'supermarkets') {
      const items = section.description[lang].split('•').filter((s: string) => s.trim());
      
      return (
        <div className="px-6 pb-8 pt-2 space-y-4">
          {items.map((item: string, idx: number) => {
            const lines = item.trim().split('\n').map(l => l.trim()).filter(l => l);
            const name = lines[0];
            const mapsLine = lines.find(l => l.toLowerCase().startsWith('maps:'));
            const mapsUrl = mapsLine ? mapsLine.replace(/^maps:\s*/i, '').trim() : '';
            
            return (
              <div key={idx} className="bg-white rounded-[1.8rem] border border-stone-200 p-5 shadow-sm hover:border-amber-200 transition-all group">
                <div className="flex items-center justify-between mb-3">
                   <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${section.id === 'laundry' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
                         {section.id === 'laundry' ? <WashingMachine className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
                      </div>
                      <h4 className="font-bold text-stone-900">{name}</h4>
                   </div>
                </div>
                
                {mapsUrl && (
                  <a 
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-100 hover:bg-stone-100 transition-colors group/link"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-stone-600">
                       <MapPin className="w-4 h-4 text-stone-400 group-hover/link:text-amber-600 transition-colors" />
                       <span>Vedi su Mappa / View on Map</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-stone-300 group-hover/link:text-stone-500" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    // Special rendering for Transport Tickets
    if (section.id === 'transport_tickets') {
      const tickets = section.description[lang].split('\n\n').filter((t: string) => t.trim());
      
      return (
        <div className="px-6 pb-8 pt-2 space-y-4">
          {tickets.map((ticketBlock: string, idx: number) => {
            const lines = ticketBlock.split('\n');
            const title = lines[0].replace(':', '');
            const details = lines.slice(1);
            
            return (
              <div key={idx} className="bg-stone-50 border border-stone-200 rounded-[1.8rem] p-6 hover:border-amber-200 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
                    <Ticket className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-stone-900">{title}</h4>
                </div>
                <ul className="space-y-3">
                  {details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone-600 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>{detail.replace(/^•\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      );
    }

    // Default rendering
    return (
      <div className="px-8 pb-10 pt-2">
        <div className="p-7 bg-stone-50/50 rounded-[2rem] border border-stone-100/80">
          <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line font-medium italic">
            {renderDescription(section.description[lang])}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pb-10 max-w-2xl mx-auto bg-stone-50 text-stone-800 selection:bg-amber-100 font-sans">
      {/* Hero Section */}
      <div className="relative h-[24rem] overflow-hidden border-b border-stone-200 shadow-sm">
        <img 
          src="https://lh3.googleusercontent.com/d/1LvN-m2oAX_NDTLB9qjFCStlfskm4KWG0" 
          alt="Dimora Sorriso Bedroom" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/20 to-transparent" />
        
        <div className="absolute top-6 right-6 flex gap-2">
          {Object.values(Language).map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border-2 transition-all ${
                lang === l 
                  ? 'border-white shadow-lg scale-110 ring-2 ring-amber-500/50' 
                  : 'border-white/60 hover:border-white hover:scale-105 opacity-90 hover:opacity-100'
              }`}
            >
              <img 
                src={FLAGS[l]} 
                alt={l} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="absolute bottom-10 left-8 right-8">
          <div className="flex items-center gap-2 mb-3">
             <span className="px-3 py-1 bg-amber-100 text-amber-800 border border-amber-200 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Dimora di Charme</span>
          </div>
          
          <div className="mb-2">
            <img 
              src="https://lh3.googleusercontent.com/d/1xYCniCsEfDcyYc5ySJekWiGjRuHE1hLN" 
              alt={data.propertyName} 
              className="h-16 sm:h-20 object-contain drop-shadow-sm"
            />
          </div>

          <div className="flex items-center gap-2 text-stone-600 group cursor-pointer w-fit" onClick={handleCopyAddress}>
            <MapPin className="w-4 h-4 text-amber-700" />
            <span className="text-sm font-semibold tracking-tight group-hover:text-amber-800 transition-colors">{data.address}</span>
            <div className={`p-1 rounded-full transition-all ${addressCopied ? 'bg-emerald-100 text-emerald-600' : 'bg-stone-100 text-stone-400 group-hover:bg-amber-100 group-hover:text-amber-800'}`}>
               {addressCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            </div>
            {addressCopied && <span className="text-xs text-emerald-600 font-bold animate-in fade-in zoom-in duration-200">{t.addressCopied}</span>}
          </div>
        </div>
      </div>

      <div className="px-6 py-10 space-y-10">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-5">
          <a 
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(data.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-white rounded-[2rem] border border-stone-200 shadow-sm transition-all hover:shadow-md hover:border-amber-200 active:scale-95 group"
          >
            <div className="p-4 bg-stone-50 rounded-2xl mb-3 transition-colors group-hover:bg-amber-50">
              <Navigation className="w-7 h-7 text-amber-800 transition-transform group-hover:scale-110" />
            </div>
            <span className="text-[10px] font-black text-stone-500 tracking-[0.2em] uppercase group-hover:text-amber-800">{t.getDirections}</span>
          </a>
          
          <a
            href={`https://wa.me/${cleanPhone(data.contacts.whatsapp)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-white rounded-[2rem] border border-stone-200 shadow-sm transition-all hover:shadow-md hover:border-emerald-200 active:scale-95 group"
          >
            <div className="p-4 bg-emerald-50 rounded-2xl mb-3 transition-colors group-hover:bg-emerald-100">
              <MessageCircle className="w-7 h-7 text-emerald-600 transition-transform group-hover:scale-110" />
            </div>
            <span className="text-[10px] font-black text-stone-500 tracking-[0.2em] uppercase group-hover:text-emerald-700">WhatsApp</span>
          </a>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-5">
          {data.sections.map((section) => {
            const isExpanded = expandedSections.has(section.id);
            return (
              <div 
                key={section.id} 
                className={`bg-white rounded-[2.5rem] border overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'border-amber-200 shadow-md ring-1 ring-amber-50' : 'border-stone-200 shadow-sm hover:border-stone-300'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full text-left p-6 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-5">
                    <div className={`p-4 rounded-2xl border transition-all ${
                      isExpanded ? 'bg-amber-800 border-amber-800 text-white' : 'bg-stone-50 border-stone-100 text-stone-500 group-hover:border-amber-200 group-hover:text-amber-800'
                    }`}>
                      {getIcon(section.icon)}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold tracking-tight transition-colors ${isExpanded ? 'text-amber-900' : 'text-stone-800'}`}>
                        {section.title[lang]}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full transition-all ${isExpanded ? 'bg-amber-50' : ''}`}>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${isExpanded ? 'rotate-180 text-amber-800' : 'text-stone-400'}`} />
                    </div>
                  </div>
                </button>
                
                {/* Content */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    {renderSectionContent(section)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Footer */}
        <div className="bg-white rounded-[3.5rem] p-10 border border-stone-200 shadow-xl relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 p-8 opacity-[0.03] group-hover:scale-110 transition-transform text-amber-900 pointer-events-none">
             <MessageCircle size={280} />
          </div>
          
          <div className="relative flex flex-col sm:flex-row items-center gap-10 mb-12 text-center sm:text-left">
            <div className="relative">
              <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl rotate-3 transition-transform group-hover:rotate-0">
                <img src={data.hostImage} alt="Host" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-6 h-6 rounded-full border-4 border-white shadow-sm" title="Online" />
            </div>
            <div>
              <p className="text-amber-800 text-[10px] font-black uppercase tracking-[0.3em] mb-3">{t.yourHost}</p>
              <h4 className="text-4xl font-black text-stone-900 tracking-tighter uppercase">{data.hostName}</h4>
              <p className="text-stone-500 text-sm mt-2 font-medium">Sempre disponibili per ogni tua esigenza.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 relative">
            <a 
              href={`tel:${data.contacts.phone}`}
              className="flex-1 bg-white hover:bg-stone-50 p-6 rounded-[1.8rem] flex items-center justify-center gap-4 transition-all border-2 border-stone-100 hover:border-amber-200 active:scale-95 group/btn shadow-sm"
            >
              <Phone className="w-5 h-5 text-amber-800 transition-colors" />
              <span className="font-black text-xs text-stone-800 uppercase tracking-widest">Chiama</span>
            </a>
            <a 
              href={`https://wa.me/${cleanPhone(data.contacts.whatsapp)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-amber-800 hover:bg-amber-900 p-6 rounded-[1.8rem] flex items-center justify-center gap-4 transition-all shadow-lg shadow-amber-900/10 active:scale-95 group/wa"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span className="font-black text-xs text-white uppercase tracking-widest">WhatsApp</span>
            </a>
          </div>

          {/* Quick Messages */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            {[
              { label: t.msgArriving, icon: <Plane className="w-3 h-3" /> },
              { label: t.msgCheckout, icon: <Check className="w-3 h-3" /> },
              { label: t.msgHelp, icon: <Siren className="w-3 h-3" /> }
            ].map((msg, i) => (
              <a
                key={i}
                href={`https://wa.me/${cleanPhone(data.contacts.whatsapp)}?text=${encodeURIComponent(msg.label)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-50 border border-stone-200 hover:bg-amber-50 hover:border-amber-200 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-center transition-all active:scale-95 group"
              >
                <div className="text-stone-400 group-hover:text-amber-600 transition-colors">{msg.icon}</div>
                <span className="text-[10px] font-bold text-stone-600 leading-tight">{msg.label}</span>
              </a>
            ))}
          </div>
          
          {/* Review Link */}
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full p-4 rounded-2xl bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 flex items-center justify-between group cursor-pointer"
          >
             <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-full text-amber-500 shadow-sm">
                   <Star className="w-4 h-4 fill-current" />
                </div>
                <div>
                   <div className="text-xs font-black text-amber-900 uppercase tracking-widest">{t.leaveReview}</div>
                   <div className="text-xs text-amber-700 font-medium">{t.reviewText}</div>
                </div>
             </div>
             <ChevronDown className="-rotate-90 w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
