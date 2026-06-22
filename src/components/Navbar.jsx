import { useState, useEffect } from "react";
import { navLinks, authorInfo } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#090A0F]/95 backdrop-blur-xl border-b border-[#C89B3C]/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <span className="font-cinzel text-xl md:text-2xl text-[#C89B3C] group-hover:text-[#E8C55A] transition-colors tracking-wider font-bold">
              {authorInfo.name}
            </span>
            <span className="hidden sm:block text-[#D1C8A3]/40 text-sm font-cormorant italic">
              {authorInfo.honorific}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-5 py-2 text-sm font-cormorant font-semibold transition-all tracking-wide uppercase ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#C89B3C]"
                    : "text-[#8A7E5E] hover:text-[#D1C8A3]"
                }`}
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && (
                  <span className="block w-1 h-1 bg-[#C89B3C] rounded-full mx-auto mt-1"></span>
                )}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#C89B3C]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-[#101812]/95 backdrop-blur-xl border border-[#C89B3C]/10 mt-2 p-5 rounded-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-5 py-3 font-cormorant font-semibold transition-colors rounded-lg ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#C89B3C] bg-[#C89B3C]/5 border-l-2 border-[#C89B3C]"
                    : "text-[#8A7E5E] hover:text-[#D1C8A3]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
