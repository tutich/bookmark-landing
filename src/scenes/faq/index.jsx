import React, { useState } from "react";
import arrow from "../../assets/images/icon-arrow.svg";

const faqs = [
  {
    id: 1,
    question: " What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricie Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 3,
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  return (
    <div>
      <div>
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div>
        {faqs.map((faq) => (
          <div key={faq.id}>
            <button onClick={() => handleClick(faq.id)}>
              <span>{faq.question}</span>
              <span>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`transform transition-transform duration-300 ${
                    isOpen === faq.id ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </button>
            {isOpen === faq.id && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
