import { Link } from "react-router-dom";

export default function Card(cardData) {
  let route = cardData.cardData.category + "/" + cardData.cardData.product_id;
  return (
    <div className="flex w-80 flex-col border justify-between rounded-xl p-4 gap-3">
      <div>
        <img src={cardData.cardData.product_image}></img>
      </div>
      <h2>{cardData.cardData.product_title}</h2>
      <p>price: {cardData.cardData.price} $</p>
      <Link
        to={route}
        className="px-2 py-1 w-[150px] text-center rounded-full  border text-[#9538E2] border-[#9538E2]"
      >
        View Details
      </Link>
    </div>
  );
}
