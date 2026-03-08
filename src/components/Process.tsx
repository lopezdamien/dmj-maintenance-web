"use client";

import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "Audit technique" },
    { num: "02", title: "Plan de maintenance" },
    { num: "03", title: "Intervention" },
    { num: "04", title: "Rapport" },
    { num: "05", title: "Suivi" }
];

export default function Process() {
    return (
        <section className="py-24 bg-primary text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay"></div>

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="mb-16 md:mb-24">
                    <span className="text-surface font-mono tracking-widest uppercase mb-4 block">
                        /// Méthodologie
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                        Notre <br />
                        <span className="text-surface">Méthode.</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical connector line on mobile */}
                    <div className="md:hidden absolute top-0 bottom-0 left-8 w-px bg-white/20 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-white/20"></div>
                                )}

                                <div className="flex md:flex-col flex-row gap-6 items-start md:items-start">
                                    <div className="w-16 h-16 rounded-full border border-surface flex items-center justify-center bg-primary text-surface font-mono text-xl relative z-10 shadow-[0_0_15px_rgba(46,204,113,0.15)] shrink-0">
                                        {step.num}
                                    </div>

                                    <div className="flex items-center md:items-start">
                                        <h3 className="text-lg font-bold uppercase tracking-wide text-white/90">
                                            {step.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
