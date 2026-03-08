import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import Offres from "@/components/Offres";
import ServicesInclus from "@/components/ServicesInclus";

export const metadata: Metadata = {
    title: "Contrats de Maintenance | DMJ Maintenance",
    description: "Nos contrats de maintenance CVC : Essentiel, Pro, Premium. Visites planifiées, nettoyage, remplacement de filtres et rapports techniques.",
};

export default function ContratsPage() {
    return (
        <main>
            <Header />
            <section className="pt-40 pb-8 md:pt-48">
                <div className="container mx-auto px-6 md:px-8">
                    <SectionHeader
                        subtitle="Maintenance planifiée"
                        title={<>Nos Contrats<br />de Maintenance</>}
                        description="Des formules adaptées à chaque type d'installation. Visites régulières, rapports détaillés et suivi technique inclus."
                    />
                </div>
            </section>
            <Offres />
            <ServicesInclus />
            <Footer />
        </main>
    );
}
