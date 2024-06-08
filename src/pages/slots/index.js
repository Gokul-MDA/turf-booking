import React, { useEffect, useState } from "react";
import DateCard from "components/DateCard";
import { sampleSlots, slots } from "./data";
import classNames from "classnames";
import BookingModal from "components/BookingModal";

const Slots = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [isOpen, setIsopen] = useState(false);

  useEffect(() => {
    setSelectedDate(slots[2].date);
  }, []);

  const handleSelectSlot = () => {
    setIsopen(true);
  };

  return (
    <div className="p-4">
      <div>
        {/* title */}
        <p className="font-poppins text-xl text-center font-semibold">
          Choose your slots
        </p>
      </div>
      {/* Date field */}
      <div>
        <p className="text-xl font-roboto py-4">Date</p>
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
          {slots.map((s) => {
            return (
              <DateCard
                key={s.date}
                currentDate={s.date}
                selectedDate={selectedDate}
              />
            );
          })}
        </div>
      </div>
      {/* Available Slots */}
      <div>
        <p className="text-xl font-roboto py-4">Slots</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {sampleSlots.map((s) => {
            return (
              <button
                key={s.time}
                className="w-24 text-center border rounded-sm px-2 py-1"
                onClick={handleSelectSlot}
                disabled={s.isBooked}
              >
                <p
                  className={classNames("font-poppins font-semibold", {
                    "text-secondary": !s.isBooked,
                    "text-gray-400": s.isBooked,
                  })}
                >
                  {s.time}
                </p>
                <p className="text-gray-400">Available for {s.amount}</p>
              </button>
            );
          })}
        </div>
      </div>
      <BookingModal isOpen={isOpen} setIsopen={setIsopen} />
    </div>
  );
};

export default Slots;
