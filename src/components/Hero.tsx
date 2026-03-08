"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const norms = ["RSEE", "OCOSP", "SUVA", "SWKI", "CVC", "MAINTENANCE", "GENÈVE", "SUISSE"];

export default function Hero() {
    return (
        <section className="relative min-h-svh bg-[#080F0A] text-[#F0F7F2] overflow-hidden grid-bg flex flex-col">

            {/* Fond : grand "30" typographique */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
                aria-hidden
            >
                <span
                    className="text-[28vw] font-black leading-none text-[#0F1A10]"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    30
                </span>
            </div>

            {/* Ligne verticale décorative */}
            <div className="absolute left-[14%] top-0 bottom-0 w-px bg-[#4ADE80]/5 hidden lg:block" />

            {/* Contenu principal */}
            <div className="flex-1 flex flex-col justify-center max-w-screen-xl mx-auto px-6 md:px-10 w-full pt-32 pb-16">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Colonne texte */}
                    <div className="lg:col-span-8">

                        {/* Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-10"
                        >
                            <div className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                            <span
                                className="text-[#4ADE80] text-xs uppercase tracking-[0.3em]"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Versoix · Genève · Suisse
                            </span>
                        </motion.div>

                        {/* Titre principal */}
                        <div className="overflow-hidden mb-4">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[15vw] md:text-[11vw] lg:text-[9vw] font-black leading-none uppercase tracking-tighter text-[#F0F7F2]"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Maintenance
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden mb-4">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[15vw] md:text-[11vw] lg:text-[9vw] font-black leading-none uppercase tracking-tighter text-[#F0F7F2]/20"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Ventilation
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[15vw] md:text-[11vw] lg:text-[9vw] font-black leading-none uppercase tracking-tighter text-[#4ADE80]"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                CVC.
                            </motion.h1>
                        </div>
                    </div>

                    {/* Colonne chiffres / infos */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-4 flex flex-col gap-8 lg:border-l lg:border-[#4ADE80]/10 lg:pl-10"
                    >
                        <div>
                            <div
                                className="text-6xl font-black text-[#F0F7F2]"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                30
                            </div>
                            <div
                                className="text-[#6B8F73] text-xs uppercase tracking-widest mt-1"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Ans d'excellence
                            </div>
                        </div>

                        <div className="w-full h-px bg-[#4ADE80]/10" />

                        <div>
                            <p
                                className="text-[#F0F7F2]/60 text-sm leading-relaxed"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                La réglementation impose des obligations strictes d'entretien CVC. Nous garantissons votre conformité RSEE, OCOSP et SWKI.
                            </p>
                        </div>

                        <div className="w-full h-px bg-[#4ADE80]/10" />

                        <Link
                            href="/contact"
                            className="group flex items-center gap-4 text-[#F0F7F2] hover:text-[#4ADE80] transition-colors"
                        >
                            <span
                                className="text-xs uppercase tracking-[0.2em] font-bold"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Demander un devis
                            </span>
                            <span className="flex-1 h-px bg-current opacity-30 group-hover:opacity-100 transition-opacity" />
                            <span className="text-lg">→</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Ticker bas */}
            <div className="border-t border-[#4ADE80]/10 overflow-hidden py-4">
                <div className="ticker-track flex gap-12 whitespace-nowrap w-max">
                    {[...norms, ...norms].map((norm, i) => (
                        <span
                            key={i}
                            className="text-[#6B8F73] text-xs uppercase tracking-[0.3em] flex items-center gap-4"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            {norm}
                            <span className="w-1 h-1 rounded-full bg-[#4ADE80]/40 inline-block" />
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
