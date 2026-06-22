import { authorInfo, navLinks, contactInfo } from "../data";

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-[#090A0F] border-t border-[#C89B3C]/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Stripe Payment Button */}
        <div className="mb-16 flex justify-center">
          <a
            href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-gradient-to-r from-[#C89B3C] via-[#E8C55A] to-[#C89B3C]
              text-[#090A0F] text-xl md:text-2xl font-cinzel font-bold py-6 px-12 md:py-8 md:px-20 rounded-full
              shadow-2xl shadow-[#C89B3C]/20
              transform transition-all duration-300
              hover:scale-105 hover:shadow-[#C89B3C]/40
              animate-pulse tracking-wider uppercase
            "
          >
            Launch & Go-Live Portal
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-cinzel text-xl text-[#C89B3C] font-bold mb-2">
              {authorInfo.name}
            </h3>
            <p className="text-[#C89B3C]/50 font-cormorant italic text-sm mb-4">
              {authorInfo.honorific}
            </p>
            <p className="text-[#8A7E5E] font-lora text-sm leading-relaxed mb-4">
              Dark Fantasy • Mysticism • Ancient Knowledge. Stories beyond
              reality, crafted for those who seek the arcane.
            </p>
            <p className="text-[#C89B3C]/30 font-cormorant italic text-xs">
              Eleventh Lord of Thornbury
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-[#8A7E5E] hover:text-[#C89B3C] transition-colors font-cormorant text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#C89B3C]/0 group-hover:bg-[#C89B3C] rounded-full transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-[#8A7E5E] hover:text-[#D1C8A3] transition-colors font-lora text-sm"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-[#8A7E5E] hover:text-[#D1C8A3] transition-colors font-lora text-sm"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C89B3C]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8A7E5E]/40 font-lora text-xs">
            &copy; {new Date().getFullYear()} Dr. William Baker MBE. All rights
            reserved.
          </p>
          <p className="text-[#8A7E5E]/20 font-cormorant italic text-xs">
            The Arcane Chronicle
          </p>
        </div>
      </div>
    </footer>
  );
}
