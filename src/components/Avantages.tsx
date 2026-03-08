"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "30", unit: "ans", label: "D'expertise terrain" },
    { value: "24h", unit: "", label: "Réponse garantie" },
    { value: "100%", unit: "", label: "Conformité RSEE" },
    { value: "500+", unit: "", label: "Sites maintenus" },
];

export default function Avantages() {
    return (
        <section className="bg-[#080F0A] border-b border-[#4ADE80]/10">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="px-8 py-12 border-r border-b lg:border-b-0 border-[#4ADE80]/10 last:border-r-0 group"
                        >
                            <div className="flex items-baseline gap-1 mb-3">
                                <span
                                    className="text-5xl md:text-6xl font-black text-[#F0F7F2] leading-none group-hover:text-[#4ADE80] transition-colors duration-300"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    {stat.value}
                                </span>
                                {stat.unit && (
                                    <span
                                        className="text-xl font-bold text-[#6B8F73]"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {stat.unit}
                                    </span>
                                )}
                            </div>
                            <p
                                className="text-[#6B8F73] text-xs uppercase tracking-widest"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
