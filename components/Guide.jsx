import { Droplet, AlertCircle, BookOpen, Link2, HeartPulse } from "lucide-react";
import { siteConfig } from "../data/content";

// One icon per guide card
const guideIcons = [
  { Icon: Droplet, bg: "#dbeafe", color: "#3b82f6" },
  { Icon: AlertCircle, bg: "#fef3c7", color: "#d97706" },
  { Icon: BookOpen, bg: "#ede9fe", color: "#8b5cf6" },
  { Icon: Link2, bg: "#fce7f3", color: "#ec4899" },
  { Icon: HeartPulse, bg: "#dcfce7", color: "#16a34a" },
];

export default function Guide() {
  const { guide } = siteConfig;

  return (
    <section aria-labelledby="h-guide">
      <div className="wrap">
        <h2 id="h-guide">{guide.heading}</h2>

        {/* 3 items in top row, 2 items in bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-8">
          {guide.items.map((item, idx) => {
            const colSpan = idx < 3 ? "md:col-span-2" : "md:col-span-3";
            const { Icon, bg, color } = guideIcons[idx] ?? { Icon: null, bg: "#f3f4f6", color: "#6b7280" };

            return (
              <div
                key={idx}
                className={`${colSpan} group relative bg-white rounded-2xl p-6 md:p-7 border border-[var(--bd)] shadow-sm hover:shadow-md hover:border-[var(--ac2)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Subtle top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--ac)] to-[var(--ac2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                <div>
                  {/* Icon + step badge row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm"
                      style={{ backgroundColor: bg }}
                      aria-hidden="true"
                    >
                      {Icon && <Icon size={22} color={color} strokeWidth={2} />}
                    </div>
                    <span className="text-[0.72rem] font-bold tracking-widest uppercase text-[var(--ac2)] bg-[var(--ac-light)] border border-[var(--ac-light-border,var(--bd))] px-2.5 py-1 rounded-full font-sans mt-1">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-[1.12rem] font-bold text-[var(--tx)] mb-2.5 font-sans leading-snug group-hover:text-[var(--ac)] transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[var(--tx)] text-[0.93rem] leading-relaxed font-serif opacity-90 mt-2">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
