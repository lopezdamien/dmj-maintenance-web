"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0F1A10] border-t border-[#4ADE80]/10">

            {/* Top: grand texte watermark */}
            <div className="border-b border-[#4ADE80]/10 overflow-hidden py-8 md:py-12">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <div
                        className="text-[18vw] md:text-[14vw] font-black leading-none text-[#4ADE80]/5 uppercase tracking-tighter select-none"
                        style={{ fontFamily: 'var(--font-display)' }}
                        aria-hidden
                    >
                        DMJ
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/">
                            <span
                                className="text-lg font-bold tracking-tighter text-[#F0F7F2] uppercase"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                DMJ<span className="text-[#4ADE80]">.</span>
                                <span className="text-[#6B8F73] text-xs" style={{ fontFamily: 'var(--font-mono)' }}>maintenance</span>
                            </span>
                        </Link>
                        <p
                            className="text-[#6B8F73] text-xs leading-relaxed max-w-xs"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Maintenance, nettoyage et entretien de systèmes de ventilation CVC pour restaurants, hôtels, commerces et industrie.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4
                            className="text-[#4ADE80] text-xs uppercase tracking-[0.3em] mb-6"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Comment nous travaillons", href: "/comment-nous-travaillons" },
                                { label: "Nos clients", href: "/nos-clients" },
                                { label: "FAQ", href: "/faq" },
                                { label: "Contact", href: "/contact" },
                            ].map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#6B8F73] hover:text-[#F0F7F2] text-xs uppercase tracking-widest transition-colors"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4
                            className="text-[#4ADE80] text-xs uppercase tracking-[0.3em] mb-6"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Contact
                        </h4>
                        <ul
                            className="space-y-3 text-[#6B8F73] text-xs leading-relaxed"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            <li className="text-[#F0F7F2]/50">
                                DMJ Maintenance Sàrl<br />
                                Chemin de l'Ancien-Péage 45<br />
                                1290 Versoix, Suisse
                            </li>
                            <li>
                                <a href="tel:+41227552255" className="hover:text-[#4ADE80] transition-colors">
                                    +41 22 755 22 55
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@dmj-ventilation.ch" className="hover:text-[#4ADE80] transition-colors">
                                    info@dmj-ventilation.ch
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Ventilation Link */}
                    <div>
                        <h4
                            className="text-[#4ADE80] text-xs uppercase tracking-[0.3em] mb-6"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Installation
                        </h4>
                        <p
                            className="text-[#6B8F73] text-xs leading-relaxed mb-6"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Pour la conception et l'installation de systèmes de ventilation, découvrez notre entité spécialisée.
                        </p>
                        <a
                            href="https://dmj-ventilation.ch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 border border-[#4ADE80]/20 text-[#4ADE80] text-xs uppercase tracking-widest hover:bg-[#4ADE80] hover:text-[#080F0A] transition-all duration-200"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            <span>DMJ Ventilation</span>
                            <ExternalLink size={12} />
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-[#4ADE80]/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div
                        className="text-[#6B8F73]/50 text-xs uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        &copy; {new Date().getFullYear()} DMJ Maintenance Sàrl
                    </div>
                    <div className="flex gap-6">
                        {[
                            { label: "Mentions légales", href: "/mentions-legales" },
                            { label: "Confidentialité", href: "/confidentialite" },
                        ].map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[#6B8F73]/50 hover:text-[#6B8F73] text-xs uppercase tracking-widest transition-colors"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
