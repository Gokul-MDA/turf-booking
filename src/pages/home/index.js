import React from "react";
import { Carousel } from "react-responsive-carousel";
import turf2 from "assets/images/turf2.webp";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col md:flex-row p-4">
        {/* Hero Section */}
        <div className="flex flex-1 m-auto">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            dynamicHeight={false}
          >
            <div className="h-full">
              <img src={turf2} className="rounded-lg" />
            </div>
            <div className="h-full">
              <img src={turf2} className="rounded-lg" />
            </div>
          </Carousel>
        </div>
        {/* content */}
        <div className="p-4 flex-1">
          <div>
            <p className="text-l font-semibold font-roboto">Location</p>
            <div className="flex p-4">
              <p className="font-poppins text-sm">Madurai Tuticorin Road</p>
            </div>
          </div>
          <div>
            <p className="text-l font-semibold font-roboto">Available Sports</p>
            <div className="flex p-4">
              <p className="border border-secondary p-2 rounded-md font-poppins text-sm">
                Box Cricket
              </p>
              <p className="border border-secondary p-2 rounded-md ml-4 font-poppins text-sm">
                Football
              </p>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-l font-semibold font-roboto">Amenities</p>
            <ul className="p-4 font-poppins text-sm">
              <li>Artificial Grass</li>
              <li>Changing Room</li>
              <li>Washroom</li>
              <li>Drinking Water</li>
              <li>Flood Lights</li>
            </ul>
          </div>
          <div className="mt-2">
            <p className="text-l font-semibold font-roboto">Rules</p>
            <ul className="p-4 font-poppins text-sm">
              <li>No smoking</li>
              <li>No alcohol consumption</li>
              <li>
                No more than 16 players are allowed per game. No spectators
                allowed outside the ground.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* book button */}
      <div className="fixed bottom-0 left-0 right-0 bg-secondary py-2 text-center">
        <button
          className="font-roboto text-white font-semibold"
          onClick={() => navigate("/slots")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Home;
