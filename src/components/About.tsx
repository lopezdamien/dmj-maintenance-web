"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckSquare, Ruler, Clock, ShieldCheck } from "lucide-react";

export default function About() {
    const values = [
        { icon: Ruler, text: "Rigueur Suisse & Précision" },
        { icon: Clock, text: "Respect des Délais" },
        { icon: ShieldCheck, text: "Discrétion & Sécurité" },
        { icon: CheckSquare, text: "Direction Familiale" },
    ];

    return (
        <section id="about" className="py-16 md:py-32 bg-white relative overflow-hidden text-secondary">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                    {/* Image Side - Technical Frame */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/3] md:aspect-[3/4]">
                            <div className="relative w-full h-full border border-gray-100 bg-gray-50 overflow-hidden">
                                <Image
                                    src="/images/about_illustration.png"
                                    alt="Perica et Darko Kostic - Ingénieurs"
                                    fill
                                    className="object-contain p-8"
                                />
                            </div>

                            {/* 30 Years Badge - Minimalist */}
                            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-primary text-white p-5 md:p-6 shadow-none border border-white/20 z-20">
                                <div className="text-4xl font-black leading-none font-mono tracking-tighter">30</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest mt-2 opacity-90">Ans d'Excellence</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <span className="text-accent font-mono tracking-widest uppercase mb-6 block border-l-4 border-accent pl-4">
              /// Notre Histoire
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 text-primary uppercase leading-none">
                            Ingénierie & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Savoir-Faire.</span>
                        </h2>

                        <div className="mb-8">
                            <p className="text-xl md:text-2xl font-medium leading-tight text-secondary mb-6 border-l-4 border-gray-200 pl-6 py-2">
                                "Nous ne posons pas des gaines. Nous concevons des systèmes de performance aéraulique."
                            </p>
                            <p className="text-gray-500 text-lg leading-relaxed font-light">
                                Fondée par Perica Kostic et dirigée aujourd'hui avec son fils Darko, l'entreprise allie l'expérience du terrain à l'exigence des normes suisses modernes. Nous intervenons là où la précision est non-négociable.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                            {values.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-gray-50 flex items-center justify-center border border-gray-200 group-hover:border-accent transition-colors">
                                        <item.icon className="text-primary group-hover:text-accent transition-colors" size={20} />
                                    </div>
                                    <span className="font-bold text-secondary uppercase text-xs tracking-wide">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <a
                                href="#contact"
                                className="inline-block bg-secondary text-white hover:bg-primary px-10 py-4 font-bold uppercase tracking-[0.15em] transition-all shadow-lg hover:shadow-xl text-sm"
                            >
                                Rencontrer la direction
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
