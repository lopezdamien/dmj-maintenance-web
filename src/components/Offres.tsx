"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Offres() {
    const plans = [
        {
            name: "ESSENTIEL",
            features: [
                "2 visites par an",
                "Contrôle installation",
                "Nettoyage léger",
                "Rapport PDF"
            ]
        },
        {
            name: "PRO",
            featured: true,
            features: [
                "4 visites par an",
                "Nettoyage approfondi",
                "Remplacement filtres",
                "Réglages techniques"
            ]
        },
        {
            name: "PREMIUM",
            features: [
                "Maintenance sur mesure",
                "Priorité dépannage",
                "Suivi technique complet",
                "Rapports détaillés"
            ]
        }
    ];

    return (
        <section id="offres" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary uppercase">
                        Nos contrats de <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">maintenance</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col bg-white border ${plan.featured ? "border-primary shadow-xl ring-2 ring-primary ring-offset-2" : "border-gray-200"} p-8 relative rounded-sm`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1">
                                    Recommandé
                                </div>
                            )}
                            <h3 className="text-2xl font-black uppercase tracking-tight text-secondary text-center mb-8 border-b border-gray-100 pb-4">
                                {plan.name}
                            </h3>
                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3">
                                        <Check className="text-primary shrink-0" size={18} />
                                        <span className="text-gray-600 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contact"
                                className={`block w-full text-center py-4 text-sm font-bold uppercase tracking-widest transition-colors ${plan.featured ? "bg-primary text-white hover:bg-secondary" : "bg-gray-100 text-secondary hover:bg-gray-200"}`}
                            >
                                Choisir ce contrat
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
