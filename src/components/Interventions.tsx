"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, Settings, Filter, Droplet, Activity, ShieldAlert } from "lucide-react";

const interventionTypes = [
    { icon: Wrench, title: "Dépannage ventilation" },
    { icon: Settings, title: "Remplacement moteur" },
    { icon: Filter, title: "Remplacement filtres" },
    { icon: Droplet, title: "Nettoyage réseaux" },
    { icon: Activity, title: "Réglage débits" },
    { icon: ShieldAlert, title: "Remise en conformité" }
];

export default function Interventions() {
    return (
        <section id="interventions" className="py-14 md:py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-mono tracking-widest uppercase mb-4 block">
                        /// Nos actions terrain
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary uppercase leading-tight mb-8">
                        Nos Types <br />
                        d'<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Interventions</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                    {interventionTypes.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-white p-5 md:p-8 border border-gray-100 flex flex-col items-center justify-center text-center gap-4 hover:shadow-lg hover:border-accent transition-all group"
                        >
                            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                <item.icon className="text-secondary group-hover:text-accent transition-colors" size={32} />
                            </div>
                            <h3 className="font-bold text-secondary uppercase text-sm tracking-wide">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-5 bg-primary text-white font-bold uppercase tracking-widest hover:bg-secondary transition-colors text-sm shadow-xl hover:shadow-2xl"
                    >
                        Demander une intervention
                    </Link>
                </div>
            </div>
        </section>
    );
}
