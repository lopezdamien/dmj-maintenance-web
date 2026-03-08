import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: "FAQ | DMJ Maintenance",
    description: "Fréquence de maintenance, tarifs, urgences 24/7, rapports d'intervention, zone géographique — toutes vos questions sur nos services de maintenance CVC.",
};

export default function FAQPage() {
    return (
        <main>
            <Header />
            <section className="pt-40 pb-8 md:pt-48 bg-primary">
                <div className="container mx-auto px-6 md:px-8">
                    <SectionHeader
                        subtitle="Questions fréquentes"
                        title={<>Foire Aux<br />Questions</>}
                        description="Tout ce que vous devez savoir sur nos contrats, interventions et modalités de service."
                        dark
                    />
                </div>
            </section>
            <FAQ />
            <Footer />
        </main>
    );
}
