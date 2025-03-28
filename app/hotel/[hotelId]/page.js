import Amenities from "@/components/hotelDetails/Amenities";
import BookingCard from "@/components/hotelDetails/BookingCard";
import HotelGallery from "@/components/hotelDetails/HotelGallery";
import HotelTitle from "@/components/hotelDetails/HotelTitle";
import PropertySummary from "@/components/hotelDetails/PropertySummary";
import ReviewCard from "@/components/hotelDetails/ReviewCard";
import ReviewHeader from "@/components/hotelDetails/ReviewHeader";

const HotelDetailsPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <HotelTitle />
        <HotelGallery />

        {/* Property Details  */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <PropertySummary />

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">About this place</h3>
              <p className="text-gray-700 leading-relaxed">
                Experience luxury in this stunning beachfront villa nestled in
                the heart of the Maldives. Our spacious 3-bedroom villa offers
                breathtaking ocean views, private pool, and direct beach access.
                Enjoy modern amenities, traditional Maldivian architecture, and
                unparalleled comfort in this tropical paradise.
              </p>
            </div>

            <Amenities />
          </div>

          <BookingCard />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 border-t">
        <ReviewHeader />

        <div className="grid grid-cols-2 gap-8">
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;
