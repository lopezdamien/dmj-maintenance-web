"use client";

import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "Audit", sub: "Diagnostic technique complet de vos installations" },
    { num: "02", title: "Plan", sub: "Élaboration d'un plan de maintenance personnalisé" },
    { num: "03", title: "Intervention", sub: "Exécution par nos techniciens certifiés" },
    { num: "04", title: "Rapport", sub: "Document de conformité remis sous 48h" },
    { num: "05", title: "Suivi", sub: "Planification des interventions suivantes" },
];

export default function Process() {
    return (
        <section className="py-24 md:py-36 bg-[#0F1A10] relative overflow-hidden">

            {/* Texture de fond */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, #4ADE80 0px, #4ADE80 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #4ADE80 0px, #4ADE80 1px, transparent 1px, transparent 80px)'
                }}
            />

            <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div>
                        <span
                            className="text-[#4ADE80] text-xs uppercase tracking-[0.3em] mb-4 block"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            /// Méthodologie
                        </span>
                        <h2
                            className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase text-[#F0F7F2]"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Notre<br />
                            <span className="text-[#4ADE80]">Méthode.</span>
                        </h2>
                    </div>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative border-t border-[#4ADE80]/15 md:border-t-0 md:border-l md:border-[#4ADE80]/15 first:border-l-0 pt-8 md:pt-0 md:pl-8 pb-8 md:pb-0"
                        >
                            {/* Numéro grand */}
                            <div
                                className="text-7xl md:text-8xl font-black leading-none text-[#4ADE80]/10 group-hover:text-[#4ADE80]/20 transition-colors mb-6"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {step.num}
                            </div>

                            <h3
                                className="text-xl font-black uppercase tracking-tight text-[#F0F7F2] mb-3"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {step.title}
                            </h3>
                            <p
                                className="text-[#6B8F73] text-xs leading-relaxed"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                {step.sub}
                            </p>

                            {/* Indicateur actif au hover */}
                            <div className="mt-6 w-6 h-px bg-[#4ADE80] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-12" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
