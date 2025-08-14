import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-aviation.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[105px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Aviation training students and aircraft" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Soar to New Heights with{" "}
          <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent drop-shadow-lg">Indo Air Aviation Academy</span>
        </h1>
        <p className="text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Premier aviation training institute empowering the next generation of pilots, cabin crew, 
          and aviation professionals. Transform your passion for flight into a successful career.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="btn-hero">
            Enroll Now
          </Button>
          <Button className="btn-secondary">
            Request Information
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 drop-shadow-lg">500+</div>
            <div className="text-white drop-shadow-md">Graduates Placed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 drop-shadow-lg">15+</div>
            <div className="text-white drop-shadow-md">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 drop-shadow-lg">95%</div>
            <div className="text-white drop-shadow-md">Job Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 drop-shadow-lg">50+</div>
            <div className="text-white drop-shadow-md">Industry Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;