import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDescription from "./ProductDescription";

export default function ProductDetails() {
  const [allData, setAllData] = useState([]);

  const { category, product_id } = useParams();

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  const filteredData = allData.filter(
    (data) => data.product_id === product_id && data.category === category
  );

  return (
    <div>
      {filteredData.map((proData) => (
        <ProductDescription
          key={proData.product_id}
          fdata={proData}
        ></ProductDescription>
      ))}
    </div>
  );
}
