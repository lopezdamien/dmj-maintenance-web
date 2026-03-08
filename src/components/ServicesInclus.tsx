"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
    "Diagnostic complet",
    "Nettoyage des gaines",
    "Remplacement filtres",
    "Contrôle débits",
    "Équilibrage réseau",
    "Contrôle vibration",
    "Rapport technique",
    "Recommandations d'amélioration"
];

export default function ServicesInclus() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/3">
                        <span className="text-accent font-mono tracking-widest uppercase mb-6 block border-l-4 border-accent pl-4">
                            /// Performance
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 text-primary uppercase leading-tight">
                            Services <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Inclus.</span>
                        </h2>
                        <p className="text-gray-500 font-light leading-relaxed mb-8">
                            Chaque intervention comprend une série de prestations pour garantir la performance et la longévité de vos installations aérauliques.
                        </p>
                    </div>

                    <div className="w-full lg:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-gray-50 border border-gray-100 p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-primary transition-colors cursor-default"
                                >
                                    <CheckCircle2 className="text-primary opacity-80" size={24} />
                                    <span className="font-bold text-secondary text-xs uppercase tracking-wide">
                                        {service}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
