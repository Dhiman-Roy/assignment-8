import { Link, Outlet } from "react-router-dom";
import bannerPic from "../assets/banner.jpg";

export default function Banner() {
  return (
    <>
      <div className="relative bg-[#9538E2] text-white text-center pb-[300px] rounded-b-xl mb-52">
        <div>
          <h2 className="text-2xl pt-9 px-3 font-bold mx-auto mb-6 max-w-[1120px]">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h2>
          <p className="text-base font-normal px-4 mx-auto mb-6 max-w-[780px]">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link
            to="/dashboard"
            className=" bg-white  px-3 py-2 rounded-full font-bold text-[#9538E2]"
          >
            Shop Now
          </Link>
        </div>
        <div className="max-w-[1050px] sm:h-[400px] rounded-xl mx-6 lg:mx-auto absolute top-[350px] sm:top-64 inset-x-0 outline outline-1 outline-offset-4 outline-gray-100 ">
          <img className="w-full h-full rounded-xl" src={bannerPic}></img>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
