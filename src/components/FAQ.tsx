"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Pourquoi suis-je obligé d'entretenir mes gaines de ventilation ?",
        answer: "En Suisse, l'entretien des installations de ventilation et de climatisation est une obligation légale. Le Règlement sur les économies d'énergie (RSEE) impose des contrôles périodiques des installations thermiques et aérauliques. Les cantons appliquent ces exigences via leurs services de l'énergie. En cas de non-conformité, l'exploitant est directement responsable."
    },
    {
        question: "Quelles normes légales s'appliquent en Suisse ?",
        answer: "Plusieurs réglementations encadrent l'entretien des systèmes CVC : le RSEE (Règlement sur les économies d'énergie), l'OCOSP (Ordonnance sur la sécurité des installations), les directives cantonales genevois (LDTR, MCE), ainsi que les normes techniques SWKI (ex. SWKI VA104-01 pour les gaines d'air). Les exigences varient selon le type de bâtiment et l'usage."
    },
    {
        question: "À quelle fréquence dois-je faire entretenir mes installations ?",
        answer: "La fréquence dépend de l'usage et du type d'installation. Pour la restauration professionnelle, un entretien tous les 3 à 6 mois est généralement requis. Pour les immeubles d'habitation, bureaux ou commerces, 1 à 2 visites par an suffisent dans la plupart des cas. Nous réalisons un audit initial pour déterminer la fréquence adaptée à votre situation."
    },
    {
        question: "Que risque-t-on en cas de non-conformité ?",
        answer: "Le non-respect des obligations d'entretien expose à plusieurs risques : amendes administratives de la part des autorités cantonales, mise en demeure d'exploiter, responsabilité civile en cas d'incendie ou d'accident lié à l'installation, refus de couverture par l'assurance, et dans les établissements accueillant du public, suspension de l'autorisation d'exploitation."
    },
    {
        question: "Qui est responsable : le propriétaire ou l'exploitant ?",
        answer: "La responsabilité dépend des dispositions contractuelles entre propriétaire et locataire/exploitant. En règle générale, le propriétaire est responsable du bon état de l'installation, tandis que l'exploitant (restaurant, commerce) est responsable de l'entretien courant lié à son activité. En cas de doute, nous vous recommandons de formaliser cette répartition dans le bail."
    },
    {
        question: "Que contient un rapport de maintenance ?",
        answer: "Chaque intervention donne lieu à un rapport PDF complet incluant : l'état visuel et technique des gaines, filtres et équipements, les mesures de débit réalisées, les actions effectuées (nettoyage, remplacement, réglage), les anomalies constatées et les recommandations, ainsi qu'un récapitulatif daté et signé conforme aux exigences réglementaires."
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
