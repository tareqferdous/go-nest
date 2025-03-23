import { IoStar } from "react-icons/io5";

const HotelTitle = () => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-2">Maldives Paradise</h1>
      <div className="flex items-center text-gray-600">
        <IoStar className="text-yellow-500 mx-1" />
        <span>5 · </span>
        <span className="ml-2">2 reviews</span>
        <span className="mx-2">·</span>
        <span className="">Maldives, Tropical Paradise</span>
      </div>
    </div>
  );
};

export default HotelTitle;
