import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustryPartnersSection from "@/components/IndustryPartnersSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="pt-16">
        <HeroSection />
      </section>
      
      {/* About Section */}
      <section id="about" className="pt-16">
        <AboutSection />
      </section>
      
      {/* Programs Section */}
      <section id="programs" className="pt-16">
        <ProgramsSection />
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="pt-16">
        <TestimonialsSection />
      </section>
      
      {/* Industry Partners Section */}
      <section id="partners" className="pt-16">
        <IndustryPartnersSection />
      </section>
      
      {/* Admissions Section */}
      <section id="contact" className="pt-16">
        <AdmissionsSection />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
