import { IoStar } from "react-icons/io5";

const ReviewHeader = () => {
  return (
    <div class="flex items-center justify-between mb-8">
      <div class="flex items-center gap-4">
        <h2 class="text-2xl font-semibold">Reviews</h2>
        <div class="flex items-center">
          <IoStar class="text-yellow-500 mx-1" />
          <span class="text-xl font-semibold">4.9</span>
          <span class="mx-2">·</span>
          <span class="text-gray-600">2 reviews</span>
        </div>
      </div>

      <a
        href="./ReviewModal.html"
        class="px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-100"
      >
        Write a Review
      </a>
    </div>
  );
};

export default ReviewHeader;
