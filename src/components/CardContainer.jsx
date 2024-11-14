import CardCatagory from "./CardCatagory";
import Card from "./Card";
import { AllDataContext } from "../routes/Root";
import { useContext } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
export default function CardContainer() {
  const Alldata = useContext(AllDataContext);
  const dataCategory = Alldata.map((data) => data.category);
  const dataSet = dataCategory.filter((item, index) => {
    return dataCategory.indexOf(item) === index;
  });
  let changeRoute;
  let { userId } = useParams();
  if (userId) {
    changeRoute = Alldata.filter((data) => data.category === userId);
  } else {
    changeRoute = [...Alldata];
  }

  return (
    <div>
      <h2 className="text-center text-3xl font-bold mb-6">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-center lg:items-start">
        <div className="flex lg:flex-col flex-wrap gap-2 p-3 border rounded">
          <Link
            to="/"
            className="border rounded p-1 bg-gray-200 cursor-pointer"
          >
            ALL Gadgets
          </Link>
          {dataSet.map((data, idx) => (
            <CardCatagory
              key={idx}
              cardData={data}
              onchange={changeRoute}
            ></CardCatagory>
          ))}
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {changeRoute &&
            changeRoute.map((data) => (
              <Card key={data.product_id} cardData={data}></Card>
            ))}
        </div>
      </div>
    </div>
  );
}
