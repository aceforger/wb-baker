import { useState } from "react";
import { books } from "../data";

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(null);

  // Separate the latest novel from the rest
  const latestNovel = books.find((book) => book.status === "Latest Novel");
  const otherBooks = books.filter((book) => book.status !== "Latest Novel");

  return (
    <section id="books" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg3.png"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#090A0F]/65"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#090A0F] via-transparent to-[#090A0F]"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/30 to-transparent z-[1]"></div>
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#C89B3C]/2 rounded-full blur-3xl pointer-events-none z-[1]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-3 border border-[#C89B3C]/20 bg-[#101812]/50 backdrop-blur-sm text-[#C89B3C] px-5 py-2.5 mb-6 text-xs font-cinzel font-bold tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 bg-[#C89B3C] rounded-full"></span>
            The Archive
          </div>
          <h2 className="text-5xl md:text-6xl font-cinzel text-gold-gradient mb-4 tracking-wider font-bold">
            The Collection
          </h2>
          <p className="text-[#8A7E5E] font-cormorant italic text-lg">
            A forgotten library where ancient stories wait to be discovered
          </p>
        </div>

        {/* ========== FEATURED BOOK — LATEST NOVEL ========== */}
        {latestNovel && (
          <div className="mb-24 animate-fade-up-delayed">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 border border-[#C89B3C]/30 bg-[#C89B3C]/5 backdrop-blur-sm text-[#C89B3C] px-4 py-1.5 mb-4 text-xs font-cinzel font-bold tracking-[0.2em] uppercase rounded-full">
                <span className="w-1.5 h-1.5 bg-[#C89B3C] rounded-full animate-pulse"></span>
                Featured Book
              </div>
              <h3 className="text-3xl md:text-4xl font-cinzel text-[#D1C8A3] tracking-wider font-bold">
                Latest Novel
              </h3>
            </div>

            <div className="max-w-5xl mx-auto">
              <div
                className="bg-[#101812]/60 backdrop-blur-sm border border-[#C89B3C]/20 hover:border-[#C89B3C]/40 transition-all duration-500 overflow-hidden cursor-pointer hover-lift animate-glow-pulse group rounded-xl"
                onClick={() => setSelectedBook(latestNovel)}
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Cover */}
                  <div className="md:col-span-2 bg-gradient-to-br from-[#090A0F] via-[#090A0F] to-[#101812] p-10 flex items-center justify-center relative">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-[#C89B3C] to-[#E8C55A] text-[#090A0F] text-[10px] font-cinzel font-bold tracking-wider uppercase rounded-full shadow-lg shadow-[#C89B3C]/20">
                        {latestNovel.status}
                      </span>
                    </div>
                    <div className="relative w-52 h-72 rounded-lg overflow-hidden shadow-2xl border border-[#C89B3C]/20 group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={latestNovel.coverImage}
                        alt={latestNovel.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          const fallback =
                            e.target.parentElement.querySelector(
                              ".featured-fallback",
                            );
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div
                        className="featured-fallback absolute inset-0 bg-gradient-to-br from-[#090A0F] to-[#101812] border-2 border-[#C89B3C]/30 flex items-center justify-center"
                        style={{ display: "none" }}
                      >
                        <div className="text-center">
                          <span className="text-5xl font-cinzel text-gold-gradient font-bold">
                            WB
                          </span>
                          <div className="w-10 h-[1px] bg-[#C89B3C]/30 mx-auto mt-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-3 p-10 flex flex-col justify-center">
                    {latestNovel.subtitle && (
                      <p className="text-[#C89B3C]/60 text-xs font-cormorant italic tracking-wider uppercase mb-2">
                        {latestNovel.subtitle}
                      </p>
                    )}
                    <h3 className="text-3xl md:text-4xl font-cinzel text-[#D1C8A3] font-bold mb-3 group-hover:text-[#C89B3C] transition-colors duration-300">
                      {latestNovel.title}
                    </h3>
                    <div className="w-16 h-[1px] bg-gradient-to-r from-[#C89B3C] to-transparent mb-5"></div>
                    <p className="text-[#8A7E5E] font-lora text-sm leading-relaxed mb-3">
                      {latestNovel.description}
                    </p>
                    <p className="text-[#8A7E5E]/70 font-lora text-xs leading-relaxed mb-6 border-l-2 border-[#C89B3C]/20 pl-4 italic">
                      {latestNovel.description2}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {latestNovel.themes.map((theme, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-[#090A0F] text-[#C89B3C]/70 text-xs font-cinzel font-bold tracking-wider uppercase border border-[#C89B3C]/10 rounded-full"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button className="px-8 py-3 border border-[#C89B3C]/30 text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase hover:border-[#C89B3C] hover:bg-[#C89B3C]/5 transition-all duration-300 rounded-lg group/btn">
                        <span className="flex items-center gap-2">
                          View Details
                          <svg
                            className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== MORE WORKS ========== */}
        <div className="animate-fade-up-delayed-2">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C89B3C]/30"></div>
              <span className="text-[#C89B3C]/50 font-cinzel text-xs tracking-[0.3em] uppercase">
                Continue Exploring
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C89B3C]/30"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-cinzel text-[#D1C8A3] tracking-wider font-bold">
              More Works
            </h3>
            <p className="text-[#8A7E5E] font-cormorant italic text-sm mt-2">
              Delve deeper into the worlds of W.B. Baker
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {otherBooks.map((book, i) => (
              <div
                key={book.id}
                className="group animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="bg-[#101812]/60 backdrop-blur-sm border border-[#C89B3C]/10 hover:border-[#C89B3C]/30 transition-all duration-500 h-full flex flex-col overflow-hidden cursor-pointer hover-lift rounded-xl"
                  onClick={() => setSelectedBook(book)}
                >
                  {/* Cover Area */}
                  <div className="p-6 flex items-center justify-center bg-gradient-to-b from-[#090A0F] via-[#090A0F]/80 to-transparent relative min-h-[280px]">
                    <div className="relative w-40 h-56 rounded-lg overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-500 border border-[#C89B3C]/10">
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          const fallback =
                            e.target.parentElement.querySelector(
                              ".grid-fallback",
                            );
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div
                        className="grid-fallback absolute inset-0 bg-gradient-to-br from-[#090A0F] to-[#101812] border-2 border-[#C89B3C]/20 group-hover:border-[#C89B3C]/40 flex items-center justify-center transition-all duration-500"
                        style={{ display: "none" }}
                      >
                        <div className="text-center">
                          <span className="text-3xl font-cinzel text-gold-gradient font-bold">
                            WB
                          </span>
                          <div className="w-6 h-[1px] bg-[#C89B3C]/30 mx-auto mt-2"></div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-cinzel text-[#D1C8A3] mb-1 group-hover:text-[#C89B3C] transition-colors duration-300 font-bold line-clamp-1">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="text-[#C89B3C]/60 text-[10px] font-cormorant italic tracking-wider uppercase mb-2 line-clamp-1">
                        {book.subtitle}
                      </p>
                    )}
                    <p className="text-[#8A7E5E] text-xs font-lora leading-relaxed mb-4 flex-1 line-clamp-3">
                      {book.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {book.themes.slice(0, 2).map((theme, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-[#090A0F] text-[#C89B3C]/60 text-[9px] font-cinzel font-bold tracking-wider uppercase border border-[#C89B3C]/10 rounded-full"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>

                    <button className="w-full py-3 border border-[#C89B3C]/20 text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase hover:border-[#C89B3C] hover:bg-[#C89B3C]/5 transition-all duration-300 rounded-lg group/btn">
                      <span className="flex items-center justify-center gap-2">
                        Discover
                        <svg
                          className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== MODAL ========== */}
      {selectedBook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090A0F]/90 backdrop-blur-md"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="bg-[#101812] max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-[#C89B3C]/20 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-[#C89B3C]/10 sticky top-0 bg-[#101812]/95 backdrop-blur-xl z-10 rounded-t-xl">
              <span className="px-3 py-1.5 bg-gradient-to-r from-[#C89B3C] to-[#E8C55A] text-[#090A0F] text-[10px] font-cinzel font-bold tracking-wider uppercase rounded-full">
                {selectedBook.status || "Available"}
              </span>
              <button
                onClick={() => setSelectedBook(null)}
                className="text-[#8A7E5E] hover:text-[#D1C8A3] transition-colors p-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 flex justify-center">
                  <div className="relative w-48 h-72 rounded-lg overflow-hidden shadow-2xl border border-[#C89B3C]/20">
                    <img
                      src={selectedBook.coverImage}
                      alt={selectedBook.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        const fallback =
                          e.target.parentElement.querySelector(
                            ".modal-fallback",
                          );
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    <div
                      className="modal-fallback absolute inset-0 bg-gradient-to-br from-[#090A0F] to-[#101812] border-2 border-[#C89B3C]/30 flex items-center justify-center"
                      style={{ display: "none" }}
                    >
                      <div className="text-center">
                        <span className="text-5xl font-cinzel text-gold-gradient font-bold">
                          WB
                        </span>
                        <div className="w-12 h-[1px] bg-[#C89B3C]/30 mx-auto mt-3"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-5 min-w-0">
                  <div>
                    {selectedBook.subtitle && (
                      <p className="text-[#C89B3C]/70 text-xs font-cormorant italic tracking-wider uppercase mb-2">
                        {selectedBook.subtitle}
                      </p>
                    )}
                    <h2 className="text-3xl font-cinzel text-[#D1C8A3] font-bold">
                      {selectedBook.title}
                    </h2>
                    <div className="w-16 h-[1px] bg-gradient-to-r from-[#C89B3C] to-transparent mt-4"></div>
                  </div>
                  <p className="text-[#D1C8A3]/80 leading-relaxed font-lora text-sm">
                    {selectedBook.description}
                  </p>
                  {selectedBook.description2 && (
                    <div className="bg-[#090A0F]/50 backdrop-blur-sm p-4 rounded-xl border-l-2 border-[#C89B3C]">
                      <p className="text-[#D1C8A3]/60 leading-relaxed font-lora text-xs italic">
                        {selectedBook.description2}
                      </p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {selectedBook.themes.map((theme, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#090A0F] text-[#C89B3C]/70 text-xs font-cinzel font-bold tracking-wider uppercase border border-[#C89B3C]/10 rounded-full"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                  {selectedBook.purchaseLinks && (
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-[#C89B3C]/10">
                      {selectedBook.purchaseLinks.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-gradient-to-r from-[#C89B3C] to-[#E8C55A] text-[#090A0F] font-cinzel font-bold text-sm tracking-wider uppercase hover:from-[#E8C55A] hover:to-[#C89B3C] transition-all duration-300 rounded-lg hover-lift shadow-lg shadow-[#C89B3C]/20"
                        >
                          Buy on {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
