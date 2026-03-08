"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Contrats", href: "/contrats" },
    { name: "Interventions", href: "/interventions" },
    { name: "Méthode", href: "/methode" },
    { name: "Références", href: "/references" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-primary/95 backdrop-blur-md text-white shadow-sm border-white/5 py-2"
                    : "bg-primary text-white border-transparent py-3"
            )}
        >
            <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-xl md:text-2xl font-bold tracking-tighter uppercase">
                        DMJ<span className="text-surface">.Maintenance</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs md:text-sm font-semibold uppercase tracking-widest hover:text-surface/80 transition-colors relative group"
                            >
                                {link.name}
                                <span className={clsx(
                                    "absolute -bottom-1 left-0 h-0.5 bg-surface transition-all duration-300",
                                    isActive ? "w-full" : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        );
                    })}

                    <div className="flex flex-col items-center gap-1">
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 px-6 py-2 border border-surface text-surface font-bold uppercase tracking-wide text-xs hover:bg-surface hover:text-primary transition-all rounded-md"
                        >
                            <Phone size={16} />
                            <span>Devis Gratuit</span>
                        </Link>
                        <Link href="/contact" className="text-[10px] text-white/70 hover:text-surface transition-colors tracking-widest uppercase font-semibold">
                            Urgence 24/7
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white hover:bg-white/10 rounded"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Ouvrir le menu"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-primary/98 backdrop-blur-md z-[100] flex flex-col"
                    >
                        <div className="p-5 flex justify-between items-center border-b border-white/10 h-20">
                            <span className="text-2xl font-bold text-white uppercase tracking-tighter">
                                DMJ<span className="text-surface">.Maintenance</span>
                            </span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-white hover:text-surface transition-colors rounded-full hover:bg-white/10"
                                aria-label="Fermer le menu"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <nav className="flex-1 flex flex-col justify-center items-center gap-6 p-8 relative overflow-y-auto">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl md:text-3xl font-bold text-white hover:text-surface uppercase tracking-widest transition-colors py-2"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="w-12 h-px bg-white/20 my-4"></div>

                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-8 py-4 bg-surface text-primary font-bold text-lg uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-3 w-full max-w-xs justify-center rounded-sm shadow-lg"
                            >
                                <Phone size={20} />
                                Devis Gratuit
                            </Link>

                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm text-white/70 hover:text-surface transition-colors tracking-widest uppercase font-bold mt-2"
                            >
                                Urgence 24/7
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
