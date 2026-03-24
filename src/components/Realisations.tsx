"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const realisations = [
    {
        title: "Nettoyage conduits – Restaurant gastronomique",
        category: "Nettoyage & Désinfection",
        location: "Genève",
        src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    },
    {
        title: "Contrat entretien – Hôtel 4 étoiles",
        category: "Entretien annuel",
        location: "Versoix",
        src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    },
    {
        title: "Maintenance préventive – Centre commercial",
        category: "Maintenance préventive",
        location: "Genève",
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
        title: "Dépannage urgence – EMS Seniors",
        category: "Dépannage rapide",
        location: "Grand-Saconnex",
        src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    },
    {
        title: "Audit énergétique – Régie immobilière",
        category: "Audit & Optimisation",
        location: "Nyon",
        src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    },
    {
        title: "Entretien annuel – Cuisine professionnelle",
        category: "Entretien annuel",
        location: "Coppet",
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    },
];

export default function Realisations() {
    return (
        <section id="realisations" className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <span className="text-gray-400 font-mono tracking-widest uppercase text-xs block mb-4">
                            /// Nos chantiers
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary uppercase leading-none">
                            Nos réalisations
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm font-light max-w-sm text-right leading-relaxed">
                        Quelques exemples de nos interventions en région genevoise et vaudoise.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {realisations.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group relative overflow-hidden bg-gray-100 aspect-[4/3]"
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                unoptimized
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">
                                    {item.category} · {item.location}
                                </span>
                                <h3 className="font-bold text-white text-base leading-tight">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Arrow icon on hover */}
                            <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowUpRight size={14} className="text-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-xs text-gray-400 font-mono uppercase tracking-widest mt-12">
                    Photos illustratives – à remplacer par les photos des réalisations réelles
                </p>
            </div>
        </section>
    );
}
