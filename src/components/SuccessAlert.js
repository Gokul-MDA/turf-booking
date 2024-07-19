import React from "react";
import PropTypes from "prop-types";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { setState } from "slice/booking";

function SuccessAlert({ open }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setState({ bookSuccess: false }));
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity="success">Slot booked successfully!</Alert>
    </Snackbar>
  );
}

export default SuccessAlert;

SuccessAlert.propTypes = {
  open: PropTypes.bool,
};
