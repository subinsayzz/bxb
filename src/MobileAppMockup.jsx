import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home, Calendar, Trophy, User,
    Droplets, Flame, BarChart2, Zap, Clock, ArrowUpRight, ChevronLeft, ChevronRight, Dumbbell, TrendingUp,
    QrCode, Loader2, Check, X
} from 'lucide-react';

const MobileAppMockup = () => {
    const [activeTab, setActiveTab] = useState('welcome');
    const [notification, setNotification] = useState(null);
    const [showQR, setShowQR] = useState(false);

    const navigateTo = (tab) => setActiveTab(tab);

    const handleAction = (msg, type = 'info') => {
        setNotification({ msg, type });
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <div className="flex justify-center items-center h-full w-full py-4 font-sans antialiased">
            {/* Device Frame */}
            <div className="relative w-[320px] h-[660px] bg-black rounded-[55px] shadow-2xl border-[6px] border-[#121212] overflow-hidden ring-1 ring-white/10 select-none">

                {/* Dynamic Island */}
                <div className="absolute top-0 w-full h-12 z-50 flex justify-center items-end pb-2 pointer-events-none">
                    <div className="w-28 h-8 bg-black rounded-full flex items-center justify-between px-4 ring-1 ring-white/5 transition-all duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#333]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#333]" />
                    </div>
                </div>

                {/* Status Bar */}
                <div className="absolute top-3.5 left-7 text-white text-[10px] font-bold z-40 font-mono">9:41</div>
                <div className="absolute top-3.5 right-7 flex gap-1 z-40 opacity-80">
                    <div className="w-4 h-2.5 border border-white rounded-[2px]" />
                    <div className="w-0.5 h-2.5 bg-white rounded-[1px]" />
                </div>

                {/* Main Content Area */}
                <div className="w-full h-full bg-[#050505] text-white relative flex flex-col font-sans">

                    <AnimatePresence mode="wait">
                        {activeTab === 'welcome' && <WelcomeScreen key="welcome" onStart={() => navigateTo('home')} onExplore={() => navigateTo('workshops')} />}
                        {activeTab === 'home' && <HomeScreen key="home" onAction={handleAction} onShowQR={() => setShowQR(true)} />}
                        {activeTab === 'workshops' && <WorkshopsScreen key="workshops" onAction={handleAction} />}
                        {activeTab === 'progress' && <ProgressScreen key="progress" />}
                        {activeTab === 'leaderboard' && <LeaderboardScreen key="leaderboard" />}
                    </AnimatePresence>

                    {/* QR Code Overlay (Global) */}
                    <AnimatePresence>
                        {showQR && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                                className="absolute inset-0 z-[60] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-6"
                            >
                                <button onClick={() => setShowQR(false)} className="absolute top-14 right-6 p-2 bg-[#222] rounded-full text-white/60 hover:text-white transition-colors">
                                    <X size={20} />
                                </button>
                                <div className="bg-white p-4 rounded-[32px] mb-8 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                                    <div className="w-48 h-48 bg-black rounded-[24px] flex items-center justify-center relative overflow-hidden">
                                        {/* Simulated QR Pattern */}
                                        <QrCode size={140} className="text-white relative z-10" />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6]/20 to-transparent" />
                                        <motion.div
                                            animate={{ top: ['0%', '100%', '0%'] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-1 bg-[#3b82f6] shadow-[0_0_15px_#3b82f6] z-20 opacity-80"
                                        />
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold mb-2">Access Pass</h2>
                                <p className="text-white/40 text-center text-xs px-4">Scan at the turnstile to enter. Pass refreshes in <span className="text-[#3b82f6] font-mono">00:28</span></p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation - Floating Dock Style */}
                    {activeTab !== 'welcome' && !showQR && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
                            <NavBar activeTab={activeTab} onNavigate={navigateTo} />
                        </div>
                    )}

                    {/* Dynamic Island Notification */}
                    <AnimatePresence>
                        {notification && (
                            <motion.div
                                initial={{ y: -20, opacity: 0, scale: 0.9 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: -20, opacity: 0, scale: 0.9 }}
                                className="absolute top-11 left-1/2 -translate-x-1/2 bg-[#222] border border-white/10 text-white px-5 py-3 rounded-[24px] text-[11px] font-bold tracking-wide shadow-2xl z-[70] flex items-center gap-3 min-w-[200px]"
                            >
                                <div className={`w-2 h-2 rounded-full ${notification.type === 'success' ? 'bg-green-500' : 'bg-[#3b82f6]'} animate-pulse`} />
                                <span>{notification.msg}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
};

// --- SCREENS ---

const WelcomeScreen = ({ onStart, onExplore }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            onStart();
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="w-full h-full flex flex-col relative bg-black overflow-hidden font-sans"
        >
            {/* HYPRGYM BRANDED LOGIN BG */}
            <div className="absolute inset-0 bg-[#000]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
                <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-60 filter grayscale contrast-125" alt="Gym Background" />
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col justify-end items-center relative z-20 p-6 pb-12">

                <div className="w-full mb-auto mt-20 flex justify-center">
                    {/* Logo Icon */}
                    <div className="w-16 h-16 bg-[#3b82f6] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                        <Dumbbell size={32} className="text-black transform -rotate-45" />
                    </div>
                </div>

                <div className="w-full text-center space-y-2 mb-8">
                    <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase drop-shadow-xl" style={{ fontFamily: 'Impact, sans-serif' }}>
                        HYPR<span className="text-[#3b82f6]">GYM</span>
                    </h1>
                    <p className="text-white/80 text-sm font-medium tracking-wide uppercase">
                        Elite Member Portal
                    </p>
                </div>

                {/* Actions Sheet */}
                <div className="w-full space-y-3">
                    <button onClick={handleLogin} disabled={isLoading} className="w-full h-14 bg-[#3b82f6] text-black rounded-xl font-black text-sm uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] group disabled:opacity-80 disabled:cursor-wait">
                        {isLoading ? (
                            <Loader2 size={20} className="animate-spin text-black" />
                        ) : (
                            <>
                                <span>Login</span>
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                    <div className="flex gap-2">
                        <button onClick={onExplore} className="flex-1 h-12 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold text-xs uppercase tracking-wider border border-white/10 active:scale-95 transition-all hover:bg-white/20">
                            Become a Member
                        </button>
                        <button className="h-12 w-12 flex items-center justify-center bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/10 active:scale-95 transition-all hover:bg-white/20">
                            <User size={18} />
                        </button>
                    </div>
                </div>

                <p className="text-center text-[9px] text-white/30 mt-8 font-mono uppercase tracking-widest">
                    Protected by Gymrupt
                </p>
            </div>
        </motion.div>
    );
};

const HomeScreen = ({ onAction, onShowQR }) => (
    <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="w-full h-full p-5 pt-14 pb-28 overflow-y-auto scrollbar-hide bg-[#000]"
    >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1c1c1e] border border-white/10 flex items-center justify-center text-white font-bold text-sm">
                    AL
                </div>
                <div>
                    <div className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Welcome Back</div>
                    <div className="text-lg font-bold text-white leading-none">Alex Lewis</div>
                </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1c1c1e] flex items-center justify-center text-white/50 border border-white/5 active:bg-[#3b82f6] active:text-white transition-colors">
                <div className="relative">
                    <User size={18} />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#3b82f6] rounded-full border-2 border-[#1c1c1e]" />
                </div>
            </div>
        </div>

        {/* Hero Card: Today's Workout */}
        <div className="w-full bg-[#1c1c1e] rounded-[24px] p-5 mb-4 relative overflow-hidden group active:scale-[0.98] transition-transform" onClick={() => onAction('Workout Started')}>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6]/20 via-transparent to-transparent opacity-50" />

            <div className="relative z-10 flex justify-between items-start mb-8">
                <div className="px-2.5 py-1 bg-[#3b82f6] text-black text-[9px] font-black uppercase tracking-widest rounded-md">
                    Today
                </div>
                <ArrowUpRight size={20} className="text-white/30" />
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-1 uppercase italic tracking-tight">Push Day <span className="text-[#3b82f6]">/ A</span></h3>
                <p className="text-xs text-white/50 font-medium">45 Mins • 8 Exercises</p>
            </div>

            {/* Play Button Icon */}
            <div className="absolute bottom-5 right-5 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-[10px] border-l-black border-y-[6px] border-y-transparent ml-1" />
            </div>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-[#111] p-4 rounded-[20px] border border-white/5 flex flex-col justify-between h-28">
                <div className="flex justify-between items-start">
                    <Flame size={16} className="text-[#3b82f6]" />
                    <span className="text-[10px] font-bold text-white/30 uppercase">Kcal</span>
                </div>
                <div>
                    <div className="text-2xl font-bold text-white">480</div>
                    <div className="text-[10px] text-white/40">Goal: 800</div>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                    <div className="w-[60%] h-full bg-[#3b82f6] rounded-full" />
                </div>
            </div>
            <div className="bg-[#111] p-4 rounded-[20px] border border-white/5 flex flex-col justify-between h-28">
                <div className="flex justify-between items-start">
                    <Clock size={16} className="text-[#3b82f6]" />
                    <span className="text-[10px] font-bold text-white/30 uppercase">Time</span>
                </div>
                <div>
                    <div className="text-2xl font-bold text-white">45<span className="text-xs font-normal text-white/40 ml-1">m</span></div>
                    <div className="text-[10px] text-white/40">Avg: 50m</div>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                    <div className="w-[85%] h-full bg-[#3b82f6] rounded-full" />
                </div>
            </div>
        </div>

        {/* Quick Actions Grid */}
        <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3 pl-1">Quick Actions</h4>
        <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#1c1c1e] p-4 rounded-[20px] flex items-center gap-3 active:bg-[#333] transition-colors" onClick={onShowQR}>
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-[#3b82f6] border border-white/10"><QrCode size={18} /></div>
                <div className="text-sm font-bold">Check In</div>
            </div>
            <div className="bg-[#1c1c1e] p-4 rounded-[20px] flex items-center gap-3 active:bg-[#333] transition-colors" onClick={() => onAction('Meal Logged: Avocado Toast', 'success')}>
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-green-500 border border-white/10"><Droplets size={18} /></div>
                <div className="text-sm font-bold">Log Food</div>
            </div>
        </div>

    </motion.div>
);

const WorkshopsScreen = ({ onAction }) => {
    const [selectedDate, setSelectedDate] = useState(0);
    const [bookingStatus, setBookingStatus] = useState({});

    const handleBook = (id, title) => {
        setBookingStatus(prev => ({ ...prev, [id]: 'loading' }));
        setTimeout(() => {
            setBookingStatus(prev => ({ ...prev, [id]: 'booked' }));
            onAction(`Booked: ${title}`, 'success');
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="w-full h-full p-5 pt-14 pb-28 bg-[#000]"
        >
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold font-heading italic uppercase text-white">Bookings</h1>
                <div className="px-3 py-1 bg-[#1c1c1e] rounded-full text-[10px] font-bold text-white/60 uppercase">Credits: 4</div>
            </div>

            {/* Date Strip */}
            <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedDate(i)}
                        className={`flex-shrink-0 w-12 h-16 rounded-xl flex flex-col items-center justify-center gap-1 border transition-all cursor-pointer ${selectedDate === i ? 'bg-[#3b82f6] border-[#3b82f6] text-black shadow-lg shadow-blue-900/20 scale-105' : 'bg-[#1c1c1e] border-transparent text-white/40'}`}
                    >
                        <span className="text-[10px] font-bold uppercase">Dec</span>
                        <span className="text-lg font-black">{24 + i}</span>
                    </div>
                ))}
            </div>

            {/* Class List */}
            <div className="space-y-3 h-[300px] overflow-y-auto scrollbar-hide pb-20">
                {[
                    { id: 1, name: 'HYROX Prep', time: '07:00', trainer: 'Coach Sarah', spots: 2 },
                    { id: 2, name: 'Strength Lab', time: '12:30', trainer: 'Coach Mike', spots: 8 },
                    { id: 3, name: 'Metcon 45', time: '17:30', trainer: 'Coach Dav', spots: 0, full: true },
                    { id: 4, name: 'Recovery', time: '19:00', trainer: 'Coach Emma', spots: 5 },
                ].map((cls) => (
                    <div key={cls.id} className="bg-[#1c1c1e] p-4 rounded-[20px] flex items-center justify-between border border-white/5">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-bold text-white">{cls.time}</span>
                                <span className={`text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/50 font-medium uppercase ${cls.full ? 'text-red-500 bg-red-500/10' : ''}`}>{cls.spots > 0 ? `${cls.spots} Spots` : 'Full'}</span>
                            </div>
                            <h3 className="text-base font-bold text-white mb-0.5">{cls.name}</h3>
                            <p className="text-xs text-white/40">{cls.trainer}</p>
                        </div>
                        <button
                            onClick={() => !cls.full && bookingStatus[cls.id] !== 'booked' && handleBook(cls.id, cls.name)}
                            disabled={cls.full || bookingStatus[cls.id] === 'booked' || bookingStatus[cls.id] === 'loading'}
                            className={`min-w-[80px] h-[34px] rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center
                                ${cls.full
                                    ? 'bg-white/5 text-white/20 cursor-not-allowed'
                                    : bookingStatus[cls.id] === 'booked'
                                        ? 'bg-green-500 text-black shadow-lg shadow-green-900/20'
                                        : 'bg-white text-black hover:bg-[#3b82f6] hover:text-white shadow-lg'}
                            `}
                        >
                            {bookingStatus[cls.id] === 'loading' ? (
                                <Loader2 size={14} className="animate-spin" />
                            ) : bookingStatus[cls.id] === 'booked' ? (
                                <Check size={16} />
                            ) : cls.full ? (
                                'Full'
                            ) : (
                                'Book'
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const ProgressScreen = () => (
    <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="w-full h-full p-5 pt-14 pb-28 bg-[#000]"
    >
        <h1 className="text-2xl font-bold font-heading italic uppercase text-white mb-6">Metrics</h1>

        {/* Weight Card */}
        <div className="bg-[#1c1c1e] rounded-[24px] p-5 mb-4 relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <div className="text-[10px] font-bold uppercase text-white/40 tracking-wider mb-1">Current Weight</div>
                    <div className="text-3xl font-black text-white">74.5 <span className="text-lg font-medium text-white/40">kg</span></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] text-xs font-bold">
                    <TrendingUp size={14} />
                </div>
            </div>

            {/* Chart */}
            <div className="flex items-end justify-between h-24 gap-2">
                {[60, 45, 70, 55, 75, 50, 80].map((h, i) => (
                    <div key={i} className="w-full bg-[#333] rounded-t-sm relative group">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.1 }}
                            className={`absolute bottom-0 w-full rounded-t-sm ${i === 6 ? 'bg-[#3b82f6]' : 'bg-white/20'}`}
                        />
                    </div>
                ))}
            </div>
        </div>

        {/* BMI & Fat Row */}
        <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#1c1c1e] p-4 rounded-[20px] border border-white/5">
                <div className="text-[10px] font-bold uppercase text-white/40 mb-2">Body Fat</div>
                <div className="text-xl font-bold text-white">12.4%</div>
                <div className="text-[9px] text-green-500 mt-1">-0.8% this week</div>
            </div>
            <div className="bg-[#1c1c1e] p-4 rounded-[20px] border border-white/5">
                <div className="text-[10px] font-bold uppercase text-white/40 mb-2">Muscle Mass</div>
                <div className="text-xl font-bold text-white">62.1kg</div>
                <div className="text-[9px] text-[#3b82f6] mt-1">+0.4kg this week</div>
            </div>
        </div>
    </motion.div>
);

const LeaderboardScreen = () => (
    <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="w-full h-full p-5 pt-14 pb-28 bg-[#000]"
    >
        <h1 className="text-2xl font-bold font-heading italic uppercase text-white mb-6">Top Performers</h1>

        {/* Podium */}
        <div className="flex items-end justify-center mb-8 gap-3">
            {/* 2nd Place */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-[#1c1c1e] flex items-center justify-center text-xs font-bold text-white/60">SJ</div>
                <div className="w-16 h-24 bg-[#1c1c1e] rounded-t-xl flex flex-col items-center justify-end pb-3 border-t-2 border-white/10">
                    <span className="text-xl font-black text-white/40">2</span>
                </div>
            </div>
            {/* 1st Place */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative">
                    <div className="w-16 h-16 rounded-full border-2 border-[#3b82f6] bg-[#1c1c1e] flex items-center justify-center text-sm font-bold text-white">AM</div>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2"><Trophy size={16} className="text-[#3b82f6] fill-current" /></div>
                </div>
                <div className="w-20 h-32 bg-gradient-to-t from-[#3b82f6]/20 to-[#1c1c1e] rounded-t-xl flex flex-col items-center justify-end pb-3 border-t-2 border-[#3b82f6]">
                    <span className="text-3xl font-black text-[#3b82f6]">1</span>
                </div>
            </div>
            {/* 3rd Place */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-[#1c1c1e] flex items-center justify-center text-xs font-bold text-white/60">MT</div>
                <div className="w-16 h-16 bg-[#1c1c1e] rounded-t-xl flex flex-col items-center justify-end pb-3 border-t-2 border-white/10">
                    <span className="text-xl font-black text-white/40">3</span>
                </div>
            </div>
        </div>

        {/* List */}
        <div className="space-y-2">
            {[
                { r: 4, n: 'David P.', s: '2,150' },
                { r: 5, n: 'Emma R.', s: '1,980' },
                { r: 6, n: 'Chris L.', s: '1,850' },
            ].map((u, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-[#111] rounded-[14px] border border-white/5">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-white/30 w-4">{u.r}</span>
                        <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center text-[10px] font-bold text-white/60">{u.n.charAt(0)}</div>
                        <span className="text-sm font-medium text-white">{u.n}</span>
                    </div>
                    <span className="text-sm font-bold text-[#3b82f6]">{u.s}</span>
                </div>
            ))}
        </div>
    </motion.div>
);


// --- NAV BAR ---

const NavBar = ({ activeTab, onNavigate }) => {
    const tabs = [
        { id: 'home', icon: Home },
        { id: 'workshops', icon: Calendar },
        { id: 'progress', icon: BarChart2 },
        { id: 'leaderboard', icon: Trophy },
    ];

    return (
        <div className="h-14 bg-[#1c1c1e]/90 backdrop-blur-xl rounded-[24px] flex items-center gap-2 p-1.5 border border-white/10 shadow-2xl">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onNavigate(tab.id)}
                    className={`w-12 h-full rounded-[18px] flex items-center justify-center transition-all ${activeTab === tab.id
                        ? 'bg-[#3b82f6] text-black shadow-lg shadow-blue-900/50'
                        : 'text-white/40 hover:text-white hover:bg-white/5'
                        }`}
                >
                    <tab.icon size={20} strokeWidth={2.5} />
                </button>
            ))}
        </div>
    );
};

export default MobileAppMockup;
