import React from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import MyMUIChart from "components/Charts";

function Admin() {
  return (
    <Container className="m-6">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Amount
              </Typography>
              <Typography variant="h6" component="div" className="text-center">
                10,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Amount
              </Typography>
              <Typography variant="h6" component="div" className="text-center">
                10,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Amount
              </Typography>
              <Typography variant="h6" component="div" className="text-center">
                10,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Amount
              </Typography>
              <Typography variant="h6" component="div" className="text-center">
                10,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container marginTop={1} spacing={3}>
        <Grid item xs={8}>
          <MyMUIChart />
        </Grid>
        {/* Add more components here */}
      </Grid>
    </Container>
  );
}

export default Admin;
