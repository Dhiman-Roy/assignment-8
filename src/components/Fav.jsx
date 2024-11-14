import { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FavDataContext } from "../routes/Root";
export default function Fav({ favdata }) {
  const { favData, setFavData } = useContext(FavDataContext);

  const cancelButtonHandler = () => {
    const newData = favData.filter(
      (data) => data.product_id !== favdata.product_id
    );
    setFavData(newData);
  };
  return (
    <div>
      <div className="p-3 border bg-white m-4 rounded-xl flex justify-between items-start">
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <div className="w-[200px] h-[120px]">
            <img className="w-full h-full" src={favdata.product_image} />
          </div>
          <div className="max-w-[600px] gap-2 flex flex-col">
            <h2 className="text-2xl font-bold">{favdata.product_title}</h2>
            <p className="text-gray-500">{favdata.description}</p>
            <p className="font-bold">price:$ {favdata.price}</p>
          </div>
        </div>
        <button onClick={cancelButtonHandler}>
          <MdOutlineCancel className="text-2xl text-red-600" />
        </button>
      </div>
    </div>
  );
}
