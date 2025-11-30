"use client";

import { useState } from "react";

export default function CategorySectionSwitcher({ sections, onChange }) {
  const [active, setActive] = useState(sections[0]);

  const select = (item) => {
    setActive(item);
    onChange(item);
  };

  return (
    <div className="flex gap-8 mt-8 border-b border-[#E5E8EB]">
      {sections.map((item) => (
        <button
          key={item}
          onClick={() => select(item)}
          className={`relative pb-3 text-[15px] font-medium transition-all ${
            active === item ? "text-[#121417]" : "text-[#637381]"
          }`}
        >
          {item}

          {active === item && (
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#121417] rounded-full"></span>
          )}
        </button>
      ))}
    </div>
  );
}