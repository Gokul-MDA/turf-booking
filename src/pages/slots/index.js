import React, { useEffect, useState } from "react";
import DateCard from "components/DateCard";
import { sampleSlots, slots } from "./data";
import classNames from "classnames";

const Slots = () => {
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    setSelectedDate(slots[2].date);
  }, []);

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
              <div
                key={s.time}
                className="w-24 text-center border rounded-sm px-2 py-1"
              >
                <p
                  className={classNames("font-poppins font-semibold", {
                    "text-secondary": !s.booked,
                    "text-gray-400": s.booked,
                  })}
                >
                  {s.time}
                </p>
                <p className="text-gray-400">Available for {s.amount}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slots;
