import { Droplets, Layers, FlaskConical, Sparkles, ShieldCheck } from "lucide-react";
import { siteConfig } from "../data/content";

const iconMap = {
  Droplets,
  Layers,
  FlaskConical,
  Sparkles,
  ShieldCheck,
};

const iconColors = {
  Droplets: { bg: "#dbeafe", color: "#3b82f6" },
  Layers: { bg: "#fce7f3", color: "#ec4899" },
  FlaskConical: { bg: "#ede9fe", color: "#8b5cf6" },
  Sparkles: { bg: "#fef3c7", color: "#d97706" },
  ShieldCheck: { bg: "#dcfce7", color: "#16a34a" },
};

export default function Features() {
  const { features } = siteConfig;

  return (
    <section className="alt" aria-labelledby="h-feat">
      <div className="wrap">
        <div className="max-w-2xl">
          <h2 id="h-feat">{features.heading}</h2>
          <p className="mu">{features.microcopy}</p>
        </div>

        {/* 3 items in top row, 2 items in bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-8">
          {features.items.map((item, idx) => {
            const colSpan = idx < 3 ? "md:col-span-2" : "md:col-span-3";
            const Icon = iconMap[item.icon];
            const colors = iconColors[item.icon] ?? { bg: "#f3f4f6", color: "#6b7280" };

            return (
              <div
                key={idx}
                className={`${colSpan} group relative bg-white rounded-2xl p-6 md:p-7 border border-[var(--bd)] shadow-sm hover:shadow-md hover:border-[var(--ac2)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Subtle top accent highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--ac)] to-[var(--ac2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm"
                    style={{ backgroundColor: colors.bg }}
                    aria-hidden="true"
                  >
                    {Icon && <Icon size={22} color={colors.color} strokeWidth={2} />}
                  </div>
                  <h3 className="text-[1.12rem] font-bold text-[var(--tx)] mb-2 font-sans leading-snug group-hover:text-[var(--ac)] transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[var(--mu)] text-[0.93rem] leading-relaxed font-sans mt-3">
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
