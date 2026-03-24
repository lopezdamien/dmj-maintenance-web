"use client";

import { motion } from "framer-motion";
import { Leaf, Award, Zap } from "lucide-react";

export default function SIGPartnership() {
    return (
        <section className="py-12 md:py-32 bg-[#1E5B3A] text-white relative overflow-hidden">
            {/* Very Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-start text-center md:text-left">

                    {/* Left Column: Text Content */}
                    <div className="max-w-3xl lg:w-2/3">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full mb-8 border border-white/5 mx-auto md:mx-0">
                            <Leaf size={14} className="text-white/80" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Partenaire engagé 2025</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 leading-tight tracking-tight">
                            Partenaire des SIG – Ensemble pour une ventilation plus économe.
                        </h2>

                        <div className="space-y-6 md:space-y-8 text-base md:text-lg font-light leading-relaxed text-gray-200">
                            <p>
                                Dans une démarche d’innovation et de responsabilité environnementale, <strong>DMJ Maintenance</strong> est partenaire des Services Industriels de Genève (SIG).
                            </p>
                            <p>
                                Ce partenariat s’inscrit dans notre volonté commune de faire évoluer les installations de ventilation vers des solutions plus performantes, plus économiques et plus respectueuses de l’environnement.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Badges & Call to Action - Flat */}
                    <div className="lg:w-1/3 w-full">
                        <div className="bg-white p-8 rounded-sm shadow-none text-primary space-y-10 border border-white/10 opacity-95">
                            {/* Logos Area - Distinct */}
                            <div className="grid grid-cols-1 gap-8 text-center">
                                {/* SIG Logo Representation */}
                                <div>
                                    <div className="text-3xl font-black tracking-tighter mb-1">SIG</div>
                                    <div className="text-[10px] uppercase text-gray-400 tracking-wider font-medium">Services Industriels de Genève</div>
                                </div>

                                <div className="h-px w-full bg-gray-100"></div>

                                {/* Eco21 Logo Representation */}
                                <div className="flex items-center justify-center gap-2 text-primary">
                                    <Zap size={20} fill="currentColor" />
                                    <span className="text-2xl font-bold tracking-tight">éco21</span>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-4">
                                    <Award className="text-primary/70" size={18} />
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Audit énergétique certifié</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Leaf className="text-primary/70" size={18} />
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Solutions durables</span>
                                </div>
                            </div>

                            <a href="#contact" className="block w-full py-3 bg-primary text-white text-center font-bold uppercase tracking-widest hover:bg-secondary transition-colors text-sm rounded-sm">
                                En savoir plus
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer Text */}
                <div className="mt-20 pt-8 border-t border-white/10 text-center md:text-left text-xs text-white/40 font-mono tracking-wide max-w-4xl">
                    "Ensemble, nous contribuons à l’innovation énergétique locale, en mettant en avant des technologies modernes, des pratiques durables et un accompagnement personnalisé à chaque étape du projet."
                </div>
            </div>
        </section>
    );
}
