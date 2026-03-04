"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/motion-wrapper';

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-[#1a1a2e] font-sans">
            {/* ====== HEADER ====== */}
            <header className="fixed top-0 left-0 w-full h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 md:px-12 z-50">
                <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 px-4 py-2 border border-[#1a1a2e]/10 rounded-full hover:bg-gray-50 transition-colors">
                        <span className="material-symbols-outlined text-xl text-[#1a1a2e]">menu</span>
                        <span className="font-semibold text-sm text-[#1a1a2e]">Search houses</span>
                    </button>
                </div>

                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#e8632b] rounded-lg rotate-12 flex items-center justify-center shadow-lg shadow-[#e8632b]/20">
                        <span className="material-symbols-outlined text-white text-xl">home</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-[#1a1a2e]">homie<span className="text-[#e8632b]">nest</span></span>
                </Link>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-3 cursor-pointer hover:opacity-70 transition-opacity">
                        <span className="material-symbols-outlined text-[#1a1a2e]">account_circle</span>
                        <Link href="/login" className="font-semibold text-sm text-[#1a1a2e]">Log in</Link>
                    </div>
                    <Link href="/predictor">
                        <button className="bg-[#1a1a2e] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-navy/90 transition-all shadow-lg shadow-black/5">
                            Predict price
                        </button>
                    </Link>
                </div>
            </header>

            {/* ====== HERO SECTION ====== */}
            <section className="pt-48 pb-20 px-6 text-center">
                <FadeIn>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#1a1a2e] tracking-tight mb-6 leading-[1.05]">
                        India’s best luxury <br /> houses to predict
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
                        Hand-picked villas, mansions and flats for investment, <br className="hidden md:block" /> lifestyle and future appreciation.
                    </p>
                </FadeIn>

                {/* SEARCH COMPONENT (Landed Houses Style) */}
                <FadeIn delay={0.2}>
                    <div className="max-w-[850px] mx-auto px-4 mb-20">
                        <div className="flex justify-center gap-8 mb-6">
                            <button className="flex items-center gap-2 font-bold text-sm border-b-2 border-[#1a1a2e] pb-1">Predict</button>
                            <button className="flex items-center gap-2 font-bold text-sm text-gray-400 pb-1">Invest</button>
                        </div>

                        <div className="flex flex-col md:flex-row items-center bg-white border border-gray-100 rounded-[100px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-2 md:p-1.5 pl-6 md:pl-8 group">
                            <div className="flex-1 text-left py-2 md:py-0 border-b md:border-b-0 md:border-r border-gray-100 pr-4">
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1a1a2e]">Where</label>
                                <input type="text" placeholder="Mumbai, Delhi, Bangalore..." className="w-full text-sm font-medium text-gray-800 placeholder:text-gray-300 focus:outline-none bg-transparent mt-0.5" />
                            </div>
                            <div className="flex-1 text-left py-2 md:py-0 border-b md:border-b-0 md:border-r border-gray-100 px-4 md:px-6">
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1a1a2e]">Type</label>
                                <div className="text-sm font-medium text-gray-300 mt-0.5">Select house type</div>
                            </div>
                            <div className="flex-1 text-left py-2 md:py-0 border-b md:border-b-0 md:border-r border-gray-100 px-4 md:px-6">
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1a1a2e]">Budget</label>
                                <div className="text-sm font-medium text-gray-300 mt-0.5">Select range</div>
                            </div>
                            <div className="flex-1 text-left py-2 md:py-0 px-4 md:px-6">
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1a1a2e]">Who</label>
                                <div className="text-sm font-medium text-gray-300 mt-0.5">Add details</div>
                            </div>
                            <Link href="/buyer">
                                <button className="bg-[#e8632b] text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#e8632b]/20">
                                    <span className="material-symbols-outlined text-2xl">search</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </FadeIn>

                {/* HERO IMAGE */}
                <FadeIn delay={0.4} className="max-w-[1400px] mx-auto px-4">
                    <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden bg-gray-100 group shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80"
                            alt="Luxury Indian Villa"
                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-12">
                            <div className="text-left">
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-bold uppercase tracking-widest mb-4">
                                    <span className="material-symbols-outlined text-sm">location_on</span> Alibaug, Maharashtra
                                </span>
                                <h3 className="text-white text-3xl md:text-4xl font-serif">The Saffron Estate</h3>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* ====== OCCASION SECTION (Re-branded) ====== */}
            <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-serif mb-20 leading-tight">
                        Famous Indian properties <br /> for every need
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: 'Predicting price', subtitle: 'for buyers', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', link: '/buyer' },
                        { title: 'Valuation report', subtitle: 'for sellers', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', link: '/seller' },
                        { title: 'Market analysis', subtitle: 'for agents', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80', link: '/agent' },
                    ].map((item, i) => (
                        <FadeIn key={i} delay={0.1 * i}>
                            <Link href={item.link} className="group block text-decoration-none">
                                <div className="aspect-[4/5] rounded-[32px] overflow-hidden mb-8 shadow-xl">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <h3 className="text-4xl md:text-[44px] font-serif text-[#1a1a2e] leading-none transition-colors group-hover:text-[#e8632b]">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 font-medium text-lg mt-2 underline decoration-gray-200 underline-offset-8 decoration-2">
                                    {item.subtitle}
                                </p>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* ====== BROWSE BY LOCATION ====== */}
            <section className="py-32 bg-gray-50 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a2e]">Browse by location</h2>
                        <Link href="/listings" className="text-sm font-bold uppercase tracking-widest text-[#1a1a2e] border-b-2 border-gray-200 pb-1 hover:border-[#1a1a2e] transition-colors">View all locations</Link>
                    </FadeIn>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
                        {[
                            { name: 'Mumbai', img: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400&q=80' },
                            { name: 'Delhi', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80' },
                            { name: 'Bangalore', img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&q=80' },
                            { name: 'Hyderabad', img: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=400&q=80' },
                            { name: 'Chennai', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80' },
                            { name: 'Kolkata', img: 'https://images.unsplash.com/photo-1558431382-bb7499d5d5bb?w=400&q=80' },
                        ].map((city, i) => (
                            <Link href={`/listings?city=${city.name}`} key={i} className="group text-decoration-none">
                                <div className="aspect-square rounded-full overflow-hidden mb-4 border-2 border-white shadow-lg ">
                                    <img src={city.img} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <p className="text-center font-bold text-sm text-[#1a1a2e] group-hover:text-[#e8632b] transition-colors">{city.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== FAQ / CTA ====== */}
            <section className="py-32 px-6 md:px-12 text-center max-w-4xl mx-auto">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#1a1a2e]">Ready to predict your next move?</h2>
                    <p className="text-gray-500 text-lg md:text-xl font-medium mb-12">
                        Join 20,000+ Indians using AI to get fair valuations and future-proof investments.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/signup">
                            <button className="bg-[#e8632b] text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-[#d8531b] transition-all shadow-xl shadow-[#e8632b]/20 uppercase tracking-widest">
                                Get Started Free
                            </button>
                        </Link>
                        <Link href="/about">
                            <button className="bg-white border-2 border-gray-100 text-[#1a1a2e] px-10 py-4 rounded-full font-bold text-sm hover:bg-gray-50 transition-all uppercase tracking-widest">
                                How it works
                            </button>
                        </Link>
                    </div>
                </FadeIn>
            </section>

            {/* ====== FOOTER ====== */}
            <footer className="bg-[#1a1a2e] text-white/40 py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-sm">
                        <div className="col-span-1 md:col-span-2">
                            <Link href="/" className="flex items-center gap-2 mb-8 grayscale brightness-200 opacity-60 text-decoration-none">
                                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[#1a1a2e] text-sm">home</span>
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">homie<span className="text-white">nest</span></span>
                            </Link>
                            <p className="max-w-xs leading-relaxed text-white/50">
                                India&apos;s most accurate AI house price predictor. Deep learning insights for smarter real estate micro-investing.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Predict</h4>
                            <ul className="space-y-4">
                                <li><Link href="/buyer" className="hover:text-white transition-colors text-decoration-none">Buyer Prediction</Link></li>
                                <li><Link href="/seller" className="hover:text-white transition-colors text-decoration-none">Seller Valuation</Link></li>
                                <li><Link href="/agent" className="hover:text-white transition-colors text-decoration-none">Agent Dashboard</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
                            <ul className="space-y-4">
                                <li><Link href="/about" className="hover:text-white transition-colors text-decoration-none">Our Approach</Link></li>
                                <li><Link href="/listings" className="hover:text-white transition-colors text-decoration-none">Marketplace</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors text-decoration-none">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-xs uppercase tracking-widest">
                        <p>© 2026 HomieNest. All rights reserved.</p>
                        <div className="flex gap-8">
                            <Link href="/privacy" className="hover:text-white transition-colors text-decoration-none">Privacy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors text-decoration-none">Terms</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
