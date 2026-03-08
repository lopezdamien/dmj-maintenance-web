"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, PencilRuler, Wrench, BarChart3, ShieldCheck } from "lucide-react";

export default function Methodology() {
    const steps = [
        {
            icon: ClipboardCheck,
            title: "Audit",
            description: "Analyse des besoins et de l'existant."
        },
        {
            icon: PencilRuler,
            title: "Étude",
            description: "Dimensionnement et plans techniques."
        },
        {
            icon: Wrench,
            title: "Installation",
            description: "Montage par nos équipes qualifiées."
        },
        {
            icon: BarChart3,
            title: "Optimisation",
            description: "Réglages aérauliques et énergétiques."
        },
        {
            icon: ShieldCheck,
            title: "Maintenance",
            description: "Suivi et hygiène des réseaux."
        }
    ];

    return (
        <section className="py-10 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <span className="text-gray-400 font-mono tracking-widest uppercase mb-4 block text-xs">
            /// Processus
                </span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary mb-12 md:mb-24 uppercase">
                    Notre Méthode
                </h2>

                <div className="relative">
                    {/* Connecting Line - Horizontal (Desktop) */}
                    <div className="hidden md:block absolute top-[24px] left-0 w-full h-px bg-gray-200 z-0"></div>

                    {/* Connecting Line - Vertical (Mobile) */}
                    <div className="md:hidden absolute top-0 bottom-0 left-6 w-px bg-gray-200 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-0 group bg-white py-4 md:py-0 pl-16 md:pl-0"
                            >
                                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-0 md:mb-8 z-10 shrink-0">
                                    <step.icon size={20} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-base font-bold uppercase tracking-wide text-primary mb-2 md:mb-3 bg-white px-2 z-10">{index + 1}. {step.title}</h3>
                                <p className="text-xs text-gray-500 font-medium max-w-none md:max-w-[140px] mx-0 md:mx-auto leading-relaxed bg-white z-10">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
