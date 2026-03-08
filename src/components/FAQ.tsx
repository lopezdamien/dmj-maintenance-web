"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Quelle fréquence de maintenance ?",
        answer: "La fréquence dépend de votre installation et de votre secteur d'activité. Pour les restaurants, une maintenance tous les 3 à 6 mois est recommandée. Pour l'industrie ou les immeubles de bureaux, 1 à 2 fois par an suffisent souvent."
    },
    {
        question: "Quel prix pour un contrat ?",
        answer: "Le prix varie selon la taille et la complexité de votre réseau de ventilation ainsi que les options choisies (ESSENTIEL, PRO, PREMIUM). Contactez-nous pour obtenir un devis personnalisé gratuitement."
    },
    {
        question: "Intervenez-vous en urgence ?",
        answer: "Oui, notre équipe intervient 24h/24 et 7j/7 pour les urgences. Les clients bénéficiant d'un contrat PREMIUM ont d'ailleurs une priorité d'intervention garantie."
    },
    {
        question: "Recevons-nous un rapport ?",
        answer: "Absolument. Chaque intervention se conclut par la remise d'un rapport PDF détaillé incluant les actions menées, l'état de l'installation et nos recommandations."
    },
    {
        question: "Quelle zone couvrez-vous ?",
        answer: "Nous couvrons l'ensemble de la région genevoise, ainsi que le canton de Vaud jusqu'à Lausanne, pour garantir une réactivité maximale."
    },
    {
        question: "Peut-on commencer par un audit ?",
        answer: "Tout à fait. Avant de souscrire un contrat, nous pouvons réaliser un audit technique complet de vos installations pour déterminer le niveau de maintenance nécessaire."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-primary text-white">
            <div className="container mx-auto px-6 md:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-surface font-mono tracking-widest uppercase mb-4 block">
                        /// Vos questions
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight mb-8">
                        Foire Aux <span className="text-surface">Questions.</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 bg-white/5 overflow-hidden">
                            <button
                                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-bold text-base md:text-lg uppercase tracking-wide pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={`shrink-0 transition-transform duration-300 text-surface ${openIndex === index ? "rotate-180" : ""}`}
                                    size={24}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6 text-white/70 font-light leading-relaxed border-t border-white/5 pt-4"
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
