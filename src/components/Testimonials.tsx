"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        quote: "Équipe réactive et professionnelle. Nos systèmes de ventilation sont impeccablement entretenus depuis des années. Un partenaire de confiance.",
        author: "Dog n Roll",
        role: "Client",
        initials: "DR",
    },
    {
        quote: "Interviennent toujours rapidement en cas de panne. Les rapports d'entretien sont clairs et complets. Nous recommandons vivement DMJ Maintenance.",
        author: "FMR",
        role: "Client",
        initials: "FM",
    },
    {
        quote: "Depuis que nous travaillons avec DMJ Maintenance, nos cuisines respectent parfaitement les normes d'hygiène. Service irréprochable.",
        author: "Dai 3 Fratelli Scalea",
        role: "Restaurant",
        initials: "DF",
    },
    {
        quote: "Contrat d'entretien annuel, zéro surprise. L'équipe connaît nos installations sur le bout des doigts. Exactement ce qu'on cherchait.",
        author: "Poulet 22",
        role: "Restaurant",
        initials: "P2",
    },
];

const partners = [
    { name: "Raphaël LACHAT", role: "Architecte", type: "architect" },
    { name: "Rodrigo MARTINS", role: "Architecte", type: "architect" },
    { name: "Econet Services SA", role: "Partenaire", type: "partner" },
    { name: "Carroz Ventilation", role: "Partenaire", type: "partner" },
    { name: "Location Victor", role: "Partenaire", type: "partner" },
];

export default function Testimonials() {
    return (
        <section id="temoignages" className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-8">

                {/* Header */}
                <div className="mb-16">
                    <span className="text-gray-400 font-mono tracking-widest uppercase text-xs block mb-4">
                        /// Ce qu'ils disent
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary uppercase leading-none">
                        Témoignages
                    </h2>
                </div>

                {/* Testimonial cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-gray-100 p-8 hover:border-primary hover:shadow-md transition-all"
                        >
                            <Quote className="text-primary/20 mb-6" size={36} />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                                ))}
                            </div>

                            <p className="text-gray-600 text-base font-light leading-relaxed mb-8 italic">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                <div className="w-10 h-10 bg-primary text-white flex items-center justify-center font-bold text-xs uppercase tracking-wider shrink-0">
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-bold text-secondary text-sm uppercase tracking-wide">{t.author}</p>
                                    <p className="text-gray-400 text-xs uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Architects & Partners */}
                <div className="border-t border-gray-200 pt-16">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
                        Architectes & Partenaires
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {partners.map((p, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="bg-white border border-gray-100 px-6 py-4 hover:border-primary transition-colors"
                            >
                                <p className="font-bold text-secondary text-sm uppercase tracking-wide">{p.name}</p>
                                <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">{p.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
