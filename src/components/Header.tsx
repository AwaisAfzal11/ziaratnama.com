import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link,  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const Ziarat = "/Ziaratnewlogo1.png";

export function Header() {
  const navigate = useNavigate();

  const languages: Language[] = [
    { code: "en", name: "English", flag: "https://flagcdn.com/w20/gb.png" },
    { code: "ur", name: "Urdu", flag: "https://flagcdn.com/w20/pk.png" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);
  const [translateCombo, setTranslateCombo] =
    useState<HTMLSelectElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigationItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/destinations", label: "Destinations" },
    { to: "/packages", label: "Packages" },
    { to: "/travelism", label: "Travelism" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    // Wait for Google Translate to inject the .goog-te-combo select
    const checkCombo = setInterval(() => {
      const combo =
        document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (combo) {
        setTranslateCombo(combo);
        clearInterval(checkCombo);
        console.log("✅ Google Translate ready");
      }
    }, 200);

    return () => clearInterval(checkCombo);
  }, []);

  const changeLanguage = (lang: Language) => {
    if (!translateCombo) {
      console.warn("⚠️ Google Translate not ready yet");
      return;
    }
    translateCombo.value = lang.code;
    translateCombo.dispatchEvent(new Event("change"));
    setSelectedLang(lang);
    setIsOpen(false);
  };

  // ✅ Scroll to top + navigate
  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false); // close mobile menu if open
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-lg border-b border-[#1a365d]/10">
      {/* Top contact bar */}
      <div className="bg-[#1a365d] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 hover:text-[#dc2626] transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">0304-0008000</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-[#dc2626] transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@ziyaratnama.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 hover:text-[#dc2626] transition-colors">
              <MapPin className="w-4 h-4" />
              <span>Islamabad + Nationwide Branches</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-[200px] overflow-hidden">
            <Link to="/" onClick={() => handleNavigate("/")}>
              <img
                src={Ziarat}
                className="cursor-pointer"
                alt="Ziarat Logo"
                style={{ width: "180px", height: "auto", display: "block" }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.to}
                onClick={() => handleNavigate(item.to)}
                className="relative font-['Nunito_Sans'] font-medium transition-all duration-300 text-[#1a1a1a] hover:text-[#dc2626]"
              >
                {item.label}
              </button>
            ))}

            {/* Language Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button className="flex items-center gap-2 cursor-pointer hover:text-[#03aeba] transition">
                <img
                  src={selectedLang.flag}
                  alt={selectedLang.name}
                  className="w-5 h-5"
                />
                <span>{selectedLang.name}</span>
                <MdOutlineKeyboardArrowDown />
              </button>

              {isOpen && (
                <div
                  className="absolute z-50 -left-2/3 md:left-0 pt-2 bg-white shadow-xl rounded-md p-3 animate-fadeIn"
                  style={{ width: "190px" }}
                >
                  <ul className="space-y-2">
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        onClick={() => changeLanguage(lang)}
                        className={`flex items-center gap-2 p-2  rounded cursor-pointer hover:bg-gray-100 ${
                          !translateCombo
                            ? "opacity-50 pointer-events-none"
                            : ""
                        }`}
                      >
                        <img
                          src={lang.flag}
                          alt={lang.name}
                          className="w-5 h-5"
                        />
                        <span className="text-gray-700">{lang.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div id="google_translate_element" className="hidden"></div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#dc2626]"
            >
              {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </Button>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => handleNavigate("/packages")}
              className="bg-[#dc2626] text-white hover:bg-[#b91c1c] cursor-pointer font-['Nunito_Sans'] font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Your Journey
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              {navigationItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => handleNavigate(item.to)}
                  className="text-left font-['Nunito_Sans'] font-medium transition-colors py-2 px-4 rounded-lg hover:text-[#dc2626] hover:bg-[#fffef7]"
                >
                  {item.label}
                </button>
              ))}

              {/* Language Dropdown (Mobile) */}
              <div className="mt-4 relative">
                <button
                  className="flex items-center gap-2 cursor-pointer hover:text-[#03aeba] transition"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img
                    src={selectedLang.flag}
                    alt={selectedLang.name}
                    className="w-5 h-5"
                  />
                  <span>{selectedLang.name}</span>
                  <MdOutlineKeyboardArrowDown />
                </button>

                {isOpen && (
                  <div className="absolute z-50 w-[200px] left-0 mt-2 bg-white shadow-xl rounded-md p-3">
                    <ul className="space-y-2">
                      {languages.map((lang) => (
                        <li
                          key={lang.code}
                          onClick={() => changeLanguage(lang)}
                          className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-100 ${
                            !translateCombo
                              ? "opacity-50 pointer-events-none"
                              : ""
                          }`}
                        >
                          <img
                            src={lang.flag}
                            alt={lang.name}
                            className="w-5 h-5"
                          />
                          <span className="text-gray-700">{lang.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div id="google_translate_element" className="hidden"></div>
              </div>

              {/* CTA Button Mobile */}
              <Button
                onClick={() => handleNavigate("/packages")}
                className="mt-4 bg-[#dc2626] text-white  hover:bg-[#b91c1c] font-['Nunito_Sans'] font-semibold"
              >
                Book Your Journey
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
