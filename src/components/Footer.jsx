export default function Footer() {
  return (
    <div className="p-5 pt-9 text-center mt-8">
      <h2 className="text-2xl font-bold  mb-3">Gadget Heaven</h2>
      <p className="text-gray-500 mb-3">
        Leading the way in cutting-edge technology and innovation
      </p>
      <hr className="mb-3"></hr>
      <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-around">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Services</h2>
          <p className="text-gray-500">Product Support</p>
          <p className="text-gray-500">Order Tracking</p>
          <p className="text-gray-500">Shipping & Delivery</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Company</h2>
          <p className="text-gray-500">About us</p>
          <p className="text-gray-500">Careers</p>
          <p className="text-gray-500">Contact</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Legal</h2>
          <p className="text-gray-500">Tearms & service</p>
          <p className="text-gray-500">Privacy policy</p>
          <p className="text-gray-500">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}
