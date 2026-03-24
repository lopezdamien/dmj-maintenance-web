"use client";

import { motion } from "framer-motion";

const clientCategories = [
    {
        label: "Markets & Retail",
        clients: [
            { name: "H&M", color: "#E50010" },
            { name: "Coop", color: "#FF6600" },
            { name: "Qualipet", color: "#FFD700" },
            { name: "Gifi", color: "#E30613" },
            { name: "Confédération Centre", color: "#1E5B3A" },
            { name: "Tesla", color: "#CC0000" },
        ]
    },
    {
        label: "Villes & Régies",
        clients: [
            { name: "Ville de Versoix", color: "#003A8C" },
            { name: "Naef", color: "#C00000" },
            { name: "SPG", color: "#2C2C2C" },
            { name: "Crissimmo", color: "#1E5B3A" },
        ]
    },
    {
        label: "Restaurants, Hôtels & EMS",
        clients: [
            { name: "HAGES", color: "#8DC63F" },
            { name: "Wasabi Sushi Bento Bar", color: "#1A1A1A" },
            { name: "Dai 3 Fratelli Scalea", color: "#C00000" },
            { name: "Funky Monkey Room", color: "#CC0000" },
            { name: "Poulet 22", color: "#F5A623" },
            { name: "Hôtel de Nyon", color: "#1E5B3A" },
        ]
    }
];

const scrollingClients = clientCategories.flatMap(c => c.clients).map(c => c.name);

export default function References() {
    return (
        <section id="references" className="py-24 bg-white border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-gray-400 font-mono tracking-widest uppercase text-xs block mb-4">
                        /// Nos références
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary uppercase leading-tight mb-4">
                        Ils nous font <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">confiance</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Depuis plus de 30 ans, nous accompagnons les professionnels les plus exigeants de la région genevoise.
                    </p>
                </div>

                <div className="space-y-12">
                    {clientCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        >
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 border-l-4 border-primary pl-4">
                                {category.label}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.clients.map((client, index) => (
                                    <div
                                        key={index}
                                        className="group bg-gray-50 border border-gray-100 hover:border-primary hover:shadow-md transition-all px-5 py-3 flex items-center gap-3"
                                    >
                                        <div
                                            className="w-3 h-3 rounded-full shrink-0"
                                            style={{ backgroundColor: client.color }}
                                        />
                                        <span className="font-bold text-secondary text-sm tracking-wide group-hover:text-primary transition-colors">
                                            {client.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Scrolling ticker */}
            <div className="mt-20 flex overflow-hidden w-full bg-gray-50 border-y border-gray-100 py-8 opacity-40 relative">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                <div className="flex gap-16 min-w-[200%] max-w-max animate-[scroll_50s_linear_infinite] px-8">
                    {[...scrollingClients, ...scrollingClients, ...scrollingClients, ...scrollingClients].map((name, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-gray-400 font-black uppercase text-lg md:text-2xl tracking-widest blur-[1px] whitespace-nowrap">
                            {name}
                            <span className="text-primary ms-16">/</span>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
