import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import Interventions from "@/components/Interventions";

export const metadata: Metadata = {
    title: "Types d'Interventions | DMJ Maintenance",
    description: "Dépannage ventilation, remplacement moteur et filtres, nettoyage réseaux, réglage débits, remise en conformité. Intervention rapide en région genevoise.",
};

export default function InterventionsPage() {
    return (
        <main>
            <Header />
            <section className="pt-40 pb-8 md:pt-48">
                <div className="container mx-auto px-6 md:px-8">
                    <SectionHeader
                        subtitle="Nos actions terrain"
                        title={<>Types<br />d'Interventions</>}
                        description="Dépannage, remplacement, nettoyage, remise en conformité — nos techniciens interviennent sur l'ensemble de vos équipements CVC."
                    />
                </div>
            </section>
            <Interventions />
            <Footer />
        </main>
    );
}
