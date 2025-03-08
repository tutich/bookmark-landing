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
    <div className="mx-auto">
      <div className="py-6">
        <h1 className="text-blue-300 lg: text-xl lg:text-2xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-blue-100 w-[90%] lg:w-full text-sm text-center mx-auto mb-3">
          Here are some of our FAQs. If you have any other questions{" "}
          <span className="hidden lg:inline">
            <br />
          </span>{" "}
          you’d like answered please feel free to email us.
        </p>
      </div>
      <div className="w-[90%] lg:w-[40%] mx-auto">
        {faqs.map((faq) => (
          <div key={faq.id}>
            <hr />
            <button
              onClick={() => handleClick(faq.id)}
              className="flex items-center py-4 w-full justify-between"
            >
              <span className="text-sm lg:text-lg">{faq.question}</span>
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
      <hr className="mb-2 w-[90%] lg:w-[40%] mx-auto" />
      <div className="mb-4 py-4">
        <button className="bg-blue-200 items-center flex mx-auto p-2 text-white text-sm rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Faq;
