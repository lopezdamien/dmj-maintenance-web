"use client";

import { motion } from "framer-motion";
import { Fan, PenTool, Wrench, BarChart3, Wind } from "lucide-react";
import Image from "next/image";

export default function Services() {
    const services = [
        {
            title: "Études & Conception",
            description: "Dimensionnement, plans techniques et calculs de débit pour une installation optimale.",
            icon: PenTool,
            image: "/services/etude.jpg",
            label: "Ingénierie"
        },
        {
            title: "Installation",
            description: "Pose de réseaux de ventilation, monoblocs et systèmes de climatisation par nos experts.",
            icon: Wrench,
            image: "/services/installation.jpg",
            label: "Mise en œuvre"
        },
        {
            title: "Maintenance",
            description: "Entretien préventif, nettoyage de gaines et remplacement de filtres.",
            icon: Fan,
            image: "/services/maintenance.jpg",
            label: "Suivi"
        },
        {
            title: "Optimisation",
            description: "Audit énergétique et réglage pour réduire votre consommation.",
            icon: BarChart3,
            image: "/services/optimisation.jpg",
            label: "Performance"
        }
    ];

    return (
        <section id="services" className="py-12 md:py-32 bg-white text-secondary">
            <div className="container mx-auto px-6 md:px-8">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-24 gap-6 md:gap-12 border-b border-gray-100 pb-8 md:pb-12 text-center md:text-left">
                    <div className="max-w-2xl">
                        <span className="text-gray-400 font-mono tracking-widest uppercase mb-4 block text-xs">
                    /// Savoir-faire
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary uppercase leading-none">
                            Solutions<br />Techniques
                        </h2>
                    </div>
                    <div className="max-w-lg">
                        <p className="text-base font-light text-gray-500 leading-relaxed text-center md:text-right">
                            "De l’installation à l’optimisation énergétique, nous intervenons sur l’ensemble du cycle de vie de vos systèmes pour garantir performance et durabilité."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative h-full flex flex-col pt-8 px-6 border border-transparent hover:border-secondary transition-colors duration-500 rounded-sm"
                        >
                            {/* Label */}
                            <div className="mb-8">
                                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                                    {service.label}
                                </span>
                            </div>

                            {/* Icon */}
                            <div className="mb-6 text-primary opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300 origin-left">
                                <service.icon size={36} strokeWidth={1.5} />
                            </div>

                            <div className="flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-4 text-primary uppercase tracking-tight group-hover:text-secondary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                                    {service.description}
                                </p>

                                <div className="mt-auto pt-6 flex items-center justify-between text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Voir le détail</span>
                                    <Wind size={14} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
