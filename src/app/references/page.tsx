import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import References from "@/components/References";

export const metadata: Metadata = {
    title: "Références Clients | DMJ Maintenance",
    description: "Plus de 30 ans de confiance. Nous intervenons pour des régies, hôtels, restaurants, enseignes retail et industries en région genevoise et canton de Vaud.",
};

export default function ReferencesPage() {
    return (
        <main>
            <Header />
            <section className="pt-40 pb-8 md:pt-48">
                <div className="container mx-auto px-6 md:px-8">
                    <SectionHeader
                        subtitle="Ils nous font confiance"
                        title={<>Nos<br />Références</>}
                        description="Depuis plus de 30 ans, nous assurons la maintenance des installations CVC pour des clients exigeants en Suisse romande."
                    />
                </div>
            </section>
            <References />
            <Footer />
        </main>
    );
}
