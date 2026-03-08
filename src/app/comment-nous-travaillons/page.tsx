import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import About from "@/components/About";
import Process from "@/components/Process";
import { ExternalLink, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Comment nous travaillons | DMJ Maintenance",
    description: "Découvrez qui nous sommes, notre process en 5 étapes et les normes qui encadrent notre travail.",
};

const certifications = [
    { code: "RSEE", label: "Règlement sur les économies d'énergie", description: "Obligations cantonales d'entretien des installations thermiques et aérauliques." },
    { code: "OCOSP", label: "Ordonnance sur la sécurité des installations", description: "Exigences fédérales de contrôle périodique des équipements CVC." },
    { code: "SUVA", label: "Prévention accidents professionnels", description: "Interventions réalisées selon les prescriptions de sécurité au travail en vigueur." },
    { code: "SWKI", label: "Directives techniques CVCS", description: "Application des directives suisses pour la conception et l'exploitation des systèmes de ventilation." },
];

export default function CommentNousTravaillon() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="pt-40 pb-12 md:pt-48 md:pb-16 bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <SectionHeader
                        subtitle="Qui sommes-nous"
                        title={<>Comment nous<br />travaillons.</>}
                        description="Fondée il y a 30 ans, DMJ Maintenance applique des méthodes rigoureuses encadrées par les normes suisses."
                    />
                </div>
            </section>

            <About />
            <Process />

            {/* Certifications & Normes */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="mb-16">
                        <span className="text-primary/60 font-mono tracking-widest uppercase text-sm block mb-4">
                            /// Cadre légal & normatif
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none text-primary">
                            Normes & Certifications
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                        {certifications.map((cert) => (
                            <div key={cert.code} className="flex gap-6 p-6 border border-gray-100 bg-gray-50 hover:border-primary transition-colors">
                                <div className="shrink-0">
                                    <ShieldCheck className="text-primary mt-1" size={24} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 tracking-widest uppercase">{cert.code}</span>
                                        <span className="font-bold text-secondary text-sm uppercase tracking-wide">{cert.label}</span>
                                    </div>
                                    <p className="text-gray-500 text-sm font-light leading-relaxed">{cert.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DMJ Ventilation */}
            <section className="py-24 bg-primary text-white border-t border-white/10">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-3xl">
                        <span className="font-mono tracking-widest uppercase text-sm block mb-4 text-white/60">
                            /// Notre entité sœur
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none mb-6">
                            DMJ Ventilation
                        </h2>
                        <p className="text-white/75 text-lg font-light leading-relaxed mb-10 max-w-2xl">
                            Pour la conception, l'étude et l'installation de nouveaux systèmes de ventilation et CVC, notre entité spécialisée DMJ Ventilation prend le relais. Même rigueur, même équipe — de l'installation à la maintenance.
                        </p>
                        <a
                            href="https://dmj-ventilation.ch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-surface text-primary font-bold uppercase tracking-widest hover:bg-white transition-all text-sm"
                        >
                            <span>Découvrir DMJ Ventilation</span>
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
