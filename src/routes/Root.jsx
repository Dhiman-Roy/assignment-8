import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createContext, useEffect, useState } from "react";
export const AllDataContext = createContext();
export const CartDataContext = createContext();
export const FavDataContext = createContext();

export default function Root() {
  const [allData, setAllData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [favData, setFavData] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <>
      <AllDataContext.Provider value={allData}>
        <CartDataContext.Provider
          value={{ cartData, setCartData, cartTotalPrice, setCartTotalPrice }}
        >
          <FavDataContext.Provider value={{ favData, setFavData }}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          </FavDataContext.Provider>
        </CartDataContext.Provider>
      </AllDataContext.Provider>
    </>
  );
}
