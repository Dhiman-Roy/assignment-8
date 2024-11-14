import { useContext } from "react";
import Fav from "./Fav";
import { FavDataContext } from "../routes/Root";

export default function FavContainer() {
  const { favData } = useContext(FavDataContext);
  return (
    <div className="bg-gray-200">
      <div className="flex justify-between p-3 flex-wrap max-w-7xl items-center ">
        <h2 className="text-2xl font-bold">Wishlist</h2>
      </div>
      {favData.map((data, idx) => (
        <Fav key={idx} favdata={data}></Fav>
      ))}
    </div>
  );
}
