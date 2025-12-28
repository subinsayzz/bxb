import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight, Check, X, Plus, Lock, Rocket, ShieldCheck, TrendingUp, Zap, Dumbbell, Layers } from 'lucide-react';
import { slides } from './slidesData';
import MobileAppMockup from './MobileAppMockup';
import './index.css';

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

// --- LAYOUT COMPONENTS ---

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
      <div className="flex-shrink-0 w-full">
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
        {/* Subtle Background Icon */}
        <div className="absolute -bottom-10 -left-10 text-white/[0.02] group-hover:text-white/[0.04] transition-colors transform rotate-12 scale-150 pointer-events-none">
          <div className="w-64 h-64 rounded-full border-4 border-dashed border-current opacity-20" />
        </div>

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
        {/* Glow Effect */}
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
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
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

    {/* Expanded Footer / Conclusion */}
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

const MembershipCard = () => (
  <div className="w-full max-w-sm aspect-[1.586] bg-gradient-to-br from-zinc-950 via-black to-zinc-900 rounded-2xl p-6 text-white shadow-2xl border border-white/10 relative overflow-hidden group mx-auto flex flex-col justify-between transform transition-transform hover:scale-105 duration-500 hover:border-accent/50">

    {/* Shine Effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />
    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

    {/* Top Row: Logo & Badge */}
    <div className="flex justify-between items-start relative z-10 w-full mb-4">
      <div className="text-white font-black text-xl italic tracking-tighter">
        BOXX<span className="text-accent">BURN</span>
      </div>
      <div className="border border-accent text-accent text-[8px] font-bold px-2 py-0.5 rounded tracking-widest uppercase bg-accent/5 backdrop-blur-sm">
        GROWTH ENGINE
      </div>
    </div>

    {/* Middle Row: Chip & Number */}
    <div className="relative z-10 w-full flex flex-col gap-4 mt-2">
      {/* Golden Chip */}
      <div className="w-10 h-7 bg-gradient-to-br from-zinc-400 via-zinc-200 to-zinc-500 rounded-md relative overflow-hidden shadow-md border border-white/20 flex flex-col justify-center gap-[2px] px-0.5">
        <div className="w-full h-px bg-black/10 border-b border-white/20" />
        <div className="w-full h-px bg-black/10 border-b border-white/20" />
        <div className="w-full h-px bg-black/10 border-b border-white/20" />
      </div>

      {/* Card Number */}
      <div className="font-mono text-lg tracking-[0.2em] text-white/95 drop-shadow-sm whitespace-nowrap pl-1">
        •••• •••• •••• 2024
      </div>
    </div>

    {/* Bottom Row: Holder & Validity */}
    <div className="flex justify-between items-end relative z-10 w-full mt-auto pt-4">
      <div className="flex flex-col text-left">
        <span className="text-[7px] text-zinc-500 tracking-widest font-bold uppercase mb-0.5">MEMBER ID</span>
        <span className="text-xs tracking-widest font-bold uppercase text-zinc-100">BXB-COMMUNITY</span>
      </div>
      <div className="flex flex-col items-end text-right">
        <span className="text-[7px] text-zinc-500 tracking-widest font-bold uppercase mb-0.5">VALID THRU</span>
        <span className="text-xs tracking-widest font-bold uppercase text-zinc-100">ANNUAL LICENSE</span>
      </div>
    </div>
  </div>
);

