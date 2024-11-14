import { useContext, useEffect, useState } from "react";
import Cart from "./Cart";
import { CartDataContext } from "../routes/Root";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function CartContainer() {
  const { cartData, setCartData } = useContext(CartDataContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    setCartData([]);
    navigate("/");
  }

  let initialValue = 0;

  cartData.forEach((data) => (initialValue = initialValue + data.price));

  const sortHandler = () => {
    setCartData([...cartData.sort((a, b) => b.price - a.price)]);
    console.log("hi");
  };

  return (
    <div className="bg-gray-200">
      <div className="flex justify-between p-3 flex-wrap max-w-7xl items-center ">
        <h2 className="text-2xl font-bold">Cart</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <h2 className="text-2xl font-bold">
            Total Cost: {initialValue.toFixed(2)} $
          </h2>
          <button
            onClick={sortHandler}
            className="px-4 py-3 border rounded-full text-violet-700 border-violet-700"
          >
            Sort by Price
          </button>
          <button
            onClick={openModal}
            className={`px-4 py-3 border rounded-full text-violet-700 bg-violet-700 border-violet-700 ${
              initialValue <= 0 ? "hidden" : ""
            } rounded-full text-white bg-violet-700"`}
          >
            Purchase
          </button>
        </div>
      </div>
      {cartData.map((data, idx) => (
        <Cart key={idx} cartdata={data}></Cart>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-xl font-bold">Payment successfull</h2>
          <p>Thanks for purchasing</p>
          <p>Total: {initialValue.toFixed(2)} $</p>
          <button
            className="p-2 rounded-full bg-gray-400 w-full"
            onClick={closeModal}
          >
            close
          </button>
        </div>
      </Modal>
    </div>
  );
}
