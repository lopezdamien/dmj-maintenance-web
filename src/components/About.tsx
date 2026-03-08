"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = [
    { code: "01", label: "Rigueur Suisse & Précision" },
    { code: "02", label: "Respect des Délais" },
    { code: "03", label: "Discrétion & Sécurité" },
    { code: "04", label: "Direction Familiale" },
];

export default function About() {
    return (
        <section id="about" className="py-24 md:py-36 bg-[#080F0A] relative overflow-hidden">

            {/* Grand "DMJ" en fond */}
            <div
                className="absolute -bottom-10 -left-8 select-none pointer-events-none"
                aria-hidden
            >
                <span
                    className="text-[20vw] font-black leading-none text-[#0F1A10]"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    DMJ
                </span>
            </div>

            <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        {/* Badge 30 ans */}
                        <div className="absolute -top-5 -right-5 z-20 bg-[#4ADE80] text-[#080F0A] p-5">
                            <div
                                className="text-4xl font-black leading-none"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                30
                            </div>
                            <div
                                className="text-[9px] font-bold uppercase tracking-widest mt-1"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Ans
                            </div>
                        </div>

                        <div className="aspect-[3/4] relative border border-[#4ADE80]/10 overflow-hidden bg-[#0F1A10]">
                            <Image
                                src="/images/about_illustration.png"
                                alt="Perica et Darko Kostic"
                                fill
                                className="object-contain p-8 opacity-90"
                            />
                        </div>
                    </motion.div>

                    {/* Texte */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="flex flex-col gap-10"
                    >
                        <div>
                            <span
                                className="text-[#4ADE80] text-xs uppercase tracking-[0.3em] mb-6 block"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                /// Notre Histoire
                            </span>
                            <h2
                                className="text-5xl md:text-6xl font-black tracking-tighter leading-none uppercase text-[#F0F7F2]"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Ingénierie<br />
                                <span className="text-[#F0F7F2]/20">&</span><br />
                                Savoir-Faire.
                            </h2>
                        </div>

                        <blockquote
                            className="border-l-2 border-[#4ADE80] pl-6 text-[#F0F7F2]/70 text-base md:text-lg leading-relaxed italic"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            "Nous ne posons pas des gaines. Nous concevons des systèmes de performance aéraulique."
                        </blockquote>

                        <p
                            className="text-[#6B8F73] text-sm leading-relaxed"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Fondée par Perica Kostic et dirigée aujourd'hui avec son fils Darko, l'entreprise allie l'expérience du terrain à l'exigence des normes suisses modernes. Nous intervenons là où la précision est non-négociable.
                        </p>

                        {/* Valeurs */}
                        <div className="grid grid-cols-1 gap-0 border-t border-[#4ADE80]/10">
                            {values.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 py-4 border-b border-[#4ADE80]/10"
                                >
                                    <span
                                        className="text-[#4ADE80]/40 text-xs"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        {item.code}
                                    </span>
                                    <span
                                        className="text-[#F0F7F2]/70 text-xs uppercase tracking-widest"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="group self-start flex items-center gap-4 text-[#F0F7F2]/60 hover:text-[#4ADE80] transition-colors"
                        >
                            <span
                                className="text-xs uppercase tracking-[0.2em]"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Rencontrer la direction
                            </span>
                            <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
                            <span className="text-lg">→</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
