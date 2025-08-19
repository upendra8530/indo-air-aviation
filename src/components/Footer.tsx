
import { Twitter, Facebook, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Indo Air Aviation Academy
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Leading aviation training institute empowering the next generation of aviation professionals. 
              Transform your passion for flight into a successful career with industry-relevant training and guaranteed job placement.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/indoairaviation" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300 group shadow-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/indoairaviation" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300 group shadow-lg">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/indoairaviation" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300 group shadow-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/indoairaviation" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300 group shadow-lg">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Programs</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 opacity-60"></div>
                <a href="#programs" className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Aviation Management</a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 opacity-60"></div>
                <a href="#programs" className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Cabin Crew Training</a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 opacity-60"></div>
                <a href="#programs" className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Ground Services</a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 opacity-60"></div>
                <a href="#programs" className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Pilot Training</a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 opacity-60"></div>
                <a href="#programs" className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Customer Service</a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 opacity-60"></div>
                <a href="#programs" className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Aviation Security</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white mb-1">Address</p>
                  <p className="text-sm leading-relaxed">1st floor, Sayaji Plaza, in front of Bhandari Hospital near Sayaji Hotel, 452001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white mb-1">Phone</p>
                  <a href="tel:+91-7727057928" className="text-sm hover:text-white transition-colors duration-300 hover:underline">
                    +91-7727057928
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white mb-1">Email</p>
                  <a href="mailto:info@indoairaviation.edu" className="text-sm hover:text-white transition-colors duration-300 hover:underline">
                    info@indoairaviation.edu
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white mb-1">Office Hours</p>
                  <div className="text-sm space-y-1">
                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: 10:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Indo Air Aviation Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-all duration-300 hover:translate-y-[-1px] animated-underline">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all duration-300 hover:translate-y-[-1px] animated-underline">Terms of Service</a>
            <a href="#" className="hover:text-white transition-all duration-300 hover:translate-y-[-1px] animated-underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
