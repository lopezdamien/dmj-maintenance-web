"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">
                                DMJ<span className="text-surface">.Maintenance</span>
                            </span>
                        </Link>
                        <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">
                            Maintenance, nettoyage et entretien de systèmes de ventilation CVC pour restaurants, hôtels, commerces et industrie.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-bold text-surface uppercase tracking-widest text-xs mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href="/contrats" className="text-white/70 hover:text-white transition-colors text-sm">Contrats</Link></li>
                            <li><Link href="/interventions" className="text-white/70 hover:text-white transition-colors text-sm">Interventions</Link></li>
                            <li><Link href="/methode" className="text-white/70 hover:text-white transition-colors text-sm">Notre Méthode</Link></li>
                            <li><Link href="/references" className="text-white/70 hover:text-white transition-colors text-sm">Références</Link></li>
                            <li><Link href="/faq" className="text-white/70 hover:text-white transition-colors text-sm">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-surface uppercase tracking-widest text-xs mb-6">Contact</h4>
                        <ul className="space-y-4 text-white/70 text-sm font-light leading-relaxed">
                            <li>
                                <strong className="text-white/90">DMJ Maintenance Sàrl</strong><br />
                                Chemin de l'Ancien-Péage 45<br />
                                1290 Versoix, Suisse
                            </li>
                            <li className="pt-2">
                                <a href="tel:+41227552255" className="hover:text-white transition-colors">
                                    +41 22 755 22 55
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@dmj-ventilation.ch" className="hover:text-white transition-colors">
                                    info@dmj-ventilation.ch
                                </a>
                            </li>
                            <li className="pt-4">
                                <Link href="/contact" className="font-bold text-surface uppercase tracking-widest text-xs hover:text-white transition-colors">
                                    Demander un devis →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Ventilation Link */}
                    <div>
                        <h4 className="font-bold text-surface uppercase tracking-widest text-xs mb-6">Installation</h4>
                        <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                            Pour la conception et l'installation de systèmes de ventilation, découvrez notre entité spécialisée.
                        </p>
                        <a
                            href="https://dmj-ventilation.ch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 border border-surface/50 text-surface font-bold uppercase tracking-wide text-xs hover:bg-surface hover:text-primary transition-colors rounded-sm"
                        >
                            <span>DMJ Ventilation</span>
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono tracking-wider text-white/40 uppercase">
                    <div>
                        &copy; {new Date().getFullYear()} DMJ Maintenance Sàrl. Tous droits réservés.
                    </div>
                    <div className="flex gap-6">
                        <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
                        <Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
