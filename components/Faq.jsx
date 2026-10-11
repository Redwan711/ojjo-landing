"use client";

import { useState } from "react";
import { siteConfig } from "../data/content";

export default function Faq() {
  const { faq } = siteConfig;
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="alt" aria-labelledby="h-faq">
      <div className="wrap" style={{ maxWidth: "760px" }}>
        <h2 id="h-faq">{faq.heading}</h2>
        {faq.items.map((item) => {
          const isOpen = !!openItems[item.id];
          const qId = `q${item.id}`;
          const aId = `a${item.id}`;

          return (
            <div className="faq" key={item.id}>
              <button
                type="button"
                id={qId}
                aria-expanded={isOpen}
                aria-controls={aId}
                onClick={() => toggleItem(item.id)}
              >
                {item.question}
              </button>
              <div
                className="a"
                id={aId}
                role="region"
                aria-labelledby={qId}
                hidden={!isOpen}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
