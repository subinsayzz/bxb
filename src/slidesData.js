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
        title: "GYMRUPT GROWTH ENGINE",
        subtitle: "PROPOSAL FOR BOXXBURN",
        tagline: "High-performance tech for high-performance communities.",
        points: [
            "One system",
            "One growth engine",
            "Built for communities"
        ],
        icon: Dumbbell
    },
    {
        id: 2,
        type: 'comparison',
        title: "WHY GROWTH STARTS FEELING HEAVY",
        subtitle: "THE SCALE PROBLEM",
        mainIdea: "Managing 2 locations + an online community is where systems start breaking.",
        col1Title: "In Most Independent Gyms",
        col1: [
            "Enquiries come from Socials, WhatsApp, Web & Walk-ins",
            "Peak hours mean messages go unanswered for hours",
            "Manual follow-ups are inconsistent",
            "That’s not bad staff. That’s a leak in the engine."
        ],
        col2Title: "When Capacity Hits",
        col2: [
            "Owners get pulled into manual admin & chasing leads",
            "Consistency in nurture drops instantly",
            "Growth depends on people, not automated systems",
            "Most communities don’t fail. They plateau."
        ],
        conclusion: `You don't need a new CRM. You need a Growth Engine.
        
        Most tools only measure the problem — 
        fixing it still depends on manual effort.`,
        icon: TrendingUp
    },
    {
        id: 3,
        type: 'comparison',
        title: "WHY SOFTWARE DOESN'T FIX IT",
        subtitle: "ACTIVITY VS ACTION",
        mainIdea: "Most gym software is designed to show activity — not to create action.",
        col1Title: "What most tools show (Passive)",
        col1: ["CRM data", "Billing records", "Attendance logs", "Reports & dashboards"],
        col1Footer: "Useful for visibility.\nUseless without follow-through.",
        col2Title: "What’s missing (Active)",
        col2: [
            "Smart Lead Capture (Social DMs, WhatsApp, Website)",
            "Clear staff guidance",
            "Consistent sales process (No guesswork)",
            "Proper nurture system",
            "Proper onboarding system (For maximum retention)",
            "Automatic follow-ups"
        ],
        conclusion: `When software doesn’t act, people fill the gap.
        
        Manual effort fills the gap.
        Manual effort doesn’t scale.`,
        icon: Layers
    },
    {
        id: 4,
        type: 'list',
        title: "THE REAL BOTTLENECK",
        subtitle: "STAFF & CONSISTENCY",
        mainIdea: "When software doesn’t act, people become the system. And that’s where growth slows.",
        points: [
            "Sales & Service depend on 'good staff', not systems",
            "Performance drops overnight when staff leave",
            "Knowledge lives in people, not processes",
            "Results: Inconsistent, hard to repeat, impossible to scale"
        ],
        footer: "Elite communities don’t scale people. They scale systems.",
        icon: Users
    },
    {
        id: 5,
        type: 'list',
        title: "SCALING THROUGH AUTOMATION",
        subtitle: "CLIENT CASE: FITMOMSCLUB",
        mainIdea: "We helped FitMomsClub transition from manual hustle to a scalable system that manages communities across borders.",
        points: [
            "We automated their lead capture across multiple social platforms",
            "We built the system that handles their enquiries 24/7 without manual intervention",
            "We installed the tracking layer that monitors community growth in real-time",
            "We standardized their onboarding so every member gets the same 'Elite' experience",
            "Result: Their team focuses on community, while the engine focuses on the admin"
        ],
        footer: "We don't just provide software. We install growth systems.",
        icon: LayoutGrid
    },
    {
        id: 6,
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
        id: 7,
        type: 'tour',
        title: "360° VIRTUAL TOUR",
        subtitle: "IMMERSIVE EXPERIENCE. GOOGLE VERIFIED.",
        mainIdea: "Let your potential members step inside your community before they even walk through the door.",
        embed: `<iframe src="https://www.google.com/maps/embed?pb=!4v1766911809186!6m8!1m7!1sCAoSK0FGMVFpcE5PVlUydHBVSUJFYWlGSmh2OE5PYW1iaDk5dl9fN3d6amw2bTQ.!2m2!1d28.52171372208289!2d77.21604902752712!3f10.71!4f-8.269999999999996!5f0.4000000000000002" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        features: [
            { icon: Globe, title: "Google Maps Integration", desc: "Appear directly in search results with an immersive 3D view." },
            { icon: Zap, title: "High Conversion", desc: "Virtual tours increase the likelihood of booking a trial by 85%." },
            { icon: Layers, title: "2 Locations Included", desc: "Fully shot and optimized for both your physical spaces." }
        ],
        note: "EXCLUSIVE BONUS: Only valid for partners joining before the New Year.",
        icon: Globe
    },
    {
        id: 8,
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
        id: 9,
        type: 'list',
        title: "INSTALLATION, NOT SUPPORT",
        subtitle: "GYMRUPT GROWTH ENGINE ACTIVATION",
        mainIdea: "We don’t just provide tools. We install the Growth Engine into your community.",
        points: [
            "We link enquiry capture to your existing management software",
            "We build automated high-conversion onboarding journeys",
            "We install online class automation & notification workflows",
            "We setup redundant lead capture across all social platforms",
            "We reduce manual enquiry handling by up to 90%"
        ],
        highlight: "This isn’t tech support. This is system ownership.",
        footer: "You don’t figure it out. We build it with you.",
        icon: Handshake
    },
    {
        id: 10,
        type: 'checklist',
        title: "DEFINITION OF SUCCESS",
        subtitle: "WHAT A “WORKING ENGINE” LOOKS LIKE",
        mainIdea: "We don’t keep this vague. The engine is considered working when:",
        checklist: [
            "Automatic capture of enquiries from all platforms (Web/Social/Ads)",
            "Online class links & notifications running on autopilot",
            "Leads → follow-ups → CRM linkage without manual entry",
            "Community portal active with materials & member engagement"
        ],
        highlight: "At this point: The engine is predictable. The results are repeatable. Your community is scale-ready.",
        footer: "If it works once, it’s luck. If it works without you, it’s a Growth Engine.",
        icon: CheckCircle2
    },
    {
        id: 11,
        type: 'grid-cards',
        title: "GROWTH ENGINE ESSENTIALS",
        subtitle: "INCLUDED TO AUTOMATE GROWTH",
        items: [
            { title: "Smart Site Build", value: "INCLUDED", desc: "Captures visitors & tracks leads across platforms even when they run ads.", icon: Monitor },
            { title: "GMB Optimization", value: "INCLUDED", desc: "Rank higher locally and get found by more members in your area.", icon: Globe },
            { title: "Ad Account Connection", value: "INCLUDED", desc: "Link your Meta/Google ads directly to the Gymrupt Engine for tracking.", icon: Rocket },
            { title: "AI Employees (3 Months)", value: "BONUS", desc: "AI agents for voice, chat, and reviews - active from day one.", icon: Bot },
            { title: "WhatsApp Business API", value: "BONUS", desc: "3 months of official API access for scalable, compliant messaging.", icon: MessageCircle },
            { title: "Community Portal", value: "BONUS", desc: "Skool-like interface for your online community, materials & storage.", icon: Users }
        ],
        highlight: "TOTAL VALUE: ₹1,50,000+ (Included with Growth Engine)",
        limitedOffer: {
            title: "Limited Time: 360° Virtual Tour",
            value: "₹48,000",
            desc: "2 Locations. Google verified immersive views. Valid only till New Year.",
            tag: "Limited Offering"
        },
        note: "Designed to manage and grow your community at scale.",
        icon: ShieldCheck
    },
    {
        id: 12,
        type: 'pricing',
        title: "GROWTH ENGINE LICENSE",
        subtitle: "ANNUAL INVESTMENT",
        price: "69,000",
        priceSuffix: "+ GST / Year",
        features: [
            "Full Engine Setup & Integration",
            "3 Months AI Employees Included",
            "3 Months WhatsApp API Included",
            "All-in-One Community Portal",
            "Online Class Management Suite",
            "Priority Support Line"
        ],
        icon: CreditCard
    },
    {
        id: 13,
        type: 'community',
        title: "BEYOND THE FOUR WALLS",
        subtitle: "A UNIFIED COMMUNITY ENGINE",
        mainIdea: "Build a community that thrives both in your physical labs and in the digital world.",
        points: [
            "Online Class Control: Seamlessly connect with Zoom or Google Meet.",
            "Schedule & Automate: Manage classes and send notifications directly from your dashboard.",
            "Content Knowledge Hub: Unlimited storage for class materials and video archives.",
            "Interactive Portals: A Skool-like experience where members stay connected and updated."
        ],
        footer: "Your community is your ultimate competitive advantage.",
        icon: Users
    },
    {
        id: 14,
        type: 'powerups',
        title: "SCALING POWER-UPS",
        subtitle: "OPTIONAL ADD-ONS",
        mainIdea: "Advanced tools to scale communications and automation.",
        items: [
            { title: "WhatsApp Business API", desc: "Official API integration for scalable, compliant messaging.", icon: MessageCircle },
            { title: "AI Employees", desc: "Voice, chat, reviews, and content agents that work 24/7.", icon: Bot },
            { title: "Dedicated Email IP", desc: "Improves deliverability as volume increases.", icon: Mail },
            { title: "AI Voice Number Setup", desc: "For automated calls, follow-ups, and confirmations.", icon: Sidebar }
        ],
        highlight: "No PowerUp fees until Gymrupt is clearly an asset. Not an expense.",
        pricingDetails: {
            items: [
                { label: "WhatsApp Business API", price: "₹2,100/mo+" },
                { label: "AI Employees", price: "From ₹3,999/mo" },
                { label: "Dedicated Email IP", price: "As required" },
                { label: "AI Voice Number", price: "Contact Sales" }
            ],
            footer: "Exact costs depend on usage and scale. BILLING activates ONLY AFTER results."
        },
        icon: Rocket
    },
    {
        id: 15,
        type: 'addons',
        title: "OPTIONAL UPGRADES",
        subtitle: "SCALE FASTER",
        items: [
            { title: "Meta Ads Management", price: "₹25k - ₹40k / mo", desc: "Complete 'Done-For-You' ad strategy, creative & optimization.", icon: Megaphone },
            { title: "Speed-to-Lead Service", price: "Custom Quote", desc: "Dedicated team to call leads within 5 minutes.", icon: PhoneCall },
            { title: "Custom App Build", price: "Custom Quote", desc: "Fully branded iOS & Android app for your gym.", icon: Smartphone },
            { title: "360 Gym ERP Setup", price: "Custom Quote", desc: "End-to-end ERP implementation for multi-location scaling.", icon: Layers }
        ],
        icon: Puzzle
    },
    {
        id: 16,
        type: 'grid-cards',
        title: "FUTURE ECOSYSTEM ACCESS",
        subtitle: "FIRST MOVER ADVANTAGE",
        items: [
            { title: "Smart Vending Machines", value: "EARLY ACCESS", desc: "Both for high protein munchies & shakes - increases retention.", icon: Zap },
            { title: "On-Demand Merchandise", value: "EARLY ACCESS", desc: "Zero-inventory branding. Dropshipped to members.", icon: Smartphone },
            { title: "Vertical Product Integrations", value: "EARLY ACCESS", desc: "Unified ecosystem for hardware, access, and retail.", icon: Layers },
            { title: "Workout Discovery Platform", value: "COMING SOON", desc: "Get discovered with our workout discovery platform.", icon: Globe }
        ],
        highlight: "Gymrupt partners get priority access to physical & retail innovations.",
        note: "Be the first to deploy next-gen gym tech.",
        icon: Rocket
    },
    {
        id: 17,
        type: 'quote',
        title: "WHY COMMUNITY MATTERS",
        subtitle: "THE BOXXBURN VISION",
        quote: "True fitness isn't just a workout; it's a belonging.",
        subtext: "High-performance communities win when they have systems that keep everyone connected, whether they are in the gym or across the globe.",
        icon: Flag
    },
    {
        id: 18,
        type: 'ecosystem-flow',
        title: "FUTURE-PROOF SYSTEM",
        subtitle: "BUILT TO INTEGRATE",
        mainIdea: "Gymrupt connects your physical gym floor to your business logic.",
        col1Title: "From The Gym Floor",
        col1: ["BMI & Body Comp", "Access Control", "Smart Vending", "POS & Retail"],
        col2Title: "To The Business Layer",
        col2: ["ERP Scaling", "Customer 360°", "Auto Accounting", "Deep Analytics"],
        process: "One connected flow: Data in → action out → everything recorded.",
        note: "We also design and scale ERP implementations when needed — from smart accounting to Customer 360°. Introduced only when the business is ready. One-time implementation.",
        closure: "You don’t outgrow Gymrupt. You build on it.",
        icon: Layers
    },
    {
        id: 19,
        type: 'final-cta',
        title: "FINAL THOUGHTS",
        subtitle: "BUILD TOMORROW",
        tagline: "Most tools help manage today. Gymrupt helps build tomorrow.",
        points: [
            "One System.",
            "One Growth Engine.",
            "Unstoppable Community."
        ],
        ctaText: "Activate Growth Engine",
        ctaLink: "#",
        icon: CheckCircle2
    }
];
