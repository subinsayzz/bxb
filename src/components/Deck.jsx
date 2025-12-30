import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight, Check, X, Plus, Lock, Rocket, ShieldCheck, TrendingUp, Zap, Dumbbell, Layers, Monitor, Smartphone, Globe, Maximize2 } from 'lucide-react';
import MobileAppMockup from '../MobileAppMockup';
import WebsiteMockup from '../WebsiteMockup';
import '../index.css';

// --- ANIMATION VARIANTS ---
const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
    })
};

// --- SUB-COMPONENTS ---

const Header = ({ title, subtitle, slideIndex, totalSlides }) => (
    <div className="w-full flex justify-between items-start mb-6 md:mb-10 border-b border-white/5 pb-4 md:pb-6">
        <div>
            <motion.h4
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-accent uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-2 font-body"
            >
                {subtitle}
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] font-heading uppercase"
            >
                {title}
            </motion.h2>
        </div>
        <div className="text-right hidden md:block">
            <div className="text-white/20 font-black text-xl tracking-tighter font-heading">
                GYMRUPT<span className="text-accent">.</span>
            </div>
            <div className="text-white/40 text-xs font-mono mt-1">
                {slideIndex + 1} / {totalSlides}
            </div>
        </div>
    </div>
);

// 8. INTERACTIVE TABS SLIDE
const InteractiveTabsSlide = ({ slide, onFullscreenToggle }) => {
    const [activeTab, setActiveTab] = useState(slide.tabs[0].id);
    const [isMockupFullscreen, setIsMockupFullscreen] = useState(false);
    const activeContent = slide.tabs.find(t => t.id === activeTab).content;

    const handleFullscreenToggle = (isFull) => {
        setIsMockupFullscreen(isFull); // Track locally to adjust styles
        if (onFullscreenToggle) onFullscreenToggle(isFull); // Propagate to Deck
    };

    // Helper to render the specific component or iframe within the Split View
    const renderSplitPreview = () => {
        if (activeContent.componentName === 'WebsiteMockup') {
            return (
                <div className={`w-full h-full relative overflow-hidden bg-[#050505] rounded-r-2xl border-l border-white/5 group ${isMockupFullscreen ? 'z-[9999]' : ''}`}>
                    {/* Simulated 1440px Desktop Viewport. 
                        CRITICAL FIX: When fullscreen, we must REMOVE the transform/scale so fixed positioning works relative to viewport. 
                    */}
                    <div className={`absolute inset-0 origin-top-left transition-transform duration-0 ${isMockupFullscreen ? '' : 'w-[200%] h-[200%] transform scale-[0.5]'}`}>
                        <WebsiteMockup onFullscreenToggle={handleFullscreenToggle} isFullscreen={isMockupFullscreen} />
                    </div>

                    {/* Clear Enlargement Call-to-Action - ON HOVER ONLY for sleekness */}
                    {!isMockupFullscreen && (
                        <button
                            onClick={() => handleFullscreenToggle(true)}
                            className="absolute top-6 right-6 z-50 bg-black/70 backdrop-blur-md text-white/90 hover:text-white px-5 py-2.5 rounded-full flex items-center gap-2.5 border border-white/20 hover:bg-accent hover:border-accent transition-all cursor-pointer shadow-2xl scale-95 hover:scale-105 opacity-0 group-hover:opacity-100 duration-300"
                        >
                            <Maximize2 size={16} />
                            <span className="text-xs font-bold uppercase tracking-wider">Enlarge</span>
                        </button>
                    )}
                </div>
            );
        }
        if (activeContent.componentName === 'MobileAppMockup') {
            return (
                <div className="w-full h-full flex items-center justify-center relative overflow-visible">
                    {/* Clean Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-accent/5 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10 w-max h-max">
                        {/* Mockup Container */}
                        <div className="transform scale-[0.80] md:scale-[0.85] xl:scale-[0.90] origin-center">
                            <MobileAppMockup />
                        </div>

                        {/* FEATURE NODES (Overlay) - Positioned with calculated offset to touch bezel only */}

                        {/* Node 1: Branding (Top Left) */}
                        <div className="absolute top-[12%] -left-[40px] md:-left-[230px] flex items-center gap-2 animate-in fade-in slide-in-from-right-8 duration-700 delay-300 pointer-events-none">
                            <div className="bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] uppercase font-bold text-white shadow-2xl whitespace-nowrap hidden md:block">
                                Custom Branding
                            </div>
                            <div className="w-8 md:w-24 h-[1px] bg-gradient-to-l from-accent to-transparent" />
                            <div className="w-1.5 h-1.5 rounded-full bg-accent box-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                        </div>

                        {/* Node 2: Booking (Middle Right) */}
                        <div className="absolute top-[42%] -right-[40px] md:-right-[230px] flex items-center gap-2 flex-row-reverse animate-in fade-in slide-in-from-left-8 duration-700 delay-500 pointer-events-none">
                            <div className="bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] uppercase font-bold text-white shadow-2xl whitespace-nowrap hidden md:block">
                                1-Tap Booking
                            </div>
                            <div className="w-8 md:w-24 h-[1px] bg-gradient-to-r from-accent to-transparent" />
                            <div className="w-1.5 h-1.5 rounded-full bg-accent box-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                        </div>

                        {/* Node 3: Gamification (Bottom Left) */}
                        <div className="absolute bottom-[22%] -left-[40px] md:-left-[230px] flex items-center gap-2 animate-in fade-in slide-in-from-right-8 duration-700 delay-700 pointer-events-none">
                            <div className="bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] uppercase font-bold text-white shadow-2xl whitespace-nowrap hidden md:block">
                                Gamified Progress
                            </div>
                            <div className="w-8 md:w-24 h-[1px] bg-gradient-to-l from-accent to-transparent" />
                            <div className="w-1.5 h-1.5 rounded-full bg-accent box-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                        </div>
                    </div>
                </div>
            );
        }
        if (activeContent.componentName === 'TourEmbed') {
            return (
                <div className="w-full h-full relative group bg-[#050505] rounded-r-2xl overflow-hidden border-l border-white/5">
                    <iframe
                        src={activeContent.embedUrl}
                        className="w-full h-full border-0 opacity-100 mix-blend-normal"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* Interactive hint overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                    <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 pointer-events-none z-10 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live 360° View</span>
                    </div>
                </div>
            );
        }
        // Fallback for generic Iframe if needed
        if (activeContent.type === 'iframe') {
            return <iframe src={activeContent.url} className="w-full h-full border-0" title={activeTab} allowFullScreen />;
        }
        return null;
    };

    return (
        <div className="h-full flex flex-col">
            {/* Header Area with Tabs on Right */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 shrink-0">
                <div className="text-xl text-white/60 font-light max-w-xl leading-snug">
                    {slide.mainIdea}
                </div>

                {/* Tabs Header */}
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide shrink-0">
                    {slide.tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all whitespace-nowrap ${isActive
                                    ? 'bg-[#1a1a1a] border-accent text-white shadow-lg'
                                    : 'bg-transparent border-transparent text-white/40 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <tab.icon size={18} className={isActive ? 'text-accent' : ''} />
                                <span className="font-bold uppercase tracking-wide text-xs md:text-sm">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Split Content Area - Seamless & Blended */}
            <div className="flex-1 bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden relative shadow-2xl flex flex-col lg:flex-row">

                {activeContent.type === 'split-preview' ? (
                    <>
                        {/* LEFT COLUMN: Features & Explainer */}
                        <div className="w-full lg:w-[40%] p-8 lg:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0a0a0a] relative z-10">
                            <motion.div
                                key={`text-${activeTab}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h3 className="text-3xl font-black uppercase italic font-heading text-white mb-3">
                                        {activeContent.title}
                                    </h3>
                                    <p className="text-white/50 leading-relaxed font-light text-base">
                                        {activeContent.desc}
                                    </p>
                                </div>

                                <div className="grid gap-4">
                                    {activeContent.features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-4 text-white/80 group">
                                            <div className="w-8 h-8 rounded-full bg-accent/5 flex items-center justify-center text-accent/50 group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm font-medium">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Dynamic Value Display */}
                                {activeContent.value && (
                                    <div className="pt-6 border-t border-white/5">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-1">Estimated Value</div>
                                                <div className="text-xl text-white font-bold tracking-tight">
                                                    {activeContent.value.replace('Value:', '').replace('VALUE:', '')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN: Interactive Preview */}
                        <div className="w-full lg:w-[60%] h-full relative bg-[#050505]">
                            <motion.div
                                key={`preview-${activeTab}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full"
                            >
                                {renderSplitPreview()}
                            </motion.div>
                        </div>
                    </>
                ) : (
                    // Fallback
                    <div className="w-full h-full relative">
                        {renderSplitPreview()}
                    </div>
                )}
            </div>
        </div>
    );
};


const TitleSlide = ({ slide }) => (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6 md:space-y-8 p-4">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 bg-accent/10 rounded-full mb-4 ring-1 ring-accent/30"
        >
            <slide.icon size={64} className="text-accent" />
        </motion.div>

        <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.9] uppercase tracking-tight"
        >
            {slide.title}
        </motion.h1>

        <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-white/80 font-body font-light tracking-widest uppercase"
        >
            {slide.subtitle}
        </motion.h3>

        <div className="h-px w-24 bg-accent my-8" />

        <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-xl max-w-2xl text-white/60 font-body"
        >
            {slide.tagline}
        </motion.p>

        {slide.points && (
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
                {slide.points.map((p, i) => (
                    <motion.div
                        key={i}
                        custom={i + 4}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center gap-2 text-sm md:text-base font-bold text-white bg-white/5 px-4 py-2 rounded-full border border-white/5"
                    >
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        {p}
                    </motion.div>
                ))}
            </div>
        )}
    </div>
);

const ListSlide = ({ slide }) => (
    <div className="h-full w-full overflow-y-auto custom-scrollbar">
        <div className="min-h-full flex flex-col justify-center max-w-5xl mx-auto w-full p-4 md:p-8">
            {slide.mainIdea && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl font-heading font-medium text-white/90 mb-8 md:mb-10 text-center leading-tight"
                >
                    {slide.mainIdea}
                </motion.div>
            )}

            <div className="grid gap-4 md:gap-5">
                {slide.points.map((point, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center gap-6 p-5 md:p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-accent/40 hover:bg-white/[0.08] transition-all group backdrop-blur-sm"
                    >
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-accent/50 group-hover:text-accent group-hover:scale-110 group-hover:bg-accent/10 border border-white/5 group-hover:border-accent/20 transition-all duration-300">
                            {slide.type === 'checklist' ? <Check size={20} /> : <ArrowRight size={20} />}
                        </div>
                        <span className="text-lg md:text-xl text-zinc-300 font-medium group-hover:text-white transition-colors">{point}</span>
                    </motion.div>
                ))}
            </div>

            {slide.highlight && (
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                    className="mt-8 md:mt-10 p-5 bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent rounded-r-xl"
                >
                    <div className="text-accent font-bold uppercase tracking-widest text-xs mb-1">Key Takeaway</div>
                    <div className="text-white font-medium text-lg">{slide.highlight}</div>
                </motion.div>
            )}

            {slide.footer && (
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                    className="mt-8 md:mt-12 text-center pb-8"
                >
                    <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-accent font-bold tracking-widest uppercase text-xs shadow-lg">
                        {slide.footer}
                    </span>
                </motion.div>
            )}
        </div>
    </div>
);

const ComparisonSlide = ({ slide }) => (
    <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-xl md:text-2xl text-zinc-400 mb-8 font-light hidden md:block text-center max-w-4xl mx-auto">{slide.mainIdea}</div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 flex-1 overflow-visible">

            {/* Left Column: The Problem / Current State */}
            <motion.div
                initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                className="bg-gradient-to-br from-white/[0.03] to-transparent rounded-[32px] p-8 border border-white/5 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors"
            >
                <div className="inline-block px-3 py-1 bg-white/10 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8 self-start border border-white/5">
                    {slide.col1Title}
                </div>

                <ul className="space-y-4 flex-1 relative z-10">
                    {slide.col1.map((item, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-zinc-400 text-lg font-medium flex items-start gap-4"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                        </motion.li>
                    ))}
                </ul>

                {slide.col1Footer && (
                    <div className="mt-8 pt-6 border-t border-white/5 text-zinc-500 text-xs font-bold font-mono leading-relaxed uppercase tracking-wide">
                        {slide.col1Footer}
                    </div>
                )}
            </motion.div>

            {/* Right Column: The Solution / Future State */}
            <motion.div
                initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-accent/5 to-transparent rounded-[32px] p-8 border border-accent/20 flex flex-col relative overflow-hidden group hover:bg-accent/[0.08] transition-colors shadow-2xl shadow-accent/5"
            >
                <div className="absolute top-0 right-0 p-32 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="inline-block px-3 py-1 bg-accent/10 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-8 self-start border border-accent/20">
                    {slide.col2Title}
                </div>

                <ul className="space-y-4 relative z-10 flex-1">
                    {slide.col2.map((item, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="text-white text-xl font-medium flex items-start gap-4"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                            <span className="leading-relaxed">{item}</span>
                        </motion.li>
                    ))}
                </ul>

                {slide.col2Footer && (
                    <div className="mt-8 pt-6 border-t border-accent/20 text-accent text-xs font-bold font-mono leading-relaxed uppercase tracking-wide relative z-10">
                        {slide.col2Footer}
                    </div>
                )}
            </motion.div>
        </div>

        {slide.conclusion && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
            >
                <div className="inline-block bg-white/5 border border-white/10 rounded-xl px-8 py-4 text-zinc-300 text-base md:text-lg leading-relaxed shadow-lg backdrop-blur-md">
                    {slide.conclusion}
                </div>
            </motion.div>
        )}
    </div>
);

