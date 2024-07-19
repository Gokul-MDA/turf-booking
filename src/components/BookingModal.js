import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { fetchBookingRequest } from "slice/booking";
import { isObject } from "lodash";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 340,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ isOpen, setIsopen }) => {
  const { loading, slots } = useSelector((state) => state.slots);
  const { selectedSlot } = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    slot: "",
    amount: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    slot: "",
  });

  useEffect(() => {
    if (isObject(selectedSlot)) {
      setFormData({
        ...formData,
        slot: selectedSlot?.datetime,
        amount: selectedSlot?.amount,
      });
    }
  }, [selectedSlot]);

  const validate = () => {
    let tempErrors = { ...errors };

    // Name validation: only letters and spaces allowed, and should not be empty
    const nameRegex = /^[a-zA-Z\s]+$/;
    tempErrors.name = formData.name
      ? nameRegex.test(formData.name)
        ? ""
        : "Name is not valid"
      : "Name is required";

    // Phone validation: should be 10 digits and start with 7, 8, or 9
    const phoneRegex = /^[6789]\d{9}$/;
    tempErrors.phone = formData.phone
      ? phoneRegex.test(formData.phone)
        ? ""
        : "Phone number is not valid"
      : "Phone is required";

    tempErrors.slot = formData.slot ? "" : "Slot is required";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log(formData, 1);
      dispatch(fetchBookingRequest(formData));

      handleClose(); // Close the modal after submission
    }
  };

  const handleClose = () => {
    setIsopen(false);
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
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Confirm Booking
        </Typography>
        <form>
          <FormControl fullWidth error={!!errors.name}>
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              size="small"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
            />
            {errors.name && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.name}</p>
            )}
          </FormControl>
          <FormControl fullWidth error={!!errors.phone}>
            <TextField
              margin="normal"
              fullWidth
              id="phone"
              label="Phone"
              name="phone"
              size="small"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
            />
            {errors.phone && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.phone}</p>
            )}
          </FormControl>
          <FormControl fullWidth margin="normal" error={!!errors.slot}>
            <InputLabel id="slot-label">Selected Slot</InputLabel>
            <Select
              labelId="slot-label"
              id="slot"
              name="slot"
              size="small"
              value={formData.slot}
              onChange={handleChange}
              label="Select Slot"
            >
              {slots
                .filter((i) => !i.isBooked)
                .map((slot, index) => (
                  <MenuItem key={index} value={slot.datetime}>
                    {moment.utc(slot.datetime).format("hh:mm A")}
                  </MenuItem>
                ))}
            </Select>
            {errors.slot && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.slot}</p>
            )}
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

BookingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsopen: PropTypes.func.isRequired,
};

export default BookingModal;
