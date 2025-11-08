import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutTeam from "@/components/AboutTeam";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <AboutTeam />
        <AboutUs />
        <Services />
        <Contact />
      </main>
      <footer className="bg-navy text-cream py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} V Films. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
