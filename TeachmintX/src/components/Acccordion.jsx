import { useState } from "react";

const faqs = [
  {
    question: "What is Teachmint?",
    answer:
      "Teachmint is an education technology platform that helps institutions manage classes, students, attendance, and learning workflows.",
  },
  {
    question: "Who can use Teachmint?",
    answer:
      "Teachmint is used by schools, colleges, coaching centers, teachers, and education administrators.",
  },
  {
    question: "Is delivery available all over India?",
    answer:
      "Yes, Teachmint provides delivery all over pan India.",
  },
  {
    question: "Does Teachmint support online classes?",
    answer:
      "Yes, Teachmint supports live online classes, recorded sessions, and digital learning tools.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="query"> 
      <div className="lg:max-w-6xl mx-auto space-y-3 m-2 px-4">
          <h2 className="text-4xl lg:text-5xl font-semibold text-center p-8">Most asked questions</h2>
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl bg-white overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left cursor-pointer"
            >
              <span className="text-lg font-medium text-blue-500">{item.question}</span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-sm text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
