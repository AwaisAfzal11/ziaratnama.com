import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Ziarat = '/Ziaratnewlogo1.png';

export function Footer() {
  const navigate = useNavigate();

  // helper function
  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={Ziarat}
                alt="Ziarat Logo"
                className='cursor-pointer'
                style={{ width: "180px", height: "auto", display: "block" }}
              />
            </Link>
            <p className="font-['Nunito_Sans'] text-gray-300 mb-6 leading-relaxed">
              Making sacred journeys convenient, organized, and memorable. 
              Your trusted partner for Hajj, Umrah, and Ziyarat services.
            </p>
            {/* <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="border-gray-400 text-gray-300 hover:bg-white hover:text-[#dc2626]">
                  <Facebook className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="border-gray-400 text-gray-300 hover:bg-white hover:text-[#dc2626]">
                  <Instagram className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="border-gray-400 text-gray-300 hover:bg-white hover:text-[#dc2626]">
                  <Twitter className="w-4 h-4" />
                </Button>
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <div className="space-y-3">
              <button onClick={() => handleNavigate('/')} className=" cursor-pointer  text-gray-300 hover:text-[#c7941e] transition-colors">Home</button>
              <button onClick={() => handleNavigate('/about')} className="block font-['Nunito_Sans'] cursor-pointer text-gray-300 hover:text-[#c7941e] transition-colors">About Us</button>
              <button onClick={() => handleNavigate('/destinations')} className="block font-['Nunito_Sans'] cursor-pointer text-gray-300 hover:text-[#c7941e] transition-colors">Destinations</button>
              <button onClick={() => handleNavigate('/packages')} className="block font-['Nunito_Sans'] cursor-pointer text-gray-300 hover:text-[#c7941e] transition-colors">Packages</button>
              <button onClick={() => handleNavigate('/contact')} className="block font-['Nunito_Sans'] cursor-pointer text-gray-300 hover:text-[#c7941e] transition-colors">Contact</button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-['Playfair_Display'] font-semibold text-lg mb-4">
              Our Services
            </h4>
            <div className="space-y-3">
              {['Hajj Packages','Umrah Packages','Iraq Ziyarat','Iran Ziyarat','Syria Ziyarat','Travelism Services'].map((service, i) => (
                <button 
                  key={i}
                  onClick={() => handleNavigate('/packages')}
                  className="block font-['Nunito_Sans'] cursor-pointer text-gray-300 hover:text-[#c7941e] transition-colors"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Playfair_Display'] font-semibold text-lg mb-4">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#c7941e] mt-1" />
                <div>
                  <p className="font-['Nunito_Sans'] text-gray-300">Call Us</p>
                  <p className="font-['Nunito_Sans'] font-semibold">0304-0008000</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#c7941e] mt-1" />
                <div>
                  <p className="font-['Nunito_Sans'] text-gray-300">Email</p>
                  <p className="font-['Nunito_Sans'] font-semibold">info@ziyaratnama.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#c7941e] mt-1" />
                <div>
                  <p className="font-['Nunito_Sans'] text-gray-300">Offices</p>
                  <p className="font-['Nunito_Sans'] font-semibold">Islamabad + Nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="bg-[#dc2626] text-white rounded-lg p-8 text-center shadow-2xl">
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-4">
              Ready to Begin Your Sacred Journey?
            </h3>
            <p className="font-['Nunito_Sans'] text-lg mb-6">
              Get in touch today and secure your spiritual pilgrimage with trusted hands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleNavigate('/packages')}
                className="bg-[#2c5530] text-white cursor-pointer hover:bg-[#1e3a1f] font-['Nunito_Sans'] font-semibold px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <ArrowRight className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleNavigate('/contact')}
                className="border-white text-[#dc2626]  cursor-pointer hover:bg-white hover:text-[#dc2626] font-['Nunito_Sans'] font-semibold px-8 transition-all duration-300">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p className="font-['Nunito_Sans'] text-gray-400">
            © 2025 Ziaratnama Travels (Pvt) Ltd. All rights reserved. | Licensed Travel Company
          </p>
        </div>
      </div>
    </footer>
  );
}
