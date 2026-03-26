// src/components/Accordion.js
import { useState } from "react";
import { Plus, Minus, Star } from "lucide-react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`accordion-item ${isOpen ? "open" : ""}`}>
            <button
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion-label">
                {item.icon || <Star size={18} />}
                <span className="accordion-title">{item.label}</span>
              </div>
              <div className="accordion-icon">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>

            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;