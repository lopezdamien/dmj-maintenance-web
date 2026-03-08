"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 hidden lg:block"></div>
            <div className="container mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent font-mono tracking-widest uppercase mb-6 block border-l-4 border-accent pl-4">
                            /// Contact
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-primary uppercase leading-tight mb-8">
                            Parlons de votre <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Installation.</span>
                        </h2>

                        <div className="space-y-8 mt-12 bg-gray-50 p-8 border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white flex items-center justify-center border border-gray-200 shrink-0">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary uppercase text-sm tracking-widest mb-2 border-b border-gray-200 pb-2">Siège Social</h4>
                                    <p className="text-gray-600">Chemin de l'Ancien-Péage 45<br />1290 Versoix, Suisse</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white flex items-center justify-center border border-gray-200 shrink-0">
                                    <Phone className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary uppercase text-sm tracking-widest mb-2 border-b border-gray-200 pb-2">Téléphone (24/7 Urgence)</h4>
                                    <a href="tel:+41227552255" className="text-gray-600 hover:text-accent font-mono text-lg transition-colors">
                                        +41 22 755 22 55
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white flex items-center justify-center border border-gray-200 shrink-0">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary uppercase text-sm tracking-widest mb-2 border-b border-gray-200 pb-2">Email</h4>
                                    <a href="mailto:info@dmj-ventilation.ch" className="text-gray-600 hover:text-accent font-medium transition-colors">
                                        info@dmj-ventilation.ch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white lg:p-12 lg:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-8"
                    >
                        <h3 className="text-2xl font-black text-secondary tracking-tight uppercase mb-8 border-b-2 border-primary inline-block pb-2">
                            Envoyer une demande
                        </h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Nom</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-secondary" placeholder="Jean Dupont" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Société</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-secondary" placeholder="Entreprise SA" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Téléphone</label>
                                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-secondary" placeholder="+41 -- --- -- --" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email</label>
                                    <input type="email" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-secondary" placeholder="email@exemple.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Type de bâtiment</label>
                                <select className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-secondary appearance-none">
                                    <option>Restaurant / Cuisine pro</option>
                                    <option>Hôtellerie</option>
                                    <option>Bureaux / Régie</option>
                                    <option>Industrie</option>
                                    <option>Autre</option>
                                </select>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-gray-100">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">Je souhaite :</label>
                                <div className="flex flex-wrap gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input type="radio" name="request_type" defaultChecked className="accent-primary w-4 h-4" />
                                        <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">Un devis</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input type="radio" name="request_type" className="accent-primary w-4 h-4" />
                                        <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">Une visite</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input type="radio" name="request_type" className="accent-[#E74C3C] w-4 h-4" />
                                        <span className="text-sm font-bold text-[#E74C3C] group-hover:text-[#c0392b] transition-colors">Urgence</span>
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
                                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-secondary resize-none" placeholder="Précisez votre demande..."></textarea>
                            </div>

                            <button type="button" className="w-full bg-primary text-white font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-3 hover:bg-secondary transition-colors group">
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                Envoyer
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
