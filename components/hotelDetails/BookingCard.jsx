import { IoStar } from "react-icons/io5";

const BookingCard = () => {
  return (
    <div>
      <div class="bg-white shadow-lg rounded-xl p-6 border">
        <div class="flex justify-between items-center mb-4">
          <div>
            <span class="text-xl font-bold">$450</span>
            <span class="text-gray-600 ml-1">per night</span>
          </div>
          <div class="flex items-center">
            <IoStar class="text-yellow-500 mx-1" />
            <span>5</span>
          </div>
        </div>

        <div class="border rounded-lg mb-4">
          <div class="grid grid-cols-2 border-b">
            <input type="text" placeholder="Check in" class="p-3 border-r" />
            <input type="text" placeholder="Check out" class="p-3" />
          </div>
          <input type="number" placeholder="Guests" class="w-full p-3" />
        </div>

        <a
          href="./paymentProcess.html"
          class="w-full block text-center bg-primary text-white py-3 rounded-lg transition-all hover:brightness-90"
        >
          Reserve
        </a>

        <div class="text-center mt-4 text-gray-600">
          <p>You won(t) be charged yet</p>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
