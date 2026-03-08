"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Maintenance",
        label: "Préventive",
        description: "Entretien préventif, nettoyage de gaines et remplacement de filtres selon les normes RSEE et OCOSP.",
    },
    {
        num: "02",
        title: "Installation",
        label: "Mise en œuvre",
        description: "Pose de réseaux de ventilation, monoblocs et systèmes de climatisation par nos experts certifiés.",
    },
    {
        num: "03",
        title: "Optimisation",
        label: "Performance",
        description: "Audit énergétique, réglage des débits et équilibrage des réseaux pour réduire votre consommation.",
    },
    {
        num: "04",
        title: "Ingénierie",
        label: "Conception",
        description: "Dimensionnement, plans techniques et calculs de débit pour une installation optimale dès la conception.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 md:py-36 bg-[#080F0A]">
            <div className="max-w-screen-xl mx-auto px-6 md:px-10">

                {/* Header section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-10 border-b border-[#4ADE80]/10">
                    <div>
                        <span
                            className="text-[#4ADE80] text-xs uppercase tracking-[0.3em] mb-4 block"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            /// Savoir-faire
                        </span>
                        <h2
                            className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase text-[#F0F7F2]"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Solutions<br />
                            <span className="text-[#F0F7F2]/20">Techniques</span>
                        </h2>
                    </div>
                    <p
                        className="text-[#6B8F73] text-sm leading-relaxed max-w-xs md:text-right"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        De l'installation à l'optimisation, nous intervenons sur l'ensemble du cycle de vie de vos systèmes CVC.
                    </p>
                </div>

                {/* Services list */}
                <div className="space-y-0">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="group grid grid-cols-12 gap-4 items-start py-8 border-b border-[#4ADE80]/10 hover:border-[#4ADE80]/30 transition-all cursor-default"
                        >
                            {/* Numéro */}
                            <div className="col-span-2 md:col-span-1">
                                <span
                                    className="text-[#6B8F73] text-sm group-hover:text-[#4ADE80] transition-colors"
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    {service.num}
                                </span>
                            </div>

                            {/* Label */}
                            <div className="hidden md:flex col-span-2 items-center">
                                <span
                                    className="text-[#6B8F73]/60 text-xs uppercase tracking-widest"
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    {service.label}
                                </span>
                            </div>

                            {/* Titre */}
                            <div className="col-span-7 md:col-span-4">
                                <h3
                                    className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#F0F7F2] group-hover:text-[#4ADE80] transition-colors duration-300"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    {service.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="col-span-12 md:col-span-4 pl-0 md:pl-4">
                                <p
                                    className="text-[#6B8F73] text-sm leading-relaxed"
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    {service.description}
                                </p>
                            </div>

                            {/* Arrow */}
                            <div className="hidden md:flex col-span-1 justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[#4ADE80] text-xl">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-end">
                    <Link
                        href="/contact"
                        className="group flex items-center gap-4 text-[#F0F7F2]/60 hover:text-[#4ADE80] transition-colors"
                    >
                        <span
                            className="text-xs uppercase tracking-[0.2em]"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Demander un audit
                        </span>
                        <span className="w-12 h-px bg-current" />
                        <span className="text-lg">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
