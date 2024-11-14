import { NavLink } from "react-router-dom";
import CartContainer from "./CartContainer";
import { useState } from "react";
import FavContainer from "./FavContainer";

export default function Dashboard() {
  const [showCart, setShowCart] = useState(true);
  const [showWishlist, setShowWishlist] = useState(false);

  const cartHandler = () => {
    setShowCart(true);
    setShowWishlist(false);
  };

  const wishlistHandler = () => {
    setShowWishlist(true);
    setShowCart(false);
  };
  return (
    <div>
      <div className="flex flex-col items-center text-center p-3 gap-3 bg-[#9538E2] text-white ">
        <h2 className="text-2xl lg:text-3xl font-bold">Dashboard</h2>
        <p className="max-w-[790px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="mb-4 mt-3">
          <button
            onClick={cartHandler}
            className={`px-4 py-2 rounded-full border font-bold ${
              showCart && "bg-white text-violet-700"
            } `}
          >
            Cart
          </button>
          <button
            onClick={wishlistHandler}
            className={`px-4 py-2 rounded-full border ml-3 font-bold ${
              showWishlist && "bg-white text-violet-700"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      {showCart && <CartContainer></CartContainer>}
      {showWishlist && <FavContainer></FavContainer>}
    </div>
  );
}
