"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    subtitle: string;
    title: React.ReactNode;
    description?: string;
    dark?: boolean;
}

export default function SectionHeader({ subtitle, title, description, dark = false }: SectionHeaderProps) {
    return (
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b pb-8" style={{ borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(30, 91, 58, 0.1)' }}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-2xl"
            >
                <span className={`font-mono tracking-widest uppercase text-sm block mb-4 ${dark ? 'text-white/60' : 'text-primary/60'}`}>
                    /// {subtitle}
                </span>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none ${dark ? 'text-white' : 'text-primary'}`}>
                    {title}
                </h1>
            </motion.div>
            {description && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="max-w-md"
                >
                    <p className={`text-lg font-light leading-relaxed ${dark ? 'text-white/70' : 'text-primary/70'}`}>
                        {description}
                    </p>
                </motion.div>
            )}
        </div>
    );
}
