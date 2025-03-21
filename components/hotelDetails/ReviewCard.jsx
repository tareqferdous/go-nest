import { IoStar } from "react-icons/io5";

const ReviewCard = () => {
  return (
    <div class="space-y-4">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
          <img
            src="/api/placeholder/48/48"
            alt="User avatar"
            class="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 class="font-medium">John Smith</h4>
          <p class="text-gray-500 text-sm">December 2024</p>
        </div>
      </div>
      <div class="flex items-center">
        <IoStar className="text-yellow-500" />
        <IoStar className="text-yellow-500" />
        <IoStar className="text-yellow-500" />
        <IoStar className="text-yellow-500" />
        <IoStar className="text-yellow-500" />
      </div>
      <p class="text-gray-600 leading-relaxed">
        Amazing stay! The villa exceeded our expectations. The private pool and
        beach access were highlights of our trip. Sarah was an excellent host,
        always responsive and helpful.
      </p>
    </div>
  );
};

export default ReviewCard;
