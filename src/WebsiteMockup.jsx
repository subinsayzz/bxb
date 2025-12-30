import React, { useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import { motion } from 'framer-motion';

const WebsiteMockup = ({ onFullscreenToggle, isFullscreen: externalIsFullscreen }) => {
    const [internalIsFullscreen, setInternalIsFullscreen] = useState(false);

    // Use external prop if provided, otherwise internal state
    const isFullscreen = externalIsFullscreen !== undefined ? externalIsFullscreen : internalIsFullscreen;

    const toggleFullscreen = () => {
        const newState = !isFullscreen;
        if (externalIsFullscreen === undefined) setInternalIsFullscreen(newState);
        if (onFullscreenToggle) onFullscreenToggle(newState);
    };

    // The HTML content for the inner iframe (isolated environment)
    // We will use Vanilla JS inside the string for navigation to keep it simple and fast in the iframe.
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    blue: { 600: '#2563EB', 700: '#1D4ED8' },
                    accent: '#ff3333',
                  },
                  fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                  }
                }
              }
            }
        </script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <style>
            @font-face {
                font-family: 'Futura LT';
                src: url('/fonts/FuturaLT-Medium.ttf') format('truetype');
                font-weight: 700;
                font-style: normal;
            }
            body { font-family: 'Inter', sans-serif; background-color: #050505; color: white; overflow-x: hidden; }
            .font-heading { font-family: 'Futura LT', sans-serif; }
            .italic { font-style: italic; }
            /* Hide scrollbar for cleaner look */
            ::-webkit-scrollbar { width: 8px; }
            ::-webkit-scrollbar-track { background: #000; }
            ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
            
            .page-section { display: none; opacity: 0; transition: opacity 0.5s ease; }
            .page-section.active { display: block; opacity: 1; }
            
            .nav-link { position: relative; cursor: pointer; }
            .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: #2563EB; transition: width 0.3s; }
            .nav-link:hover::after, .nav-link.active::after { width: 100%; }
            .nav-link.active { color: #3B82F6; }
            
            .animate-up { animation: fadeInUp 0.8s ease-out forwards; }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        </style>
    </head>
    <body class="relative min-h-screen flex flex-col">
        
        <!-- Main Nav -->
        <nav class="sticky top-0 z-40 px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center">
            <div class="flex items-center gap-2 cursor-pointer" onclick="navigateTo('home')">
                <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform -skew-x-12">
                     <i class="fa-solid fa-bolt text-white"></i>
                </div>
                <div class="text-2xl font-black tracking-tighter italic">HYPR<span class="text-blue-600">GYM</span></div>
            </div>
            <div class="hidden md:flex gap-8 font-bold text-sm tracking-wide uppercase">
                <div class="nav-link active" onclick="navigateTo('home')" id="nav-home">Home</div>
                <div class="nav-link" onclick="navigateTo('workouts')" id="nav-workouts">Workouts</div>
                <div class="nav-link" onclick="navigateTo('locations')" id="nav-locations">Locations</div>
                <div class="nav-link" onclick="navigateTo('shop')" id="nav-shop">Shop</div>
            </div>
            <button class="bg-blue-600 text-white px-6 py-2 font-black uppercase italic hover:bg-white hover:text-black transition-all transform skew-x-[-12deg] shadow-[0_0_20px_rgba(37,99,235,0.5)] active:scale-95" onclick="alert('Demo: Redirect to secure checkout')">
                <span class="skew-x-[12deg] inline-block">Join Now</span>
            </button>
        </nav>

        <!-- PAGE CONTENT CONTAINER -->
        <main class="flex-1">
            
            <!-- === HOME PAGE === -->
            <div id="page-home" class="page-section active">
                <!-- Hero -->
                <header class="relative h-[80vh] flex items-center justify-center overflow-hidden">
                    <div class="absolute inset-0 z-0">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60 z-10"></div>
                        <img src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover opacity-80" />
                    </div>
                    <div class="relative z-20 text-center max-w-5xl px-4 mt-10">
                        <div class="flex justify-center mb-6 animate-up">
                            <span class="bg-white/10 border border-white/10 backdrop-blur-md rounded-full px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Welcome to the Future</span>
                        </div>
                        <h1 class="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-8 italic uppercase animate-up" style="animation-delay: 0.1s">
                            Unleash<br />
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-white to-blue-600">Your Inner</span><br/>
                            Beast
                        </h1>
                        <div class="flex gap-6 justify-center animate-up" style="animation-delay: 0.2s">
                            <button class="px-8 py-4 bg-white text-black font-black uppercase tracking-widest hover:scale-105 transition-transform skew-x-[-12deg]" onclick="navigateTo('workouts')">
                               <span class="skew-x-[12deg] inline-block">Explore Classes</span>
                            </button>
                        </div>
                    </div>
                </header>

                <!-- Stats -->
                <div class="bg-black border-y border-white/10 py-12">
                    <div class="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 px-6">
                        <div class="text-center"><div class="text-4xl font-black italic text-white mb-1">24/7</div><div class="text-xs font-bold uppercase text-white/50">Access</div></div>
                        <div class="text-center"><div class="text-4xl font-black italic text-white mb-1">50+</div><div class="text-xs font-bold uppercase text-white/50">Trainers</div></div>
                        <div class="text-center"><div class="text-4xl font-black italic text-white mb-1">12K</div><div class="text-xs font-bold uppercase text-white/50">Members</div></div>
                    </div>
                </div>

                <!-- Experience Section -->
                <section class="py-24 px-6 max-w-7xl mx-auto">
                    <div class="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 class="text-blue-600 font-bold tracking-widest uppercase mb-2">The Experience</h2>
                            <h3 class="text-5xl font-black italic uppercase">Built Different.</h3>
                        </div>
                        <p class="max-w-md text-white/60 text-sm mt-4 md:mt-0">State-of-the-art biomechanics meets electric atmosphere.</p>
                    </div>
                    <div class="grid md:grid-cols-3 gap-6">
                         <div class="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                            <div class="absolute bottom-0 left-0 p-8 w-full">
                                <h4 class="text-2xl font-black uppercase italic mb-2">Smart Biomechanics</h4>
                                <div class="h-1 w-12 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
                            </div>
                        </div>
                        <div class="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                            <div class="absolute bottom-0 left-0 p-8 w-full">
                                <h4 class="text-2xl font-black uppercase italic mb-2">Recovery Labs</h4>
                                <div class="h-1 w-12 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
                            </div>
                        </div>
                        <div class="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                            <div class="absolute bottom-0 left-0 p-8 w-full">
                                <h4 class="text-2xl font-black uppercase italic mb-2">Hypr Community</h4>
                                <div class="h-1 w-12 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Coaches Section -->
                <section class="py-24 px-6 bg-[#080808] border-y border-white/5">
                    <div class="max-w-7xl mx-auto">
                        <div class="text-center mb-16">
                            <h2 class="text-blue-600 font-bold tracking-widest uppercase mb-2">Expert Guidance</h2>
                            <h3 class="text-4xl md:text-5xl font-black italic uppercase">Meet The <span class="text-white">Elite</span></h3>
                        </div>
                        <div class="grid md:grid-cols-3 gap-8">
                             <!-- Coach 1 -->
                             <div class="group text-center">
                                 <div class="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/5 group-hover:border-blue-600 transition-colors mb-6 relative">
                                     <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=150&auto=format&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                 </div>
                                 <h4 class="text-2xl font-black italic uppercase">Marcus Cole</h4>
                                 <p class="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">Strength & Conditioning</p>
                                 <p class="text-white/40 text-sm max-w-xs mx-auto">Former Olympian dedicated to building functional powerhouse athletes.</p>
                             </div>
                             <!-- Coach 2 -->
                             <div class="group text-center">
                                 <div class="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/5 group-hover:border-blue-600 transition-colors mb-6 relative">
                                     <img src="https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=150&auto=format&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                 </div>
                                 <h4 class="text-2xl font-black italic uppercase">Sarah Jenkins</h4>
                                 <p class="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">HIIT Specialist</p>
                                 <p class="text-white/40 text-sm max-w-xs mx-auto">High energy, high intensity. guaranteed to make you sweat.</p>
                             </div>
                             <!-- Coach 3 -->
                             <div class="group text-center">
                                 <div class="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/5 group-hover:border-blue-600 transition-colors mb-6 relative">
                                     <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=150&auto=format&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                 </div>
                                 <h4 class="text-2xl font-black italic uppercase">Elena Rodriguez</h4>
                                 <p class="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">Mobility & Recovery</p>
                                 <p class="text-white/40 text-sm max-w-xs mx-auto">Focusing on longevity, flexibility, and injury prevention.</p>
                             </div>
                        </div>
                    </div>
                </section>

                <!-- Testimonials / The Vibe -->
                <section class="py-24 px-6 max-w-7xl mx-auto">
                    <div class="flex flex-col md:flex-row gap-12 items-center">
                        <div class="md:w-1/2">
                             <h2 class="text-blue-600 font-bold tracking-widest uppercase mb-2">The Vibe</h2>
                             <h3 class="text-4xl md:text-5xl font-black italic uppercase mb-8">Don't Just Take<br/>Our Word For It.</h3>
                             <div class="space-y-6">
                                 <div class="bg-white/5 p-6 rounded-2xl border-l-4 border-blue-600">
                                     <div class="flex gap-1 text-blue-500 mb-2 text-xs">
                                         <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                     </div>
                                     <p class="italic text-white/80 mb-4">"Hands down the best training facility in the city. The recovery lab saved my back after heavy deadlifts."</p>
                                     <div class="font-bold uppercase text-sm">- Jamie L.</div>
                                 </div>
                                 <div class="bg-white/5 p-6 rounded-2xl border-l-4 border-transparent hover:border-blue-600 transition-colors">
                                     <div class="flex gap-1 text-blue-500 mb-2 text-xs">
                                         <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                     </div>
                                     <p class="italic text-white/80 mb-4">"The community here is unmatched. Everyone is pushing each other to get better every single day."</p>
                                     <div class="font-bold uppercase text-sm">- Alex D.</div>
                                 </div>
                             </div>
                        </div>
                        <div class="md:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2070&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover" />
                             <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                                 <div class="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_40px_rgba(37,99,235,0.6)]">
                                     <i class="fa-solid fa-play text-white ml-1"></i>
                                 </div>
                             </div>
                        </div>
                    </div>

                <!-- Pricing Section -->
                <section class="bg-zinc-900/50 py-24 px-6 border-y border-white/5 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-64 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
                    <div class="max-w-7xl mx-auto relative z-10">
                        <div class="text-center mb-16">
                            <h2 class="text-4xl md:text-5xl font-black italic uppercase mb-4">Choose Your <span class="text-blue-600">Level</span></h2>
                            <p class="text-white/50">No contracts. Cancel anytime. Just results.</p>
                        </div>
                        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
                            <!-- Day Pass -->
                            <div class="bg-[#0a0a0a] border border-white/5 hover:border-white/10 p-8 rounded-3xl flex flex-col text-center transition-all hover:-translate-y-2">
                                <h3 class="text-xl font-black uppercase italic mb-2 text-white">Day Pass</h3>
                                <div class="text-4xl font-black text-white mb-6">$15</div>
                                <ul class="space-y-4 mb-8 flex-1 text-sm text-zinc-400 text-left pl-4">
                                    <li class="flex gap-2"><div class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div> Gym Access</li>
                                    <li class="flex gap-2"><div class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div> Locker Use</li>
                                </ul>
                                <button class="w-full py-3 font-bold uppercase tracking-widest bg-white/5 hover:bg-white hover:text-black rounded-xl transition-all">Select</button>
                            </div>
                            
                            <!-- Pro Plan (Popular) -->
                            <div class="bg-black border border-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.2)] p-10 rounded-3xl flex flex-col text-center relative transform scale-105 z-10">
                                <div class="absolute -top-4 inset-x-0 flex justify-center">
                                     <span class="bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</span>
                                </div>
                                <h3 class="text-2xl font-black uppercase italic mb-2 text-white">Pro</h3>
                                <div class="text-5xl font-black text-white mb-1">$49<span class="text-lg text-white/50 font-medium">/mo</span></div>
                                <div class="text-xs text-blue-500 font-bold uppercase tracking-widest mb-6">Billed Monthly</div>
                                <ul class="space-y-4 mb-8 flex-1 text-sm text-zinc-300 text-left pl-4">
                                    <li class="flex gap-2"><div class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div> 24/7 Access</li>
                                    <li class="flex gap-2"><div class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div> All Classes Included</li>
                                    <li class="flex gap-2"><div class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div> Sauna & Ice Bath</li>
                                    <li class="flex gap-2"><div class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div> 1 Guest Pass/mo</li>
                                </ul>
                                <button class="w-full py-4 font-bold uppercase tracking-widest bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all">Join Pro</button>
                            </div>

                            <!-- Elite Plan -->
                            <div class="bg-[#0a0a0a] border border-white/5 hover:border-white/10 p-8 rounded-3xl flex flex-col text-center transition-all hover:-translate-y-2">
                                <h3 class="text-xl font-black uppercase italic mb-2 text-white">Elite</h3>
                                <div class="text-4xl font-black text-white mb-6">$89<span class="text-lg text-white/50 font-medium">/mo</span></div>
                                <ul class="space-y-4 mb-8 flex-1 text-sm text-zinc-400 text-left pl-4">
                                    <li class="flex gap-2"><div class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div> Everything in Pro</li>
                                    <li class="flex gap-2"><div class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div> PT Session (2x/mo)</li>
                                    <li class="flex gap-2"><div class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div> Nutrition Plan</li>
                                    <li class="flex gap-2"><div class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div> Hypr Merch Pack</li>
                                </ul>
                                <button class="w-full py-3 font-bold uppercase tracking-widest bg-white/5 hover:bg-white hover:text-black rounded-xl transition-all">Select</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- === WORKOUTS PAGE === -->
            <div id="page-workouts" class="page-section">
                <div class="py-20 px-6 max-w-7xl mx-auto">
                    <h2 class="text-5xl font-black italic uppercase mb-4">Elite <span class="text-blue-600">Programs</span></h2>
                    <p class="text-white/60 mb-12 max-w-2xl">From high-intensity interval training to mindful recovery, our programs are designed to push your limits.</p>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div class="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                            <div class="absolute bottom-0 left-0 p-8">
                                <h3 class="text-3xl font-black uppercase italic mb-2">Strength & Power</h3>
                                <p class="text-sm text-gray-300">Heavy lifting protocols for maximum hypertrophy.</p>
                            </div>
                        </div>
                        <div class="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div class="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                            <div class="absolute bottom-0 left-0 p-8">
                                <h3 class="text-3xl font-black uppercase italic mb-2">Hypr-Cardio</h3>
                                <p class="text-sm text-gray-300">Endurance training in our altitude chamber.</p>
                            </div>
                        </div>
                        <div class="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div class="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                            <div class="absolute bottom-0 left-0 p-8">
                                <h3 class="text-3xl font-black uppercase italic mb-2">Recovery Lab</h3>
                                <p class="text-sm text-gray-300">Cryotherapy, sauna, and assisted stretching.</p>
                            </div>
                        </div>
                         <div class="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div class="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                            <div class="absolute bottom-0 left-0 p-8">
                                <h3 class="text-3xl font-black uppercase italic mb-2">Boxing Club</h3>
                                <p class="text-sm text-gray-300">Technical sparring and bag work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- === LOCATIONS PAGE === -->
            <div id="page-locations" class="page-section">
                <div class="py-20 px-6 max-w-7xl mx-auto">
                    <h2 class="text-5xl font-black italic uppercase mb-12">Global <span class="text-blue-600">Dominance</span></h2>
                    
                    <div class="grid md:grid-cols-2 gap-12">
                        <!-- Map placeholder -->
                        <div class="bg-zinc-900 rounded-3xl h-[400px] flex items-center justify-center border border-white/10 relative overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" />
                             <div class="relative z-10 p-4 bg-black/80 rounded-xl backdrop-blur-md">
                                 <i class="fa-solid fa-map-location-dot text-4xl text-blue-600 mb-2"></i>
                                 <div class="font-bold">Interactive Map Module</div>
                             </div>
                        </div>
                        
                        <div class="space-y-6">
                            <div class="p-6 bg-white/5 border-l-4 border-blue-600 rounded-r-xl">
                                <h3 class="text-2xl font-black uppercase italic">New York, NY</h3>
                                <p className="text-sm text-gray-400 mt-1">125 W 25th St, Chelsea<br/>Open 24/7</p>
                            </div>
                            <div class="p-6 bg-white/5 border-l-4 border-zinc-700 hover:border-blue-600 transition-colors rounded-r-xl">
                                <h3 class="text-2xl font-black uppercase italic">Los Angeles, CA</h3>
                                <p className="text-sm text-gray-400 mt-1">800 S Hope St, Downtown<br/>Open 24/7</p>
                            </div>
                            <div class="p-6 bg-white/5 border-l-4 border-zinc-700 hover:border-blue-600 transition-colors rounded-r-xl">
                                <h3 class="text-2xl font-black uppercase italic">London, UK</h3>
                                <p className="text-sm text-gray-400 mt-1">100 Liverpool St, City<br/>06:00 - 23:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- === SHOP PAGE === -->
            <div id="page-shop" class="page-section">
                 <div class="py-20 px-6 max-w-7xl mx-auto">
                    <h2 class="text-5xl font-black italic uppercase mb-4">Hypr <span class="text-blue-600">Gear</span></h2>
                    <p class="text-white/60 mb-12">Engineered for performance. Wear the hype.</p>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                         <!-- Item 1 -->
                         <div class="group">
                             <div class="bg-white/5 rounded-2xl p-8 mb-4 hover:bg-white/10 transition-colors relative">
                                 <div class="absolute top-4 right-4 bg-blue-600 text-[10px] font-bold px-2 py-1 rounded">NEW</div>
                                 <i class="fa-solid fa-shirt text-6xl text-zinc-600 group-hover:text-white transition-colors block text-center"></i>
                             </div>
                             <div class="font-bold text-lg">Stealth Hoodie</div>
                             <div class="text-blue-500 font-mono">$85.00</div>
                         </div>
                         <!-- Item 2 -->
                         <div class="group">
                             <div class="bg-white/5 rounded-2xl p-8 mb-4 hover:bg-white/10 transition-colors">
                                 <i class="fa-solid fa-bottle-water text-6xl text-zinc-600 group-hover:text-white transition-colors block text-center"></i>
                             </div>
                             <div class="font-bold text-lg">Hydro Flask 32oz</div>
                             <div class="text-blue-500 font-mono">$45.00</div>
                         </div>
                         <!-- Item 3 -->
                         <div class="group">
                             <div class="bg-white/5 rounded-2xl p-8 mb-4 hover:bg-white/10 transition-colors">
                                 <i class="fa-solid fa-bag-shopping text-6xl text-zinc-600 group-hover:text-white transition-colors block text-center"></i>
                             </div>
                             <div class="font-bold text-lg">Duffel Bag</div>
                             <div class="text-blue-500 font-mono">$120.00</div>
                         </div>
                         <!-- Item 4 -->
                         <div class="group">
                             <div class="bg-white/5 rounded-2xl p-8 mb-4 hover:bg-white/10 transition-colors">
                                 <i class="fa-solid fa-hat-cowboy text-6xl text-zinc-600 group-hover:text-white transition-colors block text-center"></i>
                             </div>
                             <div class="font-bold text-lg">Snapback</div>
                             <div class="text-blue-500 font-mono">$35.00</div>
                         </div>
                    </div>
                 </div>
            </div>

        </main>

        <!-- Footer -->
        <footer class="bg-black border-t border-white/10 py-10 px-6 mt-auto">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-zinc-600 text-xs">&copy; 2025 HYPRGYM INC.</p>
                
                <!-- NEW FOOTER DESIGN: Powered By GYMRUPT. -->
                <div class="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                    <span class="text-[10px] font-heading font-black tracking-widest text-white/40 uppercase">Powered By</span>
                    <span class="text-sm font-heading font-black tracking-tighter text-white/50">GYMRUPT<span class="text-accent">.</span></span>
                </div>

            </div>
        </footer>

        <!-- NAVIGATION SCRIPT -->
        <script>
            function navigateTo(pageId) {
                // Hide all pages
                document.querySelectorAll('.page-section').forEach(el => {
                    el.classList.remove('active');
                    // Reset Animation
                    const header = el.querySelector('h1');
                    if(header) {
                         header.style.animation = 'none';
                         header.offsetHeight; /* trigger reflow */
                         header.style.animation = null; 
                    }
                });
                
                // Show target page
                const target = document.getElementById('page-' + pageId);
                if(target) target.classList.add('active');
                
                // Update Nav Active State
                document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
                const activeNav = document.getElementById('nav-' + pageId);
                if(activeNav) activeNav.classList.add('active');
                
                // Scroll to top
                window.scrollTo(0, 0);
            }
        </script>
        
        <!-- CHAT WIDGET -->
        <script 
          src="https://widgets.leadconnectorhq.com/loader.js"  
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
          data-widget-id="693d1b204ca182e53e79076a"> 
        </script>
    </body>
    </html>
    `;

    return (
        <motion.div
            layout
            className={`flex flex-col bg-[#050505] overflow-hidden shadow-2xl transition-all duration-500 ease-in-out
                ${isFullscreen
                    ? 'fixed inset-0 z-50 rounded-none w-screen h-screen'
                    : 'w-full h-full rounded-2xl relative'
                }`}
        >
            {/* Mock Browser Header */}
            <div
                className="bg-[#000] text-white py-2 px-4 flex items-center gap-4 text-xs font-mono border-b border-white/10 relative z-50 select-none"
                onDoubleClick={toggleFullscreen}
            >
                <div className="flex gap-1.5 group">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 cursor-pointer hover:bg-red-600 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 cursor-pointer hover:bg-yellow-600 transition-colors" />
                    <div
                        className="w-2.5 h-2.5 rounded-full bg-green-500 cursor-pointer hover:bg-green-600 transition-colors flex items-center justify-center group-hover:scale-110"
                        onClick={toggleFullscreen}
                        title="Enter Fullscreen"
                    >
                        {isFullscreen ? <Minimize2 size={6} className="text-black opacity-0 group-hover:opacity-100" /> : <Maximize2 size={6} className="text-black opacity-0 group-hover:opacity-100" />}
                    </div>
                </div>
                <div className="flex-1 bg-white/5 rounded-md px-3 py-1 text-center text-white/50 flex items-center justify-center gap-2 group hover:bg-white/10 transition-colors cursor-text">
                    <Lock size={10} />
                    <span className="group-hover:text-white transition-colors">hyprgym.com</span>
                </div>
            </div>

            <div className="flex-1 w-full h-full bg-black relative">
                <iframe
                    srcDoc={htmlContent}
                    title="HyprGym Website Preview"
                    className="w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                    allowFullScreen
                />
            </div>
        </motion.div>
    );
};

// Helper Icon
const Lock = ({ size = 14, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
);

export default WebsiteMockup;
