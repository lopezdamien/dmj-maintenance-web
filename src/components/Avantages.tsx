"use client";

import { motion } from "framer-motion";
import { Zap, FileText, Award, Activity } from "lucide-react";

const avantages = [
    { icon: Zap, title: "Intervention rapide" },
    { icon: FileText, title: "Rapport détaillé" },
    { icon: Award, title: "Équipes certifiées" },
    { icon: Activity, title: "Suivi technique" }
];

export default function Avantages() {
    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {avantages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center gap-4"
                        >
                            <div className="w-16 h-16 bg-gray-50 flex items-center justify-center border border-gray-100 rounded-sm">
                                <item.icon className="text-primary" size={28} />
                            </div>
                            <h3 className="font-bold text-secondary uppercase text-sm tracking-wide">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
