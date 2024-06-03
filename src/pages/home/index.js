import Header from "components/Header";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import turf2 from "assets/images/turf2.webp";
import turf3 from "assets/images/turf3.webp";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          dynamicHeight={false}
        >
          <div className="h-60">
            <img src={turf2} height={200} />
          </div>
          <div className="h-60">
            <img src={turf3} height={200} />
          </div>
        </Carousel>
      </div>
      {/* content */}
      <div className="p-4">
        <div>
          <p className="text-xl font-semibold font-roboto">Location</p>
          <div className="flex p-4">
            <p className="font-poppins">Madurai Tuticorin Road</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold font-roboto">Available Sports</p>
          <div className="flex p-4">
            <p className="border border-secondary p-2 rounded-md font-semibold font-poppins">
              Box Cricket
            </p>
            <p className="border border-secondary p-2 rounded-md font-semibold ml-4 font-poppins">
              Football
            </p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-xl font-semibold font-roboto">Amenities</p>
          <ul className="p-4 font-poppins">
            <li>Artificial Grass</li>
            <li>Changing Room</li>
            <li>Washroom</li>
            <li>Drinking Water</li>
            <li>Flood Lights</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="text-xl font-semibold font-roboto">Rules</p>
          <ul className="p-4 font-poppins">
            <li>NO SMOKING</li>
            <li>NO ALCOHOL CONSUMPTION</li>
            <li>
              NO MORE THAN 16 PLAYERS ALLOWED PER GAME. NO SPECTATORS ALLOWED
              OUTSIDE THE GROUND
            </li>
          </ul>
        </div>
      </div>
      <Footer />
      {/* book button */}
      <div className="fixed bottom-0 left-0 right-0 bg-secondary py-4 text-center">
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
