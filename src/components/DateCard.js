import React from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import classNames from "classnames";

const DateCard = ({ currentDate, selectedDate }) => {
  const month = format(currentDate, "MMM");
  const date = format(currentDate, "dd");
  const day = format(currentDate, "EEE");

  return (
    <div
      className={classNames(" text-center rounded-md w-40", {
        "bg-primary": currentDate === selectedDate,
        "border-primary border-1": !currentDate === selectedDate,
      })}
    >
      <div className="w-16 py-2">
        <p className="text-secondary font-semibold">{month}</p>
        <p className="text-secondary font-semibold">{date}</p>
        <p className="text-secondary font-semibold">{day}</p>
      </div>
    </div>
  );
};

export default DateCard;

DateCard.propTypes = {
  currentDate: PropTypes.string,
  selectedDate: PropTypes.string,
};
