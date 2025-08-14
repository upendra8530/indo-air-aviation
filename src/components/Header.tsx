import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu if open
      setIsMenuOpen(false);
      
      // Calculate offset for fixed header
      const headerHeight = 64; // 16 * 4 = 64px (h-16)
      const elementPosition = element.offsetTop - headerHeight;
      
      // Smooth scroll to section
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="Indo Air Aviation Academy Logo" className="w-[140px] object-contain rounded-lg" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-white transition-colors font-medium cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white transition-colors font-medium cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('programs')} 
              className="text-white transition-colors font-medium cursor-pointer"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-white transition-colors font-medium cursor-pointer"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white transition-colors font-medium cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-white" />
              <span>7727057928</span>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-white transition-colors font-medium py-2 text-left cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white transition-colors font-medium py-2 text-left cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('programs')} 
                className="text-white transition-colors font-medium py-2 text-left cursor-pointer"
              >
                Programs
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-white transition-colors font-medium py-2 text-left cursor-pointer"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white transition-colors font-medium py-2 text-left cursor-pointer"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center space-x-2 text-sm text-white mb-3">
                  <Phone className="w-4 h-4 text-white" />
                  <span className="text-white">7727057928</span>
                </div>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Enroll Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;