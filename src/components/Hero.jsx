import { authorInfo } from "../data";

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#090A0F]"
    >
      {/* Mystical forest background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#090A0F] via-transparent to-[#090A0F] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0F]/20 via-transparent to-[#090A0F]/20 z-10"></div>
        <img
          src="/images/bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full pointer-events-none z-[5]"
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: Math.random() > 0.5 ? "#C89B3C" : "#D1C8A3",
            opacity: 0,
            animation: `floatUp ${8 + Math.random() * 12}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 10}s`,
            boxShadow: "0 0 6px rgba(200,155,60,0.4)",
          }}
        ></div>
      ))}

      {/* Subtle rotating rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#C89B3C]/5 rounded-full animate-subtle-rotate pointer-events-none z-[2]"></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#C89B3C]/4 rounded-full animate-subtle-rotate pointer-events-none z-[2]"
        style={{ animationDirection: "reverse", animationDuration: "45s" }}
      ></div>

      {/* Moon glow */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-[#C89B3C]/5 rounded-full blur-3xl animate-glow-pulse pointer-events-none z-[2]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full text-center">
        <div className="max-w-4xl mx-auto">
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-up">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C89B3C]/40"></div>
            <span className="text-[#C89B3C]/50 font-cinzel text-xs tracking-[0.3em] uppercase">
              The Arcane Chronicle
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C89B3C]/40"></div>
          </div>

          {/* Author Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinzel text-gold-gradient mb-4 leading-tight animate-fade-up tracking-wider font-bold">
            {authorInfo.name}
          </h1>

          <p className="text-lg md:text-xl text-[#C89B3C]/70 font-cormorant italic tracking-wider mb-2 animate-fade-up-delayed">
            {authorInfo.honorific}
          </p>

          <p className="text-sm text-[#8A7E5E] font-lora tracking-wide mb-10 animate-fade-up-delayed">
            {authorInfo.titles}
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-10 animate-fade-up-delayed">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C89B3C]"></div>
            <div className="w-2 h-2 bg-[#C89B3C] rounded-full"></div>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C89B3C]"></div>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-[#D1C8A3] mb-4 font-cormorant italic animate-fade-up-delayed leading-relaxed">
            "{authorInfo.tagline}"
          </p>
          <p className="text-lg text-[#8A7E5E] font-lora italic mb-12 animate-fade-up-delayed-2">
            {authorInfo.heroQuote}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delayed-2">
            <a
              href="#books"
              onClick={(e) => handleScroll(e, "#books")}
              className="px-10 py-4 border border-[#C89B3C]/40 text-[#C89B3C] font-cinzel font-bold hover:border-[#C89B3C] hover:bg-[#C89B3C]/5 transition-all duration-300 tracking-wider uppercase text-sm hover-lift"
            >
              Enter the Library
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="px-10 py-4 text-[#090A0F] bg-gradient-to-r from-[#C89B3C] to-[#E8C55A] font-cinzel font-bold hover:from-[#E8C55A] hover:to-[#C89B3C] transition-all duration-300 tracking-wider uppercase text-sm hover-lift"
            >
              About the Author
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
