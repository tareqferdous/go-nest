import { IoStar } from "react-icons/io5";

const HotelTitle = () => {
  return (
    <div class="mb-6">
      <h1 class="text-3xl font-bold mb-2">Maldives Paradise</h1>
      <div class="flex items-center text-gray-600">
        <IoStar className="text-yellow-500" />
        <span>5 · </span>
        <span class="ml-2">2 reviews</span>
        <span class="mx-2">·</span>
        <span class="">Maldives, Tropical Paradise</span>
      </div>
    </div>
  );
};

export default HotelTitle;
