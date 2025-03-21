const Amenities = () => {
  return (
    <div>
      <h3 class="text-xl font-semibold mb-4">What this place offers</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-umbrella-beach"></i>
          <span>Beach access</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-person-swimming"></i>
          <span>Private pool</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-wifi"></i>
          <span>Free Wi-Fi</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-sink"></i>
          <span>Kitchen</span>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
