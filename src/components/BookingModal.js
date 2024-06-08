import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { sampleSlots } from "pages/slots/data";
import { useDispatch } from "react-redux";
import { actionConfig } from "actions/booking";

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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    slot: "",
    date: "2024-06-08T17:11:59.788Z",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    slot: "",
  });

  const dispatch = useDispatch();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      dispatch({ type: actionConfig.postSlot, payload: formData });
      handleClose(); // Close the modal after submission
    }
  };

  const handleClose = () => {
    setIsopen(false);
  };

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
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal" error={!!errors.name}>
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
          <FormControl fullWidth margin="normal" error={!!errors.phone}>
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
              {sampleSlots.map((slot, index) => (
                <MenuItem key={index} value={slot.time}>
                  {slot.time}
                </MenuItem>
              ))}
            </Select>
            {errors.slot && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.slot}</p>
            )}
          </FormControl>
          <Button type="submit" fullWidth variant="contained" color="primary">
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
