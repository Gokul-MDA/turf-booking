import React from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { fetchSlotsRequest } from "actions/slots";

const DateCard = ({ currentDate, selectedDate, setSelectedDate }) => {
  const month = format(currentDate, "MMM");
  const date = format(currentDate, "dd");
  const day = format(currentDate, "EEE");

  const dispatch = useDispatch();

  const handleSelectSlot = (currentDate) => {
    setSelectedDate(currentDate);
    dispatch(fetchSlotsRequest(currentDate));
  };

  return (
    <button
      className={classNames("text-center rounded-md w-18", {
        "bg-primary": currentDate === selectedDate,
        "border-primary border-1": !currentDate === selectedDate,
      })}
      onClick={() => handleSelectSlot(currentDate)}
    >
      <div className="w-16 py-2">
        <p className="text-secondary text-sm font-semibold">{month}</p>
        <p className="text-secondary text-sm font-semibold">{date}</p>
        <p className="text-secondary text-sm font-semibold">{day}</p>
      </div>
    </button>
  );
};

export default DateCard;

DateCard.propTypes = {
  currentDate: PropTypes.string,
  selectedDate: PropTypes.string,
  setSelectedDate: PropTypes.func,
};
