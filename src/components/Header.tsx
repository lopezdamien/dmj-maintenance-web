"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Comment nous travaillons", href: "/comment-nous-travaillons" },
    { name: "Nos clients", href: "/nos-clients" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    const mobileMenu = (
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ position: "fixed", inset: 0, zIndex: 9999 }}
                    className="bg-[#080F0A] flex flex-col"
                >
                    <div className="flex justify-between items-center border-b border-[#4ADE80]/10 px-6 h-20 shrink-0">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="text-xl font-bold tracking-tighter text-[#F0F7F2] uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                                DMJ<span className="text-[#4ADE80]">.</span>
                            </span>
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-[#F0F7F2]/60 hover:text-[#4ADE80] transition-colors"
                            aria-label="Fermer le menu"
                        >
                            <X size={24} strokeWidth={1.5} />
                        </button>
                    </div>

                    <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
                        {navLinks.map((link, i) => {
                            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                            return (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={clsx(
                                            "block text-3xl font-bold uppercase tracking-tighter py-3 border-b border-[#F0F7F2]/5 transition-colors",
                                            isActive ? "text-[#4ADE80]" : "text-[#F0F7F2]/70 hover:text-[#F0F7F2]"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>

                    <div className="px-8 pb-10">
                        <a href="tel:+41227552255" className="flex items-center gap-3 text-[#6B8F73] text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                            <span className="text-[#4ADE80]">+41 22 755 22 55</span>
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <>
            <header
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-[#080F0A]/95 backdrop-blur-md border-b border-[#4ADE80]/10 py-3"
                        : "bg-transparent border-b border-transparent py-5"
                )}
            >
                <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex justify-between items-center">
                    <Link href="/" className="group flex items-baseline gap-1">
                        <span className="text-lg font-bold tracking-tighter text-[#F0F7F2] uppercase transition-colors group-hover:text-[#4ADE80]" style={{ fontFamily: 'var(--font-display)' }}>
                            DMJ
                        </span>
                        <span className="text-[#4ADE80] text-lg font-bold">.</span>
                        <span className="text-[#F0F7F2]/40 text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                            maintenance
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.filter(l => l.href !== "/").map((link) => {
                            const isActive = pathname.startsWith(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        "text-[11px] uppercase tracking-widest transition-colors relative",
                                        isActive
                                            ? "text-[#4ADE80]"
                                            : "text-[#F0F7F2]/50 hover:text-[#F0F7F2]"
                                    )}
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-indicator"
                                            className="absolute -bottom-1 left-0 right-0 h-px bg-[#4ADE80]"
                                        />
                                    )}
                                </Link>
                            );
                        })}

                        <Link
                            href="/contact"
                            className="px-5 py-2 border border-[#4ADE80]/30 text-[#4ADE80] text-[11px] uppercase tracking-widest hover:bg-[#4ADE80] hover:text-[#080F0A] transition-all duration-200 font-bold"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Contact
                        </Link>
                    </nav>

                    <button
                        className="md:hidden p-2 text-[#F0F7F2]/60 hover:text-[#4ADE80] transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Ouvrir le menu"
                    >
                        <Menu size={22} strokeWidth={1.5} />
                    </button>
                </div>
            </header>

            {mounted && createPortal(mobileMenu, document.body)}
        </>
    );
}
