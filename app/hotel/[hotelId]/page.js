const HotelDetailsPage = () => {
  return (
    <div class="bg-gray-50">
      {/* Property Details Container  */}
      <div class="max-w-7xl mx-auto px-6 py-8">
        {/* Property Title and Rating  */}
        <div class="mb-6">
          <h1 class="text-3xl font-bold mb-2">Maldives Paradise</h1>
          <div class="flex items-center text-gray-600">
            <i class="fas fa-star text-yellow-500 mr-1"></i>
            <span>5 · </span>
            <span class="ml-2">2 reviews</span>
            <span class="mx-2">·</span>
            <span class="">Maldives, Tropical Paradise</span>
          </div>
        </div>

        {/* Image Gallery  */}
        <div class="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]">
          <div class="col-span-2 row-span-2">
            <img
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Main Room"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Room 1"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Room 2"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Room 3"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Room 4"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Property Details  */}
        <div class="grid grid-cols-3 gap-8">
          {/* Left Column: Property Description  */}
          <div class="col-span-2">
            <div class="border-b pb-6 mb-6">
              <h2 class="text-2xl font-semibold mb-4">
                Entire villa hosted by Sarah
              </h2>
              <div class="grid grid-cols-3 gap-4 text-gray-600">
                <div class="flex items-center gap-2">
                  <i class="fas fa-person"></i>
                  <span>6 guests</span>
                </div>
                <div class="flex items-center gap-2">
                  <i class="fas fa-door-open"></i>
                  <span>3 bedrooms</span>
                </div>
                <div class="flex items-center gap-2">
                  <i class="fas fa-bed"></i>
                  <span>4 beds</span>
                </div>
              </div>
            </div>

            {/* Description  */}
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-4">About this place</h3>
              <p class="text-gray-700 leading-relaxed">
                Experience luxury in this stunning beachfront villa nestled in
                the heart of the Maldives. Our spacious 3-bedroom villa offers
                breathtaking ocean views, private pool, and direct beach access.
                Enjoy modern amenities, traditional Maldivian architecture, and
                unparalleled comfort in this tropical paradise.
              </p>
            </div>

            {/* Amenities */}
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
          </div>

          {/* Right Column: Booking Card  */}
          <div>
            <div class="bg-white shadow-lg rounded-xl p-6 border">
              <div class="flex justify-between items-center mb-4">
                <div>
                  <span class="text-xl font-bold">$450</span>
                  <span class="text-gray-600 ml-1">per night</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-star text-yellow-500 mr-1"></i>
                  <span>5</span>
                </div>
              </div>

              <div class="border rounded-lg mb-4">
                <div class="grid grid-cols-2 border-b">
                  <input
                    type="text"
                    placeholder="Check in"
                    class="p-3 border-r"
                  />
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
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6 py-12 border-t">
        {/* Reviews Header with Average Rating  */}
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-4">
            <h2 class="text-2xl font-semibold">Reviews</h2>
            <div class="flex items-center">
              <i class="fas fa-star text-yellow-500 mr-2"></i>
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

        <div class="grid grid-cols-2 gap-8">
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
              <i class="fas fa-star text-yellow-500"></i>
              <i class="fas fa-star text-yellow-500"></i>
              <i class="fas fa-star text-yellow-500"></i>
              <i class="fas fa-star text-yellow-500"></i>
              <i class="fas fa-star text-yellow-500"></i>
            </div>
            <p class="text-gray-600 leading-relaxed">
              Amazing stay! The villa exceeded our expectations. The private
              pool and beach access were highlights of our trip. Sarah was an
              excellent host, always responsive and helpful.
            </p>
          </div>

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
                <h4 class="font-medium">Emma Wilson</h4>
                <p class="text-gray-500 text-sm">November 2024</p>
              </div>
            </div>
            <div class="flex items-center">
              <i class="fas fa-star text-yellow-500"></i>
              <i class="fas fa-star text-yellow-500"></i>
              <i class="fas fa-star text-yellow-500"></i>
              <i class="fas fa-star text-yellow-500"></i>
              <i class="fas fa-star text-yellow-500"></i>
            </div>
            <p class="text-gray-600 leading-relaxed">
              Perfect location for a family vacation. The villa was spotlessly
              clean and well-maintained. The kitchen was fully equipped, and we
              loved cooking meals while enjoying the ocean view.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;
