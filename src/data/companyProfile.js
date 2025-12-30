import {
    Dumbbell, TrendingUp, Layers, Users, Zap, AlertTriangle,
    CheckCircle2, XCircle, LayoutGrid, Smartphone, Puzzle,
    Handshake, ShieldCheck, Gift, Rocket, Lock, CreditCard, Flag,
    Monitor, MessageCircle, BarChart3, Globe, Mail, Calendar, FileText, Bot, Star, Share2, Database, Code, Sidebar, Megaphone, PhoneCall
} from 'lucide-react';

export const slides = [
    {
        id: 1,
        type: 'title',
        title: "GYMRUPT",
        subtitle: "THE GROWTH OPERATING SYSTEM",
        tagline: "Big-chain systems. Independent-gym mindset.",
        points: [
            "One system",
            "One growth engine",
            "From survival to scale"
        ],
        icon: Dumbbell
    },
    {
        id: 2,
        type: 'comparison',
        title: "THE MARKET REALITY",
        subtitle: "THE PROBLEM",
        mainIdea: "Running a gym isn’t hard. Scaling one is.",
        col1Title: "The Independent Trap",
        col1: [
            "Leads come in — but follow-up breaks",
            "Sales depend on the owner",
            "Retention is reactive, not automated",
            "Tools don’t talk to each other"
        ],
        col2Title: "The Result",
        col2: [
            "Growth = more stress, not more freedom",
            "Most gyms don’t fail",
            "They get stuck at 1–2 locations",
            "Chaos replaces clarity"
        ],
        conclusion: `Growth shouldn’t mean chaos. You don't need more effort, you need a system.`,
        icon: AlertTriangle
    },
    {
        id: 3,
        type: 'comparison',
        title: "WHY EXISTING SOFTWARE FAILS",
        subtitle: "FRAGMENTATION",
        mainIdea: "Too many tools. No real system.",
        col1Title: "What Gyms Use Today",
        col1: [
            "One tool for CRM",
            "One for Billing",
            "One for WhatsApp",
            "One for Marketing"
        ],
        col1Footer: "Nothing connects.",
        col2Title: "The Outcome",
        col2: [
            "Data scattered everywhere",
            "No single source of truth",
            "No visibility on actual performance",
            "No predictable growth"
        ],
        conclusion: `When tools don't talk, you become the manual connector.`,
        icon: Layers
    },
    {
        id: 4,
        type: 'list',
        title: "THE GYMRUPT SOLUTION",
        subtitle: "UNIFIED OPERATING SYSTEM",
        mainIdea: "Gymrupt is not “another software.” It’s an operating system.",
        points: [
            "We Unify: Lead capture & Sales automation",
            "We Unify: Member onboarding & Experience",
            "We Unify: Retention & Reactivation",
            "We Unify: Payments & Tracking & Communication"
        ],
        footer: "One system. One source of truth.",
        icon: CheckCircle2
    },
    {
        id: 5,
        type: 'feature',
        title: "WHAT THE GROWTH ENGINE IS",
        subtitle: "YOUR 24/7 SALES & RETENTION LAYER",
        mainIdea: "Gymrupt links with your existing software to automate everything it doesn't do.",
        features: [
            { title: "All-in-One Web Chat", desc: "One inbox for IG, FB, WhatsApp, SMS, Email & Live Chat" },
            { title: "Enquiry Capture Engine", desc: "Auto-captures leads from every social & ad platform" },
            { title: "Offer Funnels & Form Builders", desc: "High-converting entry points for your community" },
            { title: "AI Sales & Booking Agent", desc: "Qualifies leads & books trials 24/7" },
            { title: "Online Class Management", desc: "Connects with Zoom/Google Meet for automated links" },
            { title: "Smart Nurture Sequences", desc: "Automated follow-ups that sound like they're from you" },
            { title: "Class Notifications", desc: "Send SMS/WhatsApp reminders directly from the dashboard" },
            { title: "GMB Optimization", desc: "Command the local search for fitness in your city" },
            { title: "Built for Community", desc: "Tools to grow your online membership base" }
        ],
        mantra: "You don’t replace your CRM. You supercharge it.",
        icon: Zap
    },
    {
        id: 6,
        type: 'list',
        title: "WHO IT’S BUILT FOR",
        subtitle: "OUR IDEAL PARTNERS",
        mainIdea: "Designed for those who want to build a brand, not just run a shop.",
        points: [
            "Independent Gym Owners & Boutique Studios",
            "Personal Training Gyms",
            "Multi-branch Gym Brands",
            "Owners planning expansion or franchising"
        ],
        footer: "Not for: Hobby gyms or Price-only buyers.",
        icon: Users
    },
    {
        id: 7,
        type: 'feature',
        title: "THE GYMRUPT ADVANTAGE",
        subtitle: "WHY GYMS CHOOSE US",
        mainIdea: "We offer more than just software features.",
        features: [
            { title: "Gym-Specific Logic", desc: "Not generic SaaS. Built for the fitness industry." },
            { title: "WhatsApp-First Growth", desc: "India-ready communication channels." },
            { title: "AI That Closes", desc: "Agents that actually drive sales, not just chat." },
            { title: "Built-for-Scale", desc: "Architecture designed to grow with you." },
            { title: "Partner Mindset", desc: "We are partners in your growth, not just support tickets." },
            { title: "Predictable Revenue", desc: "Systems that deliver consistent results." }
        ],
        mantra: "Less chaos. More control.",
        icon: Star
    },
    {
        id: 8,
        type: 'interactive-tabs',
        title: "EXPERIENCE THE ECOSYSTEM",
        subtitle: "INTERACTIVE DEMOS",
        mainIdea: "Explore the core pillars of the Gymrupt experience.",
        tabs: [
            {
                id: 'website',
                label: 'Smart Website',
                icon: Monitor,
                content: {
                    type: 'split-preview', // NEW TYPE to signal 2-column layout
                    componentName: 'WebsiteMockup',
                    title: "CONVERSION ENGINE",
                    desc: "Most gym websites are just digital brochures. Ours is a 24/7 sales team designed to capture leads.",
                    features: [
                        "Smart Lead Tracking & AI Captures the lead 24/7",
                        "Ad Precision: Track every lead source (Meta/Google)",
                        "Instant Conversion: Auto-booking engine built-in"
                    ],
                    value: "Included (Bonus)"
                }
            },
            {
                id: 'app',
                label: 'Custom App',
                icon: Smartphone,
                content: {
                    type: 'split-preview',
                    componentName: 'MobileAppMockup',
                    title: "YOUR GYM IN POCKET",
                    desc: "A world-class mobile experience that keeps your members addicted to their progress.",
                    features: [
                        "Seamless Booking: Classes, PT, and events",
                        "Workout Tracking: Replace paper logs forever",
                        "Gamification: Leaderboards & achievement badges"
                    ],
                    value: "Custom Build"
                }
            },
            {
                id: 'tour',
                label: '360° Tour',
                icon: Globe,
                content: {
                    type: 'split-preview',
                    componentName: 'TourEmbed', // Special case for iframe
                    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1766911809186!6m8!1m7!1sCAoSK0FGMVFpcE5PVlUydHBVSUJFYWlGSmh2OE5PYW1iaDk5dl9fN3d6amw2bTQ.!2m2!1d28.52171372208289!2d77.21604902752712!3f10.71!4f-8.269999999999996!5f0.4000000000000002',
                    title: "IMMERSIVE TRUST",
                    desc: "Trust is built when they can see where they're going to train.",
                    features: [
                        "Google Maps Integration: Appear in search results",
                        "High Conversion: Increase bookings by 85%",
                        "2 Locations Included: Professionally shot"
                    ],
                    value: "Included (Bonus)"
                }
            }
        ]
    },
    {
        id: 9,
        type: 'cost-calculator',
        title: "COST OF PATCHING TOOLS",
        subtitle: "THE FRAGMENTATION TAX",
        mainIdea: "The true cost of trying to build this yourself with separate tools.",
        items: [
            { name: "CRM & Pipelines", cost: "8000", icon: Database },
            { name: "Sales Funnels", cost: "24000", icon: Layers },
            { name: "Website Builder", cost: "2500", icon: Monitor },
            { name: "Surveys & Forms", cost: "4000", icon: FileText },
            { name: "Email Marketing", cost: "8000", icon: Mail },
            { name: "WhatsApp Automation", cost: "3800", icon: MessageCircle },
            { name: "Bookings", cost: "2500", icon: Calendar },
            { name: "Automations", cost: "14000", icon: Code },
            { name: "AI Agents", cost: "12000", icon: Bot },
            { name: "Reputation Mgmt", cost: "13000", icon: Star },
            { name: "Analytics", cost: "24000", icon: BarChart3 },
            { name: "Communities", cost: "7000", icon: Users },
            { name: "Generic Gym Tool", cost: "1750", icon: Smartphone },
            { name: "Doc Signing", cost: "7000", icon: FileText },
            { name: "Social Auto", cost: "10000", icon: Share2 }
        ],
        disclaimer: "*Estimated monthly costs for equivalent standalone tools.",
        conclusion: "With Gymrupt, you replace them all.",
        icon: Puzzle
    },
    {
        id: 10,
        type: 'feature',
        title: "BUSINESS MODEL",
        subtitle: "HOW IT WORKS",
        mainIdea: "Flexible plans to suit your stage of growth.",
        features: [
            { title: "Annual SaaS Plans", desc: "Core access for established gyms." },
            { title: "DFY System Installation", desc: "Complete 'Growth Engine' setup." },
            { title: "Growth Partnerships", desc: "Long-term collaboration for scale." },
            { title: "Strategic Add-ons", desc: "Websites, AI, Automations, Integrations." }
        ],
        mantra: "Gymrupt is a monthly asset, not a marketing expense.",
        icon: Handshake
    },
    {
        id: 11,
        type: 'title',
        title: "OUR VISION",
        subtitle: "TOMORROW'S GYM",
        tagline: "To become the default operating system for independent gym brands globally.",
        points: [
            "Predictable Growth",
            "Work ON the business",
            "Big-chain systems"
        ],
        icon: Flag
    },
    {
        id: 12,
        type: 'final-cta',
        title: "GYMRUPT",
        subtitle: "START YOUR GROWTH",
        tagline: "One app for all. Built for gyms that want to grow — without losing control.",
        points: [
            "Demo the system",
            "Install Gymrupt",
            "Scale with clarity"
        ],
        ctaText: "Get Started",
        ctaLink: "https://gymrupt.com",
        icon: Rocket
    }
];
