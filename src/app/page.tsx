import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Avantages from "@/components/Avantages";
import About from "@/components/About";
import Services from "@/components/Services";
import Realisations from "@/components/Realisations";
import References from "@/components/References";
import SIGPartnership from "@/components/SIGPartnership";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <Avantages />
            <About />
            <Services />
            <Realisations />
            <References />
            <SIGPartnership />
            <Testimonials />

            {/* CTA Banner */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary uppercase leading-tight mb-6">
                        Besoin d'un entretien<br />ou d'une intervention ?
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto mb-10 font-light leading-relaxed">
                        Devis gratuit sous 24h. Pour les urgences, notre équipe est disponible 24h/24, 7j/7.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-secondary transition-all text-sm"
                        >
                            <span>Demander un devis</span>
                            <ArrowRight size={16} />
                        </Link>
                        <a
                            href="tel:+41227552255"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all text-sm"
                        >
                            <Phone size={16} />
                            <span>+41 22 755 22 55</span>
                        </a>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
