import HotelCard from "./HotelCard";

const HotelList = () => {
  return (
    <section class="px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>
    </section>
  );
};

export default HotelList;
