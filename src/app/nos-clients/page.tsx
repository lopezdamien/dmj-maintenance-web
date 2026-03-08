import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import References from "@/components/References";

export const metadata: Metadata = {
    title: "Nos clients | DMJ Maintenance",
    description: "Régies, hôtellerie, restauration, retail et industrie — découvrez les secteurs que nous accompagnons.",
};

export default function NosClients() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="pt-28 pb-10 md:pt-32 md:pb-14 bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <SectionHeader
                        subtitle="Références"
                        title={<>Nos clients</>}
                        description="Depuis plus de 30 ans, nous accompagnons les professionnels les plus exigeants de la région genevoise."
                    />
                </div>
            </section>

            <References />

            <Footer />
        </main>
    );
}
