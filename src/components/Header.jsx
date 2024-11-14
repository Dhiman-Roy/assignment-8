import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { CartDataContext, FavDataContext } from "../routes/Root";

export default function Header() {
  const location = useLocation();

  const { cartData } = useContext(CartDataContext);
  const { favData } = useContext(FavDataContext);
  return (
    <div
      className={`grid ${
        location.pathname === "/"
          ? "bg-[#9538E2] text-white"
          : "bg-white text-black"
      } rounded-t-2xl mt-2  outline-gray-300 justify-items-center sm:justify-between lg:grid-flow-col gap-6 px-7 py-4`}
    >
      <h2 className="sm:col-span-2 lg:col-auto text-xl font-bold">
        Gadget Heaven
      </h2>
      <div className="text-base font-bold gap-6 flex justify-between ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "underline underline-offset-4"
              : isActive
              ? "underline underline-offset-4"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending
              ? "underline underline-offset-4"
              : isActive
              ? "underline underline-offset-4"
              : ""
          }
        >
          Statistics
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "underline underline-offset-4"
              : isActive
              ? "underline underline-offset-4"
              : ""
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive, isPending }) =>
            isPending
              ? "underline underline-offset-4"
              : isActive
              ? "underline underline-offset-4"
              : ""
          }
        >
          Faq
        </NavLink>
      </div>
      <div>
        <div className="flex gap-5">
          <div className="flex items-start gap-1 ">
            <IoCartOutline className="w-9 h-9 bg-white text-black p-1 rounded-full" />
            <div className="">{cartData.length}</div>
          </div>
          <div className="flex items-start gap-1">
            <CiHeart className="w-9 h-9 bg-white text-black p-1 rounded-full" />
            <div className="">{favData.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
