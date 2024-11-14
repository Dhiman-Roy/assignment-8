import React, { useEffect, useState } from "react";
import FaqCard from "./FaqCard";

export default function Faq() {
  const [faqData, setFaqData] = useState([]);
  useEffect(() => {
    fetch("data/faqData.json")
      .then((res) => res.json())
      .then((data) => setFaqData([...data]));
  }, []);
  console.log(faqData);
  return (
    <div>
      <h2 className="text-center my-4 text-2xl font-bold">
        Frequently Asked Question
      </h2>
      <div>
        {faqData.map((data) => (
          <FaqCard key={data.id} faqData={data}></FaqCard>
        ))}
      </div>
    </div>
  );
}
