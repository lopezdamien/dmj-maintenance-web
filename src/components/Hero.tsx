"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wind } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-svh flex items-start lg:items-center bg-primary text-white overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24 lg:pt-20 lg:pb-0">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.jpg"
                    alt="Ventilation System"
                    fill
                    className="object-cover opacity-20 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E5B3A] via-[#1E5B3A]/95 to-[#1E5B3A]/80" />
            </div>

            <div className="container mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 md:space-y-10"
                >
                    <div className="border-l-2 border-surface/50 pl-6">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase">
                            Ventilation<br />
                            Entretien<br />
                            <span className="text-surface text-3xl sm:text-4xl md:text-5xl lg:text-6xl">& Maintenance</span>
                        </h1>
                    </div>

                    <p className="text-base md:text-lg text-white/85 max-w-lg font-light leading-relaxed">
                        La réglementation impose des obligations strictes d'entretien et de contrôle des installations CVC. Nous appliquons les normes en vigueur — RSEE, OCOSP, directives cantonales — pour garantir la conformité légale, la sécurité des occupants et la performance durable de vos équipements.
                    </p>

                    <div>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-surface text-primary font-bold uppercase tracking-widest hover:bg-white transition-all text-center text-sm"
                        >
                            Contactez-nous
                        </Link>
                    </div>
                </motion.div>

                {/* Technical Illustration — desktop only */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full aspect-square max-w-lg mx-auto">
                        <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                        <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-64 h-64 bg-secondary/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/5">
                                <div className="text-center">
                                    <Wind size={48} className="text-surface mx-auto mb-4 opacity-60" />
                                    <span className="block text-xl font-bold tracking-tighter text-white/90">MAINTENANCE<br />PRO</span>
                                </div>
                            </div>
                        </div>

                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-4 right-12 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2">
                            <span className="text-[10px] font-bold uppercase text-surface tracking-wide">Performance</span>
                        </motion.div>
                        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-12 left-4 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2">
                            <span className="text-[10px] font-bold uppercase text-surface tracking-wide">Hygiène</span>
                        </motion.div>
                        <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-1/4 left-0 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2">
                            <span className="text-[10px] font-bold uppercase text-surface tracking-wide">SLA</span>
                        </motion.div>
                        <motion.div animate={{ x: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
                            className="absolute bottom-1/4 right-0 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2">
                            <span className="text-[10px] font-bold uppercase text-surface tracking-wide">Rapport</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
