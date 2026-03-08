"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
    {
        name: "Essentiel",
        code: "ESS",
        features: [
            "2 visites par an",
            "Contrôle installation",
            "Nettoyage léger",
            "Rapport PDF",
        ],
    },
    {
        name: "Pro",
        code: "PRO",
        featured: true,
        features: [
            "4 visites par an",
            "Nettoyage approfondi",
            "Remplacement filtres",
            "Réglages techniques",
        ],
    },
    {
        name: "Premium",
        code: "PRM",
        features: [
            "Maintenance sur mesure",
            "Priorité dépannage",
            "Suivi technique complet",
            "Rapports détaillés",
        ],
    },
];

export default function Offres() {
    return (
        <section id="offres" className="py-24 md:py-36 bg-[#080F0A]">
            <div className="max-w-screen-xl mx-auto px-6 md:px-10">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-10 border-b border-[#4ADE80]/10">
                    <div>
                        <span
                            className="text-[#4ADE80] text-xs uppercase tracking-[0.3em] mb-4 block"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            /// Contrats
                        </span>
                        <h2
                            className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase text-[#F0F7F2]"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Nos Plans de<br />
                            <span className="text-[#F0F7F2]/20">Maintenance</span>
                        </h2>
                    </div>
                    <p
                        className="text-[#6B8F73] text-sm leading-relaxed max-w-xs md:text-right"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Choisissez le contrat adapté à vos besoins. Devis personnalisé sous 24h.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#4ADE80]/10">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col p-10 border-r border-[#4ADE80]/10 last:border-r-0 ${plan.featured ? 'bg-[#1E5B3A]/10' : 'bg-transparent'}`}
                        >
                            {plan.featured && (
                                <div
                                    className="absolute top-0 right-0 bg-[#4ADE80] text-[#080F0A] text-[10px] font-black uppercase tracking-widest px-3 py-1"
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    Recommandé
                                </div>
                            )}

                            {/* Code plan */}
                            <div
                                className={`text-xs uppercase tracking-[0.3em] mb-6 ${plan.featured ? 'text-[#4ADE80]' : 'text-[#6B8F73]'}`}
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                {plan.code}
                            </div>

                            {/* Nom */}
                            <h3
                                className="text-4xl font-black uppercase tracking-tighter text-[#F0F7F2] mb-10"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {plan.name}
                            </h3>

                            {/* Features */}
                            <ul className="flex-1 space-y-4 mb-10">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3">
                                        <span className={`text-sm ${plan.featured ? 'text-[#4ADE80]' : 'text-[#6B8F73]'}`} style={{ fontFamily: 'var(--font-mono)' }}>
                                            ✓
                                        </span>
                                        <span
                                            className="text-[#F0F7F2]/70 text-sm"
                                            style={{ fontFamily: 'var(--font-mono)' }}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link
                                href="/contact"
                                className={`group flex items-center justify-between px-6 py-4 text-xs uppercase tracking-widest font-bold transition-all duration-200 border ${
                                    plan.featured
                                        ? 'bg-[#4ADE80] text-[#080F0A] border-[#4ADE80] hover:bg-[#4ADE80]/90'
                                        : 'border-[#4ADE80]/20 text-[#F0F7F2]/60 hover:border-[#4ADE80]/60 hover:text-[#4ADE80]'
                                }`}
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                <span>Choisir</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
