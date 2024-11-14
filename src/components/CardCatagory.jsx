import { Link } from "react-router-dom";

export default function CardCatagory({ cardData }) {
  const link = "/" + cardData;
  return (
    <>
      <Link to={link} className="border rounded p-1 bg-gray-200 cursor-pointer">
        {cardData}
      </Link>
    </>
  );
}
