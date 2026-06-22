import { authorInfo } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg2.png"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#101812]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#101812] via-transparent to-[#101812]"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/30 to-transparent z-[1]"></div>
      <div className="absolute top-20 right-10 w-60 h-60 bg-[#C89B3C]/3 rounded-full blur-3xl pointer-events-none z-[1]"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#C89B3C]/2 rounded-full blur-3xl pointer-events-none z-[1]"></div>

      {/* Floating Leaves */}
      {[...Array(15)].map((_, i) => {
        const leaves = ["✦", " ࣪", "˖", "⊹"];
        const leaf = leaves[Math.floor(Math.random() * leaves.length)];
        return (
          <div
            key={`about-leaf-${i}`}
            className="absolute pointer-events-none z-[5] select-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 22}px`,
              opacity: 0,
              animation: `leafDrift ${10 + Math.random() * 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 12}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {leaf}
          </div>
        );
      })}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-3 border border-[#C89B3C]/20 bg-[#090A0F]/50 backdrop-blur-sm text-[#C89B3C] px-5 py-2.5 mb-6 text-xs font-cinzel font-bold tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 bg-[#C89B3C] rounded-full"></span>
            The Author
          </div>
          <h2 className="text-5xl md:text-6xl font-cinzel text-gold-gradient mb-4 tracking-wider font-bold">
            {authorInfo.fullName}
          </h2>
          <p className="text-[#C89B3C]/70 font-cormorant italic text-lg">
            {authorInfo.honorific} • {authorInfo.titles}
          </p>
        </div>

        {/* Author Photo + Intro */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16 animate-fade-up-delayed">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#C89B3C]/8 rounded-full blur-2xl"></div>
              <div className="absolute -inset-6 border border-[#C89B3C]/15 rounded-full"></div>
              <div className="relative w-66 h-66 md:w-74 md:h-74 rounded-full overflow-hidden border-2 border-[#C89B3C]/30 shadow-2xl">
                <img
                  src="/images/author.png"
                  alt={authorInfo.fullName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add(
                      "bg-gradient-to-br",
                      "from-[#090A0F]",
                      "to-[#101812]",
                      "flex",
                      "items-center",
                      "justify-center",
                    );
                    const fallback = document.createElement("div");
                    fallback.className = "text-center";
                    fallback.innerHTML = `
                      <span class="text-5xl font-cinzel text-gold-gradient font-bold">WB</span>
                      <div class="w-10 h-[1px] bg-[#C89B3C]/30 mx-auto mt-3"></div>
                    `;
                    e.target.parentElement.appendChild(fallback);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-[#8A7E5E] font-lora text-sm mb-4">
              Born {authorInfo.born}
            </p>
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#C89B3C] to-transparent mb-6 mx-auto md:mx-0"></div>
            <p className="text-[#D1C8A3] font-cormorant italic text-xl leading-relaxed">
              "Stage and film credits include performances in England, France,
              and Wales; with affiliations featuring BBC Radio Wales, The
              National Theatre of Wales, and numerous appearances on ABC, the
              BBC, CBS, NBC, 20th Century FOX, and films by Miramax Pictures,
              Orion Films, and Universal Pictures."
            </p>
          </div>
        </div>

        {/* Bio Cards — Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Academic Journey */}
          <div className="bg-[#090A0F]/60 backdrop-blur-sm p-6 rounded-xl border-l-2 border-[#C89B3C] animate-fade-up-delayed h-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#C89B3C]/10 border border-[#C89B3C]/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-[#C89B3C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase">
                Academic Journey
              </span>
            </div>
            <p className="text-[#D1C8A3] leading-relaxed font-lora text-sm">
              {authorInfo.bio1}
            </p>
          </div>

          {/* Stage & Screen */}
          <div
            className="bg-[#090A0F]/60 backdrop-blur-sm p-6 rounded-xl border-l-2 border-[#C89B3C]/60 animate-fade-up-delayed h-full"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#C89B3C]/10 border border-[#C89B3C]/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-[#C89B3C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
              </div>
              <span className="text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase">
                Stage & Screen
              </span>
            </div>
            <p className="text-[#D1C8A3] leading-relaxed font-lora text-sm">
              {authorInfo.bio2}
            </p>
          </div>

          {/* Publications */}
          <div
            className="bg-[#090A0F]/60 backdrop-blur-sm p-6 rounded-xl border-l-2 border-[#C89B3C]/40 animate-fade-up-delayed h-full"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#C89B3C]/10 border border-[#C89B3C]/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-[#C89B3C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase">
                Publications
              </span>
            </div>
            <p className="text-[#D1C8A3] leading-relaxed font-lora text-sm">
              {authorInfo.bio3}
            </p>
          </div>

          {/* Honours & Recognition */}
          <div
            className="bg-[#090A0F]/60 backdrop-blur-sm p-6 rounded-xl border-l-2 border-[#C89B3C]/20 animate-fade-up-delayed h-full"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#C89B3C]/10 border border-[#C89B3C]/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-[#C89B3C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <span className="text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase">
                Honours & Recognition
              </span>
            </div>
            <p className="text-[#D1C8A3] leading-relaxed font-lora text-sm">
              {authorInfo.bio4}
            </p>
          </div>

          {/* Nobility & Titles — spans full width */}
          <div
            className="bg-[#090A0F]/60 backdrop-blur-sm p-6 rounded-xl border-l-2 border-[#C89B3C]/10 animate-fade-up-delayed md:col-span-2"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#C89B3C]/10 border border-[#C89B3C]/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-[#C89B3C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <span className="text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase">
                Nobility & Titles
              </span>
            </div>
            <p className="text-[#D1C8A3] leading-relaxed font-lora text-sm">
              {authorInfo.bio5}
            </p>
          </div>
        </div>

        {/* Honors Grid */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-up-delayed-2">
          <h3 className="text-2xl font-cinzel text-[#C89B3C] mb-8 text-center font-bold tracking-wider">
            Honours &amp; Distinctions
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {authorInfo.honors.map((honor, i) => (
              <div
                key={i}
                className="bg-[#090A0F]/40 backdrop-blur-sm p-4 rounded-lg border border-[#C89B3C]/10 flex items-start gap-3 hover:border-[#C89B3C]/30 transition-all duration-300"
              >
                <span className="text-[#C89B3C] mt-1 flex-shrink-0">◆</span>
                <p className="text-[#D1C8A3]/80 font-lora text-sm">{honor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