const PricingSlide = ({ slide }) => (
  <div className="flex flex-col h-full justify-center">
    <div className={`grid gap-6 h-full ${slide.addons ? 'lg:grid-cols-12' : 'place-items-center'}`}>

      {/* Core Partnership Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`${slide.addons ? 'lg:col-span-7 xl:col-span-8' : 'w-full max-w-5xl'} bg-zinc-900/50 border border-white/10 rounded-[32px] p-8 md:p-10 relative overflow-hidden flex flex-col justify-center shadow-2xl backdrop-blur-sm`}
      >
        {/* Ambient Backlight */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500/10 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/5 blur-[150px] pointer-events-none rounded-full" />

        <div className="flex flex-col gap-10 h-full justify-center">

          {/* Top Section: Card & Price Side-by-Side (Desktop) or Stacked */}
          <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12 pb-8 border-b border-white/5">
            {/* Visual Card */}
            <div className="w-full max-w-sm flex-shrink-0 transform hover:scale-[1.02] transition-transform duration-500">
              <MembershipCard />
            </div>

            {/* Price & Value */}
            <div className="text-center xl:text-left flex-1 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light border border-white/5 shadow-inner mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">One-Time Investment</span>
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
                Own the asset clearly. No hidden fees.
              </div>
            </div>
          </div>

          {/* Bottom Section: Features Grid */}
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

      {/* Optional Add-ons Card */}
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
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10" />

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl h-full flex flex-col justify-between hover:bg-white/10 hover:border-accent/50 transition-all duration-300 relative overflow-hidden">

            {/* Background Icon Watermark */}
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
        {/* Left: Apps Grid */}
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

        {/* Right: Receipt / Calculation */}
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
              <div className="text-2xl font-black">ONE PRICE</div>
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
    {/* Tour View */}
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

    {/* Content */}
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
              <feature.icon size={24} />
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

const AppShowcaseSlide = ({ slide }) => (
  <div className="grid md:grid-cols-2 gap-12 h-full items-center">
    {/* Features List */}
    <div className="space-y-6">
      <div className="text-2xl text-white/90 font-medium mb-6">{slide.mainIdea}</div>
      {slide.features.map((feature, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5"
        >
          <div className="p-2 bg-accent/20 rounded-lg text-accent mt-1">
            {feature.icon ? <feature.icon size={20} /> : <Check size={20} />}
          </div>
          <div>
            <div className="text-base font-bold text-white">{feature.title || feature.text || feature}</div>
            {feature.desc && <div className="text-xs text-white/60 mt-1 leading-relaxed">{feature.desc}</div>}
          </div>
        </motion.div>
      ))}
      {slide.note && <div className="text-accent font-bold mt-6 tracking-widest uppercase text-sm">{slide.note}</div>}
    </div>

    {/* Visual Mockup Area with Annotations */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="hidden md:flex flex-col justify-center items-center relative h-full w-full pl-12"
    >
      <div className="relative">
        <div className="transform scale-90 lg:scale-100 origin-center relative z-20 shadow-2xl rounded-[55px]">
          <MobileAppMockup />
        </div>

        {/* Annotation: Members Connect (Top Left) */}
        {/* Anchored to the LEFT edge of the phone */}
        <div className="absolute top-[12%] right-[96%] flex items-center gap-2 z-10 pr-4">
          <div className="bg-[#1a1a1a] px-3 py-2 rounded-lg text-[10px] font-bold border border-white/20 text-white shadow-xl whitespace-nowrap">
            Members Connect
          </div>
          <div className="w-12 h-px border-t border-dashed border-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </div>

        {/* Annotation: Book Workshops (Right Middle) */}
        {/* Anchored to the RIGHT edge of the phone */}
        <div className="absolute top-[40%] left-[96%] flex items-center gap-2 z-10 pl-4 flex-row-reverse">
          <div className="bg-[#1a1a1a] px-3 py-2 rounded-lg text-[10px] font-bold border border-white/20 text-white shadow-xl whitespace-nowrap">
            Book Workshops
          </div>
          <div className="w-12 h-px border-t border-dashed border-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </div>

        {/* Annotation: Track Progress (Bottom Left) */}
        {/* Anchored to the LEFT edge of the phone */}
        <div className="absolute bottom-[20%] right-[96%] flex items-center gap-2 z-10 pr-4">
          <div className="bg-[#1a1a1a] px-3 py-2 rounded-lg text-[10px] font-bold border border-white/20 text-white shadow-xl whitespace-nowrap">
            Track Progress
          </div>
          <div className="w-12 h-px border-t border-dashed border-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </div>
      </div>

      <p className="mt-8 text-white/30 text-[10px] text-center max-w-sm font-mono uppercase tracking-widest leading-relaxed">
        * Concept Visualization. <br />
        Your final app will be custom built and tailored to your brand.
      </p>
    </motion.div>
  </div>
);

const GridSlide = ({ slide }) => (
  <div className="h-full flex flex-col overflow-y-auto">
    {slide.note && <div className="text-accent font-bold mb-6 tracking-widest uppercase text-sm">{slide.note}</div>}

    {slide.mainIdea && <div className="text-xl text-white/80 mb-8">{slide.mainIdea}</div>}

    <div className={`grid gap-6 ${slide.items.length > 4 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
      {slide.items.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="p-6 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-3 hover:border-accent/40 hover:bg-white/10 transition-all group"
        >
          <div className="flex justify-between items-start">
            <div className="text-white/40 text-xs uppercase tracking-wider font-bold">
              {item.tag ? item.tag : (slide.type === 'powerups' ? 'Add-on' : 'System-Included')}
            </div>
            {item.icon && <item.icon className="text-accent opacity-50 group-hover:opacity-100 transition-opacity" size={20} />}
          </div>

          <div className="text-xl font-bold text-white font-heading">{item.title}</div>

          {item.desc && <div className="text-white/60 text-sm leading-relaxed">{item.desc}</div>}

          {item.value && (
            <div className="text-accent text-2xl font-mono font-bold mt-auto pt-4 border-t border-white/5">
              {item.value}
            </div>
          )}
        </motion.div>
      ))}
    </div>

    {slide.highlight && (
      <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-xl text-center text-accent font-bold">
        {slide.highlight}
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
          <div className="text-amber-500 font-mono font-bold text-xl">{slide.limitedOffer.value}</div>
        </div>
      </div>
    )}

    {slide.pricingDetails && (
      <div className="mt-4 p-5 rounded-xl bg-white/5 border border-white/10">
        <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Indicative Pricing (Activates only after value is proven)</div>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
          {slide.pricingDetails.items.map((item, i) => (
            <div key={i} className="flex justify-between items-center border-b border-white/5 pb-1 last:border-0">
              <span className="text-white/70">{item.label}</span>
              <span className="text-accent font-mono font-bold">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-[10px] text-white/30 text-center font-mono uppercase tracking-widest">
          {slide.pricingDetails.footer}
        </div>
      </div>
    )}
  </div>
);

// --- ECOSYSTEM FLOW SLIDE ---
const EcosystemFlowSlide = ({ slide }) => (
  <div className="h-full w-full overflow-y-auto custom-scrollbar">
    <div className="min-h-full flex flex-col justify-center p-4 md:p-8">
      <div className="text-xl md:text-2xl font-light text-white/80 mb-8 text-center max-w-3xl mx-auto">{slide.mainIdea}</div>

      <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-12 relative mb-8">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-[2px] z-0">
          <div className="w-full h-full bg-gradient-to-r from-accent/20 to-accent/20 dashed-line relative overflow-hidden">
            <div className="absolute inset-0 bg-accent w-1/2 animate-flow-right blur-md"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg p-2 rounded-full border border-white/10 z-10">
            <ArrowRight size={16} className="text-accent animate-pulse" />
          </div>
        </div>

        {/* Left: Physical */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-1 bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden group hover:border-white/20 transition-colors"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500">
            <Dumbbell size={32} />
          </div>
          <h3 className="text-accent font-bold tracking-widest uppercase text-sm mb-6">{slide.col1Title}</h3>
          <ul className="space-y-4 w-full max-w-xs mx-auto">
            {slide.col1.map((item, i) => (
              <li key={i} className="bg-bg/50 border border-white/5 rounded-lg py-3 px-4 text-white/70 text-sm font-medium flex items-center justify-center gap-2">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Digital */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 bg-accent/5 border border-accent/20 rounded-3xl p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden group hover:bg-accent/10 transition-colors"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-50" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6 border border-accent/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
            <Layers size={32} />
          </div>
          <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-6">{slide.col2Title}</h3>
          <ul className="space-y-4 w-full max-w-xs mx-auto relative z-10">
            {slide.col2.map((item, i) => (
              <li key={i} className="bg-bg/50 border border-accent/10 rounded-lg py-3 px-4 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom flow & Statement */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 text-white/40 text-sm font-mono uppercase tracking-wide mb-6 bg-white/5 px-4 py-2 rounded-full">
          <Zap size={14} className="text-yellow-400" />
          {slide.process}
        </div>

        <div className="text-white/50 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
          {slide.note}
        </div>

        <div className="text-xl md:text-3xl font-bold font-heading text-white tracking-tight uppercase leading-tight">
          {slide.closure}
          <div className="h-1 w-24 bg-accent mx-auto mt-4 rounded-full" />
        </div>
      </motion.div>

    </div>
  </div>
);

// --- ADD-ONS SLIDE ---
const AddOnsSlide = ({ slide }) => (
  <div className="flex flex-col h-full justify-center items-center w-full relative overflow-hidden">
    {/* Orbital Background Decor */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[500px] h-[500px] rounded-full border border-white/[0.03] absolute animate-[spin_60s_linear_infinite]" />
      <div className="w-[800px] h-[800px] rounded-full border border-white/[0.02] absolute animate-[spin_90s_linear_infinite_reverse]" />
      <div className="w-[1100px] h-[1100px] rounded-full border border-white/[0.01] absolute" />
    </div>

    {/* Title Header */}
    <div className="text-center mb-10 md:mb-16 flex-shrink-0 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 shadow-lg backdrop-blur-sm"
      >
        {slide.title}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-black font-heading text-white tracking-tighter uppercase drop-shadow-2xl"
      >
        {slide.subtitle}
      </motion.h1>
    </div>

    {/* Planet Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 relative z-10 w-full max-w-7xl px-4 overflow-y-auto custom-scrollbar p-4">
      {slide.items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, y: -10 }}
          className="aspect-square w-full max-w-[280px] mx-auto rounded-full bg-gradient-to-br from-white/10 via-white/[0.02] to-black/40 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center group relative cursor-default shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(220,38,38,0.2)] hover:border-accent/40 transition-all duration-500"
        >
          {/* Inner Highlight Ring */}
          <div className="absolute inset-[1px] rounded-full border border-white/5 opacity-50 pointer-events-none" />

          {/* Glow Accent */}
          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-full pointer-events-none" />

          {/* Icon */}
          <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-white/80 mb-5 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:rotate-6 transition-all duration-500 shadow-lg relative z-10">
            <item.icon size={30} />
          </div>

          <h3 className="text-white font-bold uppercase tracking-widest text-xs md:text-sm mb-3 relative z-10 group-hover:text-accent transition-colors">{item.title}</h3>
          <div className="text-white/60 text-[10px] md:text-xs leading-relaxed mb-5 line-clamp-3 px-2 relative z-10 font-light group-hover:text-white/80">{item.desc}</div>

          <div className="mt-auto relative z-10">
            <span className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-white/90 font-mono text-[10px] md:text-xs font-bold group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors shadow-lg">
              {item.price}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// --- FINAL CTA SLIDE ---
const FinalCtaSlide = ({ slide }) => (
  <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
    <div className="absolute inset-0 bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="mb-8"
    >
      <div className="w-20 h-20 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center text-accent mx-auto shadow-2xl shadow-accent/10 mb-8 rotate-3">
        <Rocket size={40} />
      </div>
      <h2 className="text-white/40 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-4">{slide.title}</h2>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading text-white uppercase leading-none tracking-tighter mb-8">
        {slide.subtitle}
      </h1>
    </motion.div>

    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
    >
      {slide.tagline}
    </motion.p>

    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16"
    >
      {slide.points.map((point, i) => (
        <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white font-bold tracking-wide text-sm md:text-base hover:bg-white/10 transition-colors cursor-default">
          <Check className="text-accent" size={18} />
          {point}
        </div>
      ))}
    </motion.div>

    <motion.a
      href={slide.ctaLink || "#"}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: 0.6 }}
      className="bg-accent text-white text-lg md:text-xl font-bold uppercase tracking-widest px-10 py-5 rounded-full shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:shadow-[0_0_60px_rgba(220,38,38,0.6)] hover:bg-red-600 transition-all flex items-center gap-4 group border border-white/10"
    >
      {slide.ctaText}
      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
    </motion.a>
  </div>
);

// --- MAIN APP COMPONENT ---

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

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
  }, [currentSlide]);

  const slide = slides[currentSlide];

  const renderContent = () => {
    switch (slide.type) {
      case 'title': return <TitleSlide slide={slide} />;
      case 'list': return <ListSlide slide={slide} />;
      case 'comparison': return <ComparisonSlide slide={slide} />;
      case 'pricing': return <PricingSlide slide={slide} />;
      case 'guarantee': return <GuaranteeSlide slide={slide} />;
      case 'cost-calculator': return <CostCalculatorSlide slide={slide} />;
      case 'app-showcase': return <AppShowcaseSlide slide={slide} />;
      case 'tour': return <TourSlide slide={slide} />;
      case 'community': return <CommunitySlide slide={slide} />;
      case 'grid-cards':
      case 'powerups':
        return <GridSlide slide={slide} />;
      case 'checklist': return <ListSlide slide={{ ...slide, points: slide.checklist }} />;
      case 'feature': return <GridSlide slide={{ ...slide, items: slide.features }} />;
      case 'ecosystem-flow': return <EcosystemFlowSlide slide={slide} />;
      case 'addons': return <AddOnsSlide slide={slide} />;
      case 'final-cta': return <FinalCtaSlide slide={slide} />;
      case 'quote': return (
        <div className="flex flex-col justify-center items-center h-full max-w-4xl mx-auto text-center relative z-10 px-6">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full pointer-events-none transform scale-50 opacity-50" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 relative"
          >
            {/* Refined Accent */}
            <div className="w-12 h-1 bg-accent/80 mb-10 mx-auto rounded-full" />

            <div className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight tracking-tight">
              "{slide.quote}"
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/50 font-body font-light max-w-2xl leading-relaxed"
          >
            {slide.subtext}
          </motion.div>
        </div>
      );
      default: return <ListSlide slide={slide} />;
    }
  };

  return (
    <div className="w-screen h-screen bg-bg text-text overflow-hidden selection:bg-accent selection:text-white flex flex-col relative">
      {/* Background Ambient */}
      <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Slide Content Area */}
      <div className="flex-1 w-full max-w-[1600px] mx-auto p-6 md:p-12 relative flex flex-col">
        {slide.type !== 'title' && (
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
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="h-16 md:h-20 w-full border-t border-white/5 flex items-center justify-between px-6 md:px-16 z-50 bg-bg/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-xs font-mono text-white/50">
            {currentSlide + 1}
          </div>
          <span className="text-white/20 text-xs font-mono uppercase tracking-widest hidden md:inline-block">/ {slides.length}</span>
        </div>

        <div className="flex gap-4">
          <button onClick={prevSlide} disabled={currentSlide === 0} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:bg-red-600 disabled:opacity-30 transition-all shadow-lg shadow-accent/20">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
