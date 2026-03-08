import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: "FAQ | DMJ Maintenance",
    description: "Pourquoi entretenir ses gaines ? Quelles obligations légales en Suisse ? Fréquences, responsabilités, rapports — toutes vos questions sur la maintenance CVC.",
};

export default function FAQPage() {
    return (
        <main>
            <Header />
            <section className="pt-40 pb-8 md:pt-48 bg-primary">
                <div className="container mx-auto px-6 md:px-8">
                    <SectionHeader
                        subtitle="Obligations légales & entretien"
                        title={<>Pourquoi entretenir<br />ses installations ?</>}
                        description="Les réponses aux questions essentielles sur les obligations légales de maintenance en Suisse."
                        dark
                    />
                </div>
            </section>
            <FAQ />
            <Footer />
        </main>
    );
}