const FeatureSlide = ({ slide }) => (
    <div className="h-full flex flex-col justify-center">
        {slide.mainIdea && (
            <div className="text-xl md:text-2xl text-white/80 mb-10 font-medium leading-relaxed max-w-4xl text-center mx-auto">
                {slide.mainIdea}
            </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {slide.features.map((feature, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
                >
                    <div className="text-accent font-bold text-lg mb-2 group-hover:text-white transition-colors">
                        {feature.title}
                    </div>
                    <div className="text-white/60 text-sm leading-relaxed">
                        {feature.desc}
                    </div>
                </motion.div>
            ))}
        </div>

        {slide.mantra && (
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                className="mt-12 text-center"
            >
                <span className="text-2xl font-heading font-bold text-white italic">
                    "{slide.mantra}"
                </span>
            </motion.div>
        )}
    </div>
);

const MembershipCard = () => (
    <div className="w-full max-w-sm aspect-[1.586] bg-gradient-to-br from-zinc-950 via-black to-zinc-900 rounded-2xl p-6 text-white shadow-2xl border border-white/10 relative overflow-hidden group mx-auto flex flex-col justify-between transform transition-transform hover:scale-105 duration-500 hover:border-accent/50">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

        <div className="flex justify-between items-start relative z-10 w-full mb-4">
            <div className="text-white font-black text-xl italic tracking-tighter">
                GYM<span className="text-accent">RUPT</span>
            </div>
            <div className="border border-accent text-accent text-[8px] font-bold px-2 py-0.5 rounded tracking-widest uppercase bg-accent/5 backdrop-blur-sm">
                GROWTH PARTNER
            </div>
        </div>

        <div className="relative z-10 w-full flex flex-col gap-4 mt-2">
            <div className="w-10 h-7 bg-gradient-to-br from-zinc-400 via-zinc-200 to-zinc-500 rounded-md relative overflow-hidden shadow-md border border-white/20 flex flex-col justify-center gap-[2px] px-0.5">
                <div className="w-full h-px bg-black/10 border-b border-white/20" />
                <div className="w-full h-px bg-black/10 border-b border-white/20" />
                <div className="w-full h-px bg-black/10 border-b border-white/20" />
            </div>
            <div className="font-mono text-lg tracking-[0.2em] text-white/95 drop-shadow-sm whitespace-nowrap pl-1">
                •••• •••• •••• 2025
            </div>
        </div>

        <div className="flex justify-between items-end relative z-10 w-full mt-auto pt-4">
            <div className="flex flex-col text-left">
                <span className="text-[7px] text-zinc-500 tracking-widest font-bold uppercase mb-0.5">MEMBER ID</span>
                <span className="text-xs tracking-widest font-bold uppercase text-zinc-100">GROWTH-OS</span>
            </div>
            <div className="flex flex-col items-end text-right">
                <span className="text-[7px] text-zinc-500 tracking-widest font-bold uppercase mb-0.5">VALID THRU</span>
                <span className="text-xs tracking-widest font-bold uppercase text-zinc-100">LIFETIME</span>
            </div>
        </div>
    </div>
);

const PricingSlide = ({ slide }) => (
    <div className="flex flex-col h-full justify-center">
        <div className={`grid gap-6 h-full ${slide.addons ? 'lg:grid-cols-12' : 'place-items-center'}`}>

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`${slide.addons ? 'lg:col-span-7 xl:col-span-8' : 'w-full max-w-5xl'} bg-zinc-900/50 border border-white/10 rounded-[32px] p-8 md:p-10 relative overflow-hidden flex flex-col justify-center shadow-2xl backdrop-blur-sm`}
            >
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500/10 blur-[150px] pointer-events-none rounded-full" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/5 blur-[150px] pointer-events-none rounded-full" />

                <div className="flex flex-col gap-10 h-full justify-center">

                    <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12 pb-8 border-b border-white/5">
                        <div className="w-full max-w-sm flex-shrink-0 transform hover:scale-[1.02] transition-transform duration-500">
                            <MembershipCard />
                        </div>

                        <div className="text-center xl:text-left flex-1 space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light border border-white/5 shadow-inner mb-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Annual Investment</span>
                            </div>
                            <div className="flex items-baseline justify-center xl:justify-start gap-2">
                                <div className="text-5xl md:text-6xl lg:text-7xl font-black font-heading tracking-tighter text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                                    {slide.price}
                                </div>
                                {slide.priceSuffix && (
                                    <span className="text-xl md:text-2xl text-white/30 font-medium tracking-normal uppercase">{slide.priceSuffix}</span>
                                )}
                            </div>
                            <div className="text-sm text-white/40 font-medium tracking-wide">
                                Annual license for growth. No hidden fees.
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                        <div className="text-white/30 font-bold tracking-[0.2em] uppercase text-[10px] mb-6 flex items-center gap-4">
                            <span className="whitespace-nowrap">What's Included</span>
                            <div className="h-px w-full bg-white/5"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            {slide.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-all group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                        <Check size={16} />
                                    </div>
                                    <span className="text-zinc-300 font-medium text-sm md:text-base group-hover:text-white transition-colors">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {slide.addons && (
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-5 xl:col-span-4 bg-zinc-950 border border-white/10 rounded-[32px] p-8 flex flex-col relative overflow-hidden h-full shadow-2xl"
                >
                    <div className="absolute inset-0 bg-dotted-pattern opacity-5 pointer-events-none" />

                    <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6 relative z-10">
                        <div>
                            <div className="text-white font-bold text-xl leading-none">Power Add-Ons</div>
                            <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-2">Optional "Done-For-You"</div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                            <Plus size={20} />
                        </div>
                    </div>

                    <div className="space-y-3 flex-1 overflow-y-auto pr-1 custom-scrollbar-dark relative z-10">
                        {slide.addons.map((addon, i) => (
                            <div key={i} className="group p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-accent/20 transition-all hover:translate-x-1 cursor-default">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="font-bold text-zinc-200 group-hover:text-accent transition-colors text-sm">{addon.title}</div>
                                    {addon.icon && <addon.icon size={14} className="text-zinc-600 group-hover:text-accent transition-colors" />}
                                </div>
                                <div className="text-xs text-zinc-500 leading-relaxed mb-3 line-clamp-2">{addon.desc}</div>
                                <div className="inline-block px-2 py-1 bg-accent/5 rounded border border-accent/10 text-accent font-mono font-bold text-[10px] uppercase tracking-wider">{addon.price}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

        </div>
    </div>
);

const GuaranteeSlide = ({ slide }) => (
    <div className="flex flex-col h-full justify-center">
        <div className="grid md:grid-cols-2 gap-8 h-full md:h-auto items-stretch">
            {slide.rules.map((rule, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="relative group isolate"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10" />

                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl h-full flex flex-col justify-between hover:bg-white/10 hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute -bottom-10 -right-10 text-white/5 group-hover:text-accent/10 transition-colors transform rotate-12 scale-150 pointer-events-none">
                            {i === 0 ? <ShieldCheck size={200} /> : <TrendingUp size={200} />}
                        </div>

                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-accent/20 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest">
                                    Rule 0{i + 1}
                                </div>
                                {i === 0 ? <Lock className="text-white/20" size={32} /> : <Rocket className="text-white/20" size={32} />}
                            </div>

                            <h3 className="text-3xl md:text-4xl font-black text-white mb-2 font-heading tracking-tight">{rule.title}</h3>
                            <p className="text-white/60 text-lg leading-relaxed max-w-sm relative z-10">{rule.desc}</p>
                        </div>

                        <div className="mt-12 relative z-10">
                            <div className="text-sm text-white/40 uppercase tracking-widest font-bold mb-2">Target Metric</div>
                            <div className="text-5xl md:text-6xl font-black text-accent font-mono tracking-tighter">
                                {rule.amount}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className="mt-8 text-center bg-white/5 p-4 rounded-xl border border-white/5 inline-block mx-auto">
            <div className="inline-flex items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-xs">
                <ShieldCheck size={16} className="text-accent" /> 100% Risk-Free Partnership Guarantee
            </div>
        </div>
    </div>
);

const CostCalculatorSlide = ({ slide }) => {
    const totalCost = slide.items.reduce((acc, item) => acc + parseInt(item.cost), 0);
    const annualCost = totalCost * 12;

    return (
        <div className="h-full flex flex-col">
            <div className="text-xl md:text-2xl font-light text-white/80 mb-6">{slide.mainIdea}</div>

            <div className="flex flex-col lg:flex-row gap-8 flex-1 overflow-hidden">
                <div className="flex-1 overflow-y-auto pr-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {slide.items.map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-accent/40 hover:bg-white/10 transition-all group text-center gap-2"
                            >
                                <div className="p-2 bg-accent/10 rounded-full text-accent group-hover:scale-110 transition-transform">
                                    {item.icon ? <item.icon size={20} /> : <Check size={20} />}
                                </div>
                                <div className="text-xs font-bold text-white/90 uppercase tracking-wide">{item.name}</div>
                                <div className="text-xs font-mono text-white/50">₹{parseInt(item.cost).toLocaleString()}/mo</div>
                            </motion.div>
                        ))}
                        <div className="col-span-2 md:col-span-3 p-3 border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center text-white/30 font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-colors cursor-default">
                            + And Much More...
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-96 flex-shrink-0 bg-white shadow-2xl rounded-2xl p-6 text-slate-900 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-purple-600" />
                    <h3 className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-6">Cost of Separation</h3>
                    <div className="space-y-3 mb-6 flex-1 overflow-y-auto max-h-[200px] lg:max-h-none custom-scrollbar-dark">
                        {slide.items.map((item, i) => (
                            <div key={i} className="flex justify-between text-sm border-b border-slate-100 pb-2">
                                <span className="text-slate-600">{item.name}</span>
                                <span className="font-mono font-bold text-slate-800">₹{parseInt(item.cost).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-auto pt-4 border-t-2 border-slate-900">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-slate-500 font-bold text-sm">Monthly Total</span>
                            <span className="text-2xl font-black font-mono text-slate-900">₹{totalCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-end mb-6">
                            <span className="text-red-500 font-bold text-xs uppercase">Annual Cost</span>
                            <span className="text-lg font-bold font-mono text-red-500">₹{annualCost.toLocaleString()}</span>
                        </div>
                        <div className="bg-slate-900 text-white p-4 rounded-xl text-center">
                            <div className="text-accent text-xs font-bold uppercase tracking-wider mb-1">With Gymrupt</div>
                            <div className="text-2xl font-black">ONE ANNUAL FEE</div>
                            <div className="text-white/60 text-[10px] mt-1">Replaces everything above.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const TourSlide = ({ slide }) => (
    <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full h-[300px] md:h-[450px] bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group"
        >
            <div className="absolute inset-0 bg-accent/5 pointer-events-none group-hover:bg-transparent transition-colors z-10" />
            <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: slide.embed }} />
            <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live 360° Preview</span>
            </div>
        </motion.div>

        <div className="space-y-6">
            <div className="text-2xl md:text-3xl text-white font-heading font-bold leading-tight">
                {slide.mainIdea}
            </div>
            <div className="grid gap-4">
                {slide.features.map((feature, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-accent/40 transition-all group"
                    >
                        <div className="p-2 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform">
                            {feature.icon ? <feature.icon size={24} /> : <Zap size={24} />}
                        </div>
                        <div>
                            <div className="text-lg font-bold text-white mb-1">{feature.title}</div>
                            <div className="text-sm text-white/60 leading-relaxed">{feature.desc}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
            {slide.note && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="p-4 bg-accent/10 border-l-4 border-accent rounded-r-xl"
                >
                    <p className="text-accent font-bold italic text-sm">{slide.note}</p>
                </motion.div>
            )}
        </div>
    </div>
);

const CommunitySlide = ({ slide }) => (
    <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="max-w-4xl w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-32 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="text-2xl md:text-4xl text-white font-heading font-black mb-8 text-center uppercase tracking-tight">
                    {slide.mainIdea}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {slide.points.map((point, i) => {
                        const [title, ...rest] = point.split(':');
                        return (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-accent/30 transition-all group"
                            >
                                <div className="text-accent font-bold text-lg mb-2">{title}</div>
                                <div className="text-white/60 text-sm leading-relaxed">{rest.join(':').trim()}</div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {slide.footer && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <span className="px-6 py-3 rounded-full bg-accent/20 border border-accent/20 text-accent font-black tracking-widest uppercase text-xs">
                        {slide.footer}
                    </span>
                </motion.div>
            )}
        </div>
    </div>
);

const GridSlide = ({ slide }) => (
    <div className="h-full flex flex-col overflow-y-auto custom-scrollbar pr-2">
        {slide.note && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold mb-6 tracking-widest uppercase text-[10px] w-fit">
                <Zap size={14} /> {slide.note}
            </div>
        )}

        {slide.mainIdea && <div className="text-xl md:text-2xl text-white/70 mb-10 font-medium leading-relaxed max-w-4xl">{slide.mainIdea}</div>}

        <div className={`grid gap-5 md:gap-6 ${slide.items.length > 4 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {slide.items.map((item, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="p-6 md:p-8 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-3xl flex flex-col gap-4 hover:border-accent/40 hover:bg-white/[0.08] transition-all group relative overflow-hidden backdrop-blur-sm"
                >
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 blur-[80px] rounded-full group-hover:bg-accent/10 transition-colors pointer-events-none" />

                    <div className="flex justify-between items-start relative z-10">
                        <div className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-black">
                            {item.tag ? item.tag : (slide.type === 'powerups' ? 'Add-on' : 'Core Integration')}
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent/40 group-hover:text-accent group-hover:scale-110 transition-all border border-white/5 group-hover:border-accent/20">
                            {item.icon ? <item.icon size={20} /> : <Rocket size={20} />}
                        </div>
                    </div>

                    <div className="text-xl md:text-2xl font-black text-white font-heading tracking-tight group-hover:text-accent transition-colors relative z-10">
                        {item.title}
                    </div>

                    {item.desc && <div className="text-white/50 text-sm md:text-base leading-relaxed group-hover:text-white/70 transition-colors relative z-10">{item.desc}</div>}

                    {item.value && (
                        <div className="mt-auto pt-6 border-t border-white/5 flex items-baseline gap-2 relative z-10">
                            <div className="text-accent text-3xl md:text-4xl font-black font-heading tracking-tighter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                {item.value}
                            </div>
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        </div>
                    )}
                </motion.div>
            ))}
        </div>

        {slide.highlight && (
            <div className="mt-10 p-6 bg-accent/5 border border-accent/20 rounded-2xl flex items-center justify-center text-center">
                <div className="text-accent font-black uppercase tracking-[0.2em] text-sm md:text-base">
                    {slide.highlight}
                </div>
            </div>
        )}

        {slide.limitedOffer && (
            <div className="mt-4 p-4 rounded-xl border-2 border-dashed border-amber-500/30 bg-amber-500/5 flex items-center justify-between gap-4">
                <div>
                    <div className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-1">{slide.limitedOffer.tag}</div>
                    <div className="text-white font-heading font-bold text-lg">{slide.limitedOffer.title}</div>
                    <div className="text-white/60 text-sm mt-1">{slide.limitedOffer.desc}</div>
                </div>
                <div className="text-right">
                    <span className="text-2xl font-black font-mono text-white strike">{slide.limitedOffer.value}</span>
                </div>
            </div>
        )}
    </div>
);

const FinalCtaSlide = ({ slide }) => (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="mb-10 p-8 bg-accent/10 rounded-full ring-1 ring-accent/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]"
        >
            <Rocket size={80} className="text-accent" />
        </motion.div>

        <motion.h2
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} delay={0.1}
            className="text-4xl md:text-7xl font-heading font-black text-white mb-6 uppercase tracking-tight"
        >
            {slide.title}
        </motion.h2>

        <motion.h3
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} delay={0.2}
            className="text-xl md:text-3xl text-white/80 font-heading font-light uppercase tracking-widest mb-10"
        >
            {slide.subtitle}
        </motion.h3>

        <motion.p
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} delay={0.3}
            className="text-xl text-white/50 max-w-2xl mb-12 leading-relaxed"
        >
            {slide.tagline}
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
            {slide.points.map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70 font-bold tracking-wide">
                    <Check size={20} className="text-accent" /> {p}
                </div>
            ))}
        </div>

        <motion.a
            href={slide.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-accent text-white font-black text-xl uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">{slide.ctaText}</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
        </motion.a>
    </div>
);

// --- MAIN DECK COMPONENT ---

// 9. NEW: PREVIEW SPLIT SLIDE (2 Col: Left Text, Right Preview)
const PreviewSplitSlide = ({ slide, onFullscreenToggle }) => {
    // Determine which component to render
    const renderPreview = () => {
        if (slide.componentName === 'WebsiteMockup') return <WebsiteMockup onFullscreenToggle={onFullscreenToggle} />;
        if (slide.componentName === 'MobileAppMockup') return <MobileAppMockup />;
        return null;
    };

    return (
        <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
            {/* Left Column: Explainer */}
            <div className="space-y-6 order-2 lg:order-1 relative z-10">
                <div>
                    <div className="text-accent font-bold tracking-widest uppercase mb-2 text-sm">
                        {slide.subtitle}
                    </div>
                    <div className="text-3xl md:text-5xl font-heading font-black text-white leading-none uppercase">
                        {slide.title}
                    </div>
                </div>

                <div className="text-xl text-white/60 leading-relaxed max-w-lg font-light">
                    {slide.mainIdea}
                </div>

                {/* Features List */}
                <div className="space-y-4 py-4">
                    {slide.features && slide.features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} delay={0.3 + (i * 0.1)}
                            className="flex items-center gap-4"
                        >
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                                <Check size={14} />
                            </div>
                            <div className="text-white font-bold tracking-wide text-lg">{feature}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Value Pill */}
                {slide.note && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} delay={0.6}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full"
                    >
                        <Zap size={16} className="text-accent fill-accent" />
                        <span className="text-accent font-black tracking-widest uppercase text-sm">{slide.note}</span>
                    </motion.div>
                )}
            </div>

            {/* Right Column: Component Preview */}
            <div className="h-full w-full relative order-1 lg:order-2 flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 w-full h-full max-h-[700px] flex items-center justify-center">
                    {renderPreview()}
                </div>
            </div>
        </div>
    );
};

const Deck = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isFullscreenMode, setIsFullscreenMode] = useState(false); // Global fullscreen state for suppressing UI

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setDirection(1);
            setCurrentSlide(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setDirection(-1);
            setCurrentSlide(prev => prev - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide, slides]); // Added slides dependency

    const slide = slides[currentSlide];

    // Render appropriate slide based on type
    const renderSlide = (slide) => {
        const props = { slide, nextSlide, prevSlide, onFullscreenToggle: setIsFullscreenMode };
        switch (slide.type) {
            case 'title': return <TitleSlide {...props} />;
            case 'list': return <ListSlide {...props} />;
            case 'checklist': return <ListSlide {...props} />;
            case 'comparison': return <ComparisonSlide {...props} />;
            case 'grid-cards': return <GridSlide {...props} />;
            case 'feature': return <FeatureSlide {...props} />;
            case 'tour': return <TourSlide {...props} />;
            case 'pricing': return <PricingSlide {...props} />;
            case 'cost-calculator': return <CostCalculatorSlide {...props} />;
            case 'community': return <CommunitySlide {...props} />;
            case 'guarantee': return <GuaranteeSlide {...props} />;
            case 'powerups': return <GridSlide {...props} />;
            case 'addons': return <GridSlide {...props} />;
            case 'ecosystem-flow': return <ComparisonSlide {...props} />;
            case 'quote': return <FeatureSlide {...props} slide={{ ...slide, features: [], mainIdea: slide.quote, mantra: slide.subtext }} />;
            case 'final-cta': return <FinalCtaSlide {...props} />;
            case 'interactive-tabs': return <InteractiveTabsSlide {...props} />;
            case 'app-showcase': return <AppShowcaseSlide {...props} />;
            case 'preview-split': return <PreviewSplitSlide {...props} />;
            default: return <HighlightSlide {...props} />;
        }
    };

    return (
        <div className="h-screen w-full bg-black text-white overflow-hidden flex flex-col font-sans selection:bg-accent selection:text-white relative">

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-900/10 blur-[150px] rounded-full" />
            </div>

            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
                <motion.div
                    className="h-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            <main className="flex-1 w-full max-w-[1600px] mx-auto p-4 md:p-8 lg:p-12 flex flex-col relative z-10">

                {slide.type !== 'title' && slide.type !== 'final-cta' && (
                    <Header
                        title={slide.title}
                        subtitle={slide.subtitle}
                        slideIndex={currentSlide}
                        totalSlides={slides.length}
                    />
                )}

                <div className="flex-1 relative">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentSlide}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {renderSlide(slides[currentSlide])}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>

            {/* Navigation Controls - HIDDEN IN FULLSCREEN */}
            {!isFullscreenMode && (
                <div className="fixed bottom-8 right-8 flex gap-4 z-50">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:border-accent/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
                    >
                        <ChevronLeft className="text-white group-hover:text-accent transition-colors" />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20 hover:scale-105 hover:shadow-accent/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronRight />
                    </button>
                </div>
            )}

            {/* Progress Bar - HIDDEN IN FULLSCREEN */}
            {!isFullscreenMode && (
                <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5 z-50">
                    <motion.div
                        className="h-full bg-accent"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            )}

        </div>
    );
};
export default Deck;
