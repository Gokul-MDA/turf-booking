import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Paper, Typography } from "@mui/material";

const data = [
  { month: "Jan", bookings: 30 },
  { month: "Feb", bookings: 45 },
  { month: "Mar", bookings: 50 },
  { month: "Apr", bookings: 40 },
  { month: "May", bookings: 70 },
  { month: "Jun", bookings: 60 },
  { month: "Jul", bookings: 80 },
  { month: "Aug", bookings: 55 },
  { month: "Sep", bookings: 65 },
  { month: "Oct", bookings: 75 },
  { month: "Nov", bookings: 85 },
  { month: "Dec", bookings: 90 },
];

const MyMUIChart = () => {
  return (
    <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Monthly Bookings
      </Typography>
      <LineChart
        series={[{ data: data.map((d) => ({ x: d.month, y: d.bookings })) }]}
        xAxis={[{ scaleType: "band", data: data.map((d) => d.month) }]}
        yAxis={[{ label: "Bookings" }]}
        height={300}
        width={600}
      />
    </Paper>
  );
};

export default MyMUIChart;
