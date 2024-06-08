import React from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import classNames from "classnames";

const DateCard = ({ currentDate, selectedDate, setSelectedDate }) => {
  const month = format(currentDate, "MMM");
  const date = format(currentDate, "dd");
  const day = format(currentDate, "EEE");

  return (
    <button
      className={classNames(" text-center rounded-md w-40", {
        "bg-primary": currentDate === selectedDate,
        "border-primary border-1": !currentDate === selectedDate,
      })}
      onClick={() => setSelectedDate(currentDate)}
    >
      <div className="w-16 py-2">
        <p className="text-secondary font-semibold">{month}</p>
        <p className="text-secondary font-semibold">{date}</p>
        <p className="text-secondary font-semibold">{day}</p>
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
