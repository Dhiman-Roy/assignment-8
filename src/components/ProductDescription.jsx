import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CartDataContext, FavDataContext } from "../routes/Root";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function ProductDescription(fdata) {
  const { cartData, setCartData } = useContext(CartDataContext);
  const { favData, setFavData } = useContext(FavDataContext);
  const duplicate = favData.find(
    (data) => fdata.fdata.product_id === data.product_id
  );

  const cartDataHandler = () => {
    setCartData((prev) => [fdata.fdata, ...prev]);
    toast("Your product is added to the cart!");
  };
  const favDataHandler = () => {
    if (!duplicate) {
      setFavData((prev) => [fdata.fdata, ...prev]);
      toast("You choose this product in your favourite list.");
    } else {
      toast("This product already exist in your favourite list..!");
    }
  };
  const availability = fdata.fdata.availability ? "In Stock" : "Out of Stock";
  const availabilityColor = fdata.fdata.availability
    ? "bg-green-400"
    : "bg-gray-300";

  return (
    <div className="flex justify-center gap-4 flex-wrap border rounded-xl p-4 bg-gray-200">
      <div className="max-w-[420px]">
        <img src={fdata.fdata.product_image}></img>
      </div>
      <div className="flex flex-col gap-2 justify-items-center">
        <h2 className="text-2xl font-bold">{fdata.fdata.product_title}</h2>
        <p className="font-bold">price: ${fdata.fdata.price}</p>
        <div
          className={
            "rounded-full p-2 border text-center " +
            availabilityColor +
            " max-w-[150px]"
          }
        >
          {availability}
        </div>
        <div>{fdata.fdata.description}</div>
        <div className="text-xl font-bold">Specification</div>
        <ol>
          {fdata.fdata.Specification.map((dat, idx) => (
            <li className="list-decimal ml-6" key={idx}>
              {dat}
            </li>
          ))}
        </ol>
        <h2 className="text-xl font-bold">Rating</h2>
        <div className="flex items-center gap-2 ">
          <ReactStars
            count={fdata.fdata.rating}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
          />
          <div>{fdata.fdata.rating}</div>
        </div>
        <div className="flex items-center gap-8">
          <button
            onClick={cartDataHandler}
            className="px-3 py-2 bg-[#9538E2] rounded-full text-white"
          >
            Add to Cart
          </button>
          <CiHeart
            onClick={favDataHandler}
            className="w-9 h-9 bg-white border cursor-pointer text-black p-1 rounded-full"
          />
          <ToastContainer autoClose={2000} />
        </div>
      </div>
    </div>
  );
}
