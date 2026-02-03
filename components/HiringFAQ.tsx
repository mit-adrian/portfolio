"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What roles are you open to?",
    answer:
      "I’m primarily looking for full-stack or backend-leaning roles where I can work on real-world systems, security, and scalable architectures.",
  },
  {
    question: "What tech stack do you specialize in?",
    answer:
      "I mainly work with React and Next.js on the frontend, Node.js and Express on the backend, and PostgreSQL for relational data. I prioritize clean architecture and maintainability.",
  },
  {
    question: "How do you approach application security?",
    answer:
      "I design with security in mind from the start—using authentication, role-based access control, input validation, and common OWASP best practices.",
  },
  {
    question: "Are you open to freelance or contract work?",
    answer:
      "Yes. I’m open to freelance, contract, and full-time opportunities, especially projects that involve real-world problem solving and long-term impact.",
  },
  {
    question: "How do you work with teams and feedback?",
    answer:
      "I value clear communication, structured code reviews, and iterative improvement. I’m comfortable collaborating with designers, developers, and non-technical stakeholders.",
  },
];

export default function HiringFAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className="pb-24">
      {/* Header — aligned with other sections */}
      <h2 className="text-3xl font-semibold mb-4">| Hiring FAQ</h2>

      {/* FAQ Items — constrained width */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <div
              key={index}
              className={`
                    border-4
                    overflow-hidden
                    bg-[#414141]
                    transition
                    ${isOpen ? "border-red-600 bg-[#414141]" : "bg-[#414141] border-transparent"}
                `}
            >
              <button
                onClick={() => toggle(index)}
                className="
                    w-full
                    flex
                    justify-between
                    items-center
                    px-6
                    py-4
                    text-left
                    hover:bg-white/5
                    transition
                    "
              >
                <span
                  className="
                    flex-1
                    pr-4
                    text-base
                    md:text-lg
                    font-semibold
                    tracking-tight
                    text-white
                    "
                >
                  {faq.question}
                </span>
                <span
                  className="
                        text-2xl
                        font-light
                    text-slate-400"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div
                  className="
                    px-6
                    pb-5
                    pt-1
                    text-slate-400
                    text-sm
                    md:text-base
                    leading-relaxed
                    "
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
