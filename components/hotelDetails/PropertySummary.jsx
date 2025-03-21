import { FaBed } from "react-icons/fa";
import { MdMeetingRoom, MdOutlineEmojiPeople } from "react-icons/md";

const PropertySummary = () => {
  return (
    <div class="border-b pb-6 mb-6">
      <h2 class="text-2xl font-semibold mb-4">Entire villa hosted by Sarah</h2>
      <div class="grid grid-cols-3 gap-4 text-gray-600">
        <div class="flex items-center gap-2">
          <MdOutlineEmojiPeople />
          <span>6 guests</span>
        </div>
        <div class="flex items-center gap-2">
          <MdMeetingRoom />
          <span>3 bedrooms</span>
        </div>
        <div class="flex items-center gap-2">
          <FaBed />
          <span>4 beds</span>
        </div>
      </div>
    </div>
  );
};

export default PropertySummary;
