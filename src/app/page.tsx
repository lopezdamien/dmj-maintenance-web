import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Avantages from "@/components/Avantages";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Users, HelpCircle, Mail, Wrench } from "lucide-react";

const ctaLinks = [
    {
        icon: Wrench,
        label: "Comment nous travaillons",
        description: "Qui nous sommes, notre process en 5 étapes et nos certifications.",
        href: "/comment-nous-travaillons",
    },
    {
        icon: Users,
        label: "Nos clients",
        description: "Régies, hôtellerie, restauration, retail, industrie — découvrez nos références.",
        href: "/nos-clients",
    },
    {
        icon: HelpCircle,
        label: "FAQ",
        description: "Pourquoi entretenir ses gaines ? Quelles obligations légales en Suisse ?",
        href: "/faq",
    },
    {
        icon: Mail,
        label: "Contact",
        description: "Demandez un devis ou planifiez une visite technique.",
        href: "/contact",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <Avantages />

            {/* Navigation CTA strip */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ctaLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="group bg-white border border-gray-200 p-8 hover:border-primary hover:shadow-lg transition-all flex flex-col gap-5"
                            >
                                <div className="w-12 h-12 bg-gray-50 group-hover:bg-primary/10 border border-gray-100 group-hover:border-primary/20 flex items-center justify-center transition-colors">
                                    <item.icon className="text-primary" size={22} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-black text-primary uppercase tracking-tight text-lg mb-2">
                                        {item.label}
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">
                                    <span>Découvrir</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
