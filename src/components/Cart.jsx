import { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { CartDataContext } from "../routes/Root";
export default function Cart({ cartdata }) {
  const { cartData, setCartData } = useContext(CartDataContext);

  const cancelButtonHandler = () => {
    const newData = cartData.filter(
      (data) => data.product_id !== cartdata.product_id
    );
    setCartData(newData);
  };
  return (
    <div>
      <div className="p-3 border bg-white m-4 rounded-xl flex justify-between items-start">
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <div className="w-[200px] h-[120px]">
            <img className="w-full h-full" src={cartdata.product_image} />
          </div>
          <div className="max-w-[600px] gap-2 flex flex-col">
            <h2 className="text-2xl font-bold">{cartdata.product_title}</h2>
            <p className="text-gray-500">{cartdata.description}</p>
            <p className="font-bold">price:$ {cartdata.price}</p>
          </div>
        </div>
        <button onClick={cancelButtonHandler}>
          <MdOutlineCancel className="text-2xl text-red-600" />
        </button>
      </div>
    </div>
  );
}
