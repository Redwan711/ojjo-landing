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
    <section className="alt">
      <div className="wrap" style={{ maxWidth: "780px" }}>
        <h2>{faq.heading}</h2>
        {faq.items.map((item) => {
          const isOpen = !!openItems[item.id];
          return (
            <div key={item.id} className="faq">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={item.id}
                id={item.btnId}
                onClick={() => toggleItem(item.id)}
              >
                {item.question}
              </button>
              <div
                className="a"
                id={item.id}
                role="region"
                aria-labelledby={item.btnId}
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
