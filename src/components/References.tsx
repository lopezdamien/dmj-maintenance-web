"use client";

import { motion } from "framer-motion";

const categories = [
    "Régies",
    "Hôtellerie",
    "Restaurants",
    "Retail",
    "Industrie"
];

export default function References() {
    return (
        <section id="references" className="py-24 bg-white border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary uppercase leading-tight mb-4">
                        Ils nous font <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">confiance</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Depuis plus de 30 ans, nous accompagnons les professionnels les plus exigeants de la région genevoise.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 px-5 py-3 md:px-8 md:py-4 border border-gray-100 hover:border-primary transition-colors hover:shadow-md"
                        >
                            <span className="font-bold text-secondary text-sm md:text-base uppercase tracking-widest">
                                {category}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-20 flex overflow-hidden w-full bg-gray-50 border-y border-gray-100 py-8 opacity-50 relative">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                <div className="flex gap-16 min-w-[200%] max-w-max animate-[scroll_40s_linear_infinite] px-8">
                    {[...categories, ...categories, ...categories, ...categories, ...categories, ...categories].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-gray-400 font-black uppercase text-lg md:text-2xl tracking-widest blur-[1px]">
                            {item}
                            <span className="text-accent ms-16">/</span>
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
