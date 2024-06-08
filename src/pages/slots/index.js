import React, { useEffect, useMemo, useState } from "react";
import DateCard from "components/DateCard";
import { sampleSlots } from "./data";
import classNames from "classnames";
import BookingModal from "components/BookingModal";
import { useDispatch } from "react-redux";
import { actionConfig } from "actions/slots";

const Slots = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsopen] = useState(false);
  const dispatch = useDispatch();

  // Generate week dates using a for loop
  const getWeekDates = () => {
    const dates = [];
    const currentDate = new Date();

    for (let i = 0; i < 7; i++) {
      dates.push(currentDate.toISOString());
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  // Memoize the week dates to avoid recomputation
  const weekDates = useMemo(() => getWeekDates(), []);

  // Set the initial selected date when the component mounts
  useEffect(() => {
    setSelectedDate(weekDates[0]);
  }, [weekDates]);

  useEffect(() => {
    if (selectedDate !== null) {
      dispatch({ type: actionConfig.getSlots, payload: selectedDate });
    }
  }, [selectedDate]);

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
          {weekDates.map((s) => {
            return (
              <DateCard
                key={s}
                currentDate={s}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
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
