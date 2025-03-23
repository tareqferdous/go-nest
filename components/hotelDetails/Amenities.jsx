import { FaWifi } from "react-icons/fa";
import { MdOutlinePool, MdOutlineSoupKitchen } from "react-icons/md";
import { TbBeach } from "react-icons/tb";

const Amenities = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <TbBeach />
          <span>Beach access</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlinePool />
          <span>Private pool</span>
        </div>
        <div className="flex items-center gap-2">
          <FaWifi />
          <span>Free Wi-Fi</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineSoupKitchen />
          <span>Kitchen</span>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
