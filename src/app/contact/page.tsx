import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
    title: "Contact & Devis | DMJ Maintenance",
    description: "Demandez un devis gratuit, planifiez une visite ou signalez une urgence. Disponibles 24/7 au +41 22 755 22 55.",
};

export default function ContactPage() {
    return (
        <main>
            <Header />
            <section className="pt-40 pb-8 md:pt-48">
                <div className="container mx-auto px-6 md:px-8">
                    <SectionHeader
                        subtitle="Contactez-nous"
                        title={<>Prenons<br />contact.</>}
                        description="Devis gratuit sous 24h. Pour les urgences, notre équipe est disponible 24h/24, 7j/7."
                    />
                </div>
            </section>
            <Contact />
            <Footer />
        </main>
    );
}
