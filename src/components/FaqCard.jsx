import React, { useState } from "react";

export default function FaqCard({ faqData }) {
  const [active, setActive] = useState(false);
  const activeHandler = () => {
    setActive(!active);
  };
  return (
    <div
      onClick={activeHandler}
      className="p-3 bg-slate-200 cursor-pointer border rounded mx-3 mb-3"
    >
      <h2 className="text-xl font-semibold">{faqData.question}</h2>
      {active && <p className="text-gray-600">{faqData.answer}</p>}
    </div>
  );
}
