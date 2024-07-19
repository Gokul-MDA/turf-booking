import React, { useEffect, useMemo, useState } from "react";
import DateCard from "components/DateCard";
import classNames from "classnames";
import BookingModal from "components/BookingModal";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Backdrop, CircularProgress } from "@mui/material";
import { fetchSlotsRequest } from "slice/slots/index.js";
import { setState } from "slice/booking";
import SuccessAlert from "components/SuccessAlert";

const Slots = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsopen] = useState(false);
  const { loading, slots } = useSelector((state) => state.slots);
  const { bookSuccess } = useSelector((state) => state.booking);

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
  }, [weekDates, dispatch]);

  useEffect(() => {
    dispatch(fetchSlotsRequest(weekDates[0]));
  }, []);

  const handleSelectSlot = (slot) => {
    dispatch(setState({ selectedSlot: slot }));
    setIsopen(true);
  };

  if (loading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <div className="p-8">
      <div>
        {/* title */}
        <p className="font-poppins text-l text-center font-semibold">
          Choose your slots
        </p>
      </div>
      {/* Date field */}
      <div>
        <p className="text-l font-roboto py-4 text-center">Date</p>
        <div className="flex justify-center gap-2 overflow-x-auto whitespace-nowrap">
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
        <p className="text-l font-roboto py-4 text-center">Slots</p>
        <div className="flex flex-wrap gap-4 justify-center md:px-32">
          {slots.map((s) => {
            return (
              <button
                key={s.datetime}
                className="w-24 text-center border rounded-sm px-2 py-1"
                onClick={() => handleSelectSlot(s)}
                disabled={s.isBooked}
              >
                <p
                  className={classNames("font-poppins text-sm font-semibold", {
                    "text-secondary": !s.isBooked,
                    "text-gray-400": s.isBooked,
                  })}
                >
                  {moment.utc(s.datetime).format("hh:mm A")}
                </p>
                {!s.isBooked && (
                  <p className="text-gray-400 text-sm">
                    Available for {s.amount}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <BookingModal isOpen={isOpen} setIsopen={setIsopen} />
      <SuccessAlert open={bookSuccess} />
    </div>
  );
};

export default Slots;
