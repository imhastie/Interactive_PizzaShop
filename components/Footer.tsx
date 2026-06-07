import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full" style={{ background: "#1a0a02" }}>
      {/* Main */}
      <div className="max-w-6xl mx-auto px-12 pt-10 pb-0">
        <div className="grid grid-cols-3 gap-16 pb-8 border-b border-[rgba(246,215,116,0.12)]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="
                w-11 h-11 rounded-full
                bg-[#7b3f16] border-2 border-[#f6d774]
                flex items-center justify-center
                text-xl
              "
              >
                🍕
              </div>
              <span className="text-[#fff4d0] font-black text-lg uppercase tracking-wide">
                PizzaCraft
              </span>
            </div>

            <p className="text-[rgba(255,244,208,0.4)] text-xs leading-relaxed max-w-[200px]">
              Craft your dream pizza, delivered hot to your door. Fresh
              ingredients, your way.
            </p>

            {/* Socials */}
            <div className="flex gap-2 mt-4">
              {[
                { icon: "📸", label: "Instagram" },
                { icon: "🎵", label: "TikTok" },
                { icon: "𝕏", label: "X" },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="
                    w-9 h-9 rounded-full
                    bg-[#fdf5b8] border-2 border-[#8b5a2b]
                    shadow-[0_3px_0_#8b5a2b]
                    flex items-center justify-center
                    text-sm
                    hover:-translate-y-0.5
                    transition-all cursor-pointer
                  "
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[#f6d774] text-[11px] font-black uppercase tracking-[0.18em] mb-4">
              Navigate
            </p>
            {[
              { label: "Home", href: "/" },
              { label: "Menu", href: "/menu" },
              { label: "Build Pizza", href: "/build" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="
                  block
                  text-[rgba(255,244,208,0.55)] text-xs font-bold uppercase tracking-wide
                  mb-2.5
                  hover:text-[#f6d774]
                  transition-colors
                "
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Info */}
          <div>
            <p className="text-[#f6d774] text-[11px] font-black uppercase tracking-[0.18em] mb-4">
              Info
            </p>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Delivery Info", href: "/delivery" },
              { label: "FAQ", href: "/faq" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="
                  block
                  text-[rgba(255,244,208,0.55)] text-xs font-bold uppercase tracking-wide
                  mb-2.5
                  hover:text-[#f6d774]
                  transition-colors
                "
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between py-4">
          <span className="text-[rgba(255,244,208,0.25)] text-[11px] uppercase tracking-widest">
            © 2026 PizzaCraft. All rights reserved.
          </span>
          <span className="text-[rgba(255,244,208,0.25)] text-[11px] flex items-center gap-1">
            🍕 Made with love & cheese
          </span>
        </div>
      </div>
    </footer>
  );
}
