import { useState } from "react";
import { contactInfo, authorInfo } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#101812] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C89B3C]/2 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-3 border border-[#C89B3C]/20 bg-[#090A0F]/50 backdrop-blur-sm text-[#C89B3C] px-5 py-2.5 mb-6 text-xs font-cinzel font-bold tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 bg-[#C89B3C] rounded-full"></span>
            Contact
          </div>
          <h2 className="text-5xl md:text-6xl font-cinzel text-gold-gradient mb-4 tracking-wider font-bold">
            Send a Raven
          </h2>
          <p className="text-[#8A7E5E] font-cormorant italic">
            For inquiries, speaking engagements, or to reach Dr. Baker directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-up">
            <div className="bg-[#090A0F]/60 backdrop-blur-sm p-8 rounded-xl border border-[#C89B3C]/10 hover:border-[#C89B3C]/30 transition-all duration-500">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 bg-[#C89B3C]/10 border border-[#C89B3C]/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#C89B3C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-[#D1C8A3] hover:text-[#E8C55A] transition-colors font-lora text-sm"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[#C89B3C]/10 border border-[#C89B3C]/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#C89B3C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-[#D1C8A3] hover:text-[#E8C55A] transition-colors font-lora text-sm"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#090A0F]/60 backdrop-blur-sm p-8 rounded-xl border border-[#C89B3C]/10">
              <h3 className="text-[#C89B3C] font-cinzel font-bold text-lg mb-4">
                Literary Inquiries
              </h3>
              <p className="text-[#8A7E5E] font-lora text-sm leading-relaxed">
                Dr. Baker is available for literary events, academic lectures,
                and select interviews. Direct all correspondence to the email
                above.
              </p>
            </div>
          </div>

          <div className="animate-fade-up-delayed">
            <div className="bg-[#090A0F]/60 backdrop-blur-sm p-8 rounded-xl border border-[#C89B3C]/10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#C89B3C]/20 to-[#E8C55A]/20 border border-[#C89B3C]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-[#C89B3C]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[#C89B3C] font-cinzel font-bold text-xl mb-2">
                    Message Dispatched
                  </h3>
                  <p className="text-[#8A7E5E] font-lora text-sm">
                    Your raven is in flight. A response shall follow.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#090A0F] border border-[#C89B3C]/15 text-[#D1C8A3] font-lora text-sm px-5 py-3.5 focus:border-[#C89B3C] focus:outline-none transition-all placeholder:text-[#8A7E5E]/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#090A0F] border border-[#C89B3C]/15 text-[#D1C8A3] font-lora text-sm px-5 py-3.5 focus:border-[#C89B3C] focus:outline-none transition-all placeholder:text-[#8A7E5E]/30"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-[#C89B3C] font-cinzel font-bold text-xs tracking-wider uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-[#090A0F] border border-[#C89B3C]/15 text-[#D1C8A3] font-lora text-sm px-5 py-3.5 focus:border-[#C89B3C] focus:outline-none transition-all resize-none placeholder:text-[#8A7E5E]/30"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#C89B3C] to-[#E8C55A] text-[#090A0F] font-cinzel font-bold text-sm tracking-wider uppercase hover:from-[#E8C55A] hover:to-[#C89B3C] transition-all duration-300 hover-lift"
                  >
                    Dispatch Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
