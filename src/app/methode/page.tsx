import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import Process from "@/components/Process";

export const metadata: Metadata = {
    title: "Notre Méthode | DMJ Maintenance",
    description: "Notre processus en 5 étapes : audit technique, plan de maintenance, intervention, rapport détaillé et suivi continu. Une approche rigoureuse pour vos installations.",
};

export default function MethodePage() {
    return (
        <main>
            <Header />
            <section className="pt-40 pb-8 md:pt-48">
                <div className="container mx-auto px-6 md:px-8">
                    <SectionHeader
                        subtitle="Process & rigueur"
                        title={<>Notre<br />Méthode</>}
                        description="Chaque intervention suit un protocole précis en 5 étapes, de l'audit initial au suivi long terme. Rien n'est laissé au hasard."
                    />
                </div>
            </section>
            <Process />
            <Footer />
        </main>
    );
}
