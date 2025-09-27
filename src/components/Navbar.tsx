import { Menu, X, ChevronDown, Download } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Ziarat = '/Ziaratnewlogo1.png';

type PageType = 'home' | 'about' | 'services' | 'contact' | `workshops/${string}`;


interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showWorkshopsDropdown, setShowWorkshopsDropdown] = useState(false);

  const navItems = [
    { label: "Home", page: 'home' as PageType },
    { label: "About Us", page: 'about' as PageType },
    { label: "Services", page: 'services' as PageType },
    { label: "Contact", page: 'contact' as PageType },
  ];

  const workshopTypes = [
    "AI for Beginners",
    "Design Thinking",
    "Web Development Bootcamp",
    "Startup & Innovation",
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setShowWorkshopsDropdown(false);
  };

  const isActive = (page: PageType) => currentPage === page;
const isWorkshopsActive = currentPage.startsWith?.('workshops');


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <img src={Ziarat} alt="Ziarat Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`transition-all duration-300 font-medium text-[15px] relative group py-2 ${
                  isActive(item.page)
                    ? 'text-mindlab-red font-bold'
                    : 'text-mindlab-black/80 hover:text-mindlab-red'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-mindlab-red transition-all duration-300 rounded-full ${
                  isActive(item.page)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}

            {/* Workshops dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowWorkshopsDropdown(true)}
              onMouseLeave={() => setShowWorkshopsDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 font-medium text-[15px] py-2 transition-all duration-300 ${
                  isWorkshopsActive ? 'text-mindlab-red font-bold' : 'text-mindlab-black/80 hover:text-mindlab-red'
                }`}
              >
                Workshops
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown content */}
              {showWorkshopsDropdown && (
                <div className="absolute top-full mt-1 bg-white border shadow-lg rounded-lg w-56 py-2 z-50">
                  {workshopTypes.map((type) => (
                  <Link to='/contact' 
                      key={type}
                  
                  >
                  <button
                      onClick={() => {
                        // onNavigate(`workshops/${type.toLowerCase().replace(/\s+/g, '-')}`);
                        
                       
                        setIsMobileMenuOpen(false);
                        setShowWorkshopsDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-mindlab-black"
                    >
                      {type}
                    </button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
                  <Link to="/contact">

            <button className="btn-navbar-modern group hidden sm:flex items-center gap-2">
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Download Brochure</span>
            </button>
            </Link>
            <button
              className="lg:hidden p-2 text-mindlab-black hover:text-mindlab-red transition-colors duration-300 hover:bg-mindlab-red/5 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="bg-white border-t border-gray-100 shadow-lg">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.page)}
                    className={`text-left transition-colors duration-300 font-medium py-3 text-lg border-b border-gray-100 last:border-b-0 ${
                      isActive(item.page)
                        ? 'text-mindlab-red font-bold'
                        : 'text-mindlab-black hover:text-mindlab-red'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                {/* Workshops Mobile Dropdown */}
                <div>
                  <p className="font-semibold text-mindlab-black pb-2">Workshops</p>
                  {workshopTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => handleNavClick(`workshops/${type.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-mindlab-black"
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Link to="/contact">
                    <button className="btn-primary-modern w-full flex items-center justify-center gap-3">
                      <Download className="w-4 h-4" />
                      <span>Download Brochure</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
