"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        label: "Adresse",
        value: "Chemin de l'Ancien-Péage 45\n1290 Versoix, Suisse",
    },
    {
        icon: Phone,
        label: "Téléphone",
        value: "+41 22 755 22 55",
        href: "tel:+41227552255",
    },
    {
        icon: Mail,
        label: "Email",
        value: "info@dmj-ventilation.ch",
        href: "mailto:info@dmj-ventilation.ch",
    },
];

const requestTypes = ["Un devis", "Une visite", "Urgence"];
const buildingTypes = ["Restaurant / Cuisine pro", "Hôtellerie", "Bureaux / Régie", "Industrie", "Autre"];

export default function Contact() {
    const [selectedRequest, setSelectedRequest] = useState("Un devis");

    return (
        <section className="bg-white">
            <div className="container mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[600px]">

                    {/* Left — Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 bg-primary text-white px-8 py-10 md:py-16 md:px-12 flex flex-col justify-between gap-12"
                    >
                        <div>
                            <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/50 block mb-8">
                                /// Coordonnées
                            </span>

                            <div className="space-y-10">
                                {contactInfo.map((item) => (
                                    <div key={item.label} className="flex gap-5 items-start group">
                                        <div className="w-10 h-10 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-surface transition-colors">
                                            <item.icon size={18} className="text-surface/70 group-hover:text-surface transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{item.label}</p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-white/80 hover:text-white transition-colors font-light leading-relaxed whitespace-pre-line"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-white/80 font-light leading-relaxed whitespace-pre-line">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative bottom element */}
                        <div className="border-t border-white/10 pt-8">
                            <p className="text-white/30 font-mono text-xs tracking-widest uppercase leading-relaxed">
                                DMJ Maintenance Sàrl<br />
                                Région genevoise & Vaud
                            </p>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="lg:col-span-3 px-8 py-16 md:px-12 lg:px-16 border-t lg:border-t-0 lg:border-l border-gray-100"
                    >
                        <h3 className="text-xl font-black text-primary uppercase tracking-tight mb-10 pb-6 border-b border-gray-100">
                            Envoyer une demande
                        </h3>

                        <form className="space-y-4 md:space-y-7">
                            {/* Nom + Société */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Field label="Nom" type="text" placeholder="Jean Dupont" />
                                <Field label="Société" type="text" placeholder="Entreprise SA" />
                            </div>

                            {/* Téléphone + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Field label="Téléphone" type="tel" placeholder="+41 -- --- -- --" />
                                <Field label="Email" type="email" placeholder="email@exemple.com" />
                            </div>

                            {/* Type de bâtiment */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                                    Type de bâtiment
                                </label>
                                <select className="w-full bg-white border-b-2 border-gray-200 focus:border-primary px-0 py-3 focus:outline-none transition-colors text-secondary text-sm appearance-none cursor-pointer">
                                    {buildingTypes.map((t) => <option key={t}>{t}</option>)}
                                </select>
                            </div>

                            {/* Request type — chips */}
                            <div className="space-y-3 pt-2">
                                <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 block">
                                    Je souhaite
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {requestTypes.map((type) => {
                                        const isUrgence = type === "Urgence";
                                        const isSelected = selectedRequest === type;
                                        return (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => setSelectedRequest(type)}
                                                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-all ${
                                                    isSelected
                                                        ? isUrgence
                                                            ? "bg-red-600 border-red-600 text-white"
                                                            : "bg-primary border-primary text-white"
                                                        : isUrgence
                                                        ? "border-red-200 text-red-500 hover:border-red-400 bg-white"
                                                        : "border-gray-200 text-gray-500 hover:border-primary hover:text-primary bg-white"
                                                }`}
                                            >
                                                {type}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-gray-50 border border-gray-100 focus:border-primary px-4 py-3 focus:outline-none transition-colors text-secondary text-sm resize-none"
                                    placeholder="Précisez votre demande..."
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="button"
                                className="group flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-colors"
                            >
                                <span>Envoyer</span>
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-white border-b-2 border-gray-200 focus:border-primary px-0 py-3 focus:outline-none transition-colors text-secondary text-sm placeholder:text-gray-300"
            />
        </div>
    );
}
