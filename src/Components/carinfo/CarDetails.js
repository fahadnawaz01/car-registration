import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

function CarDetails({ carData }) {
  return (
    <Card className="AdditionalInfoCard">
      <CardContent>
        <Typography variant="h5" component="h2">
          Car Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="subtitle1">Owner Name:</Typography>
            <Typography variant="body1">{carData.ownerName}</Typography>
          </Grid>{" "}
          <Grid item xs={4}>
            <Typography variant="subtitle1">Owner birthdate:</Typography>
            <Typography variant="body1">{carData.ownerBirthDate}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">Car Number:</Typography>
            <Typography variant="body1">{carData.carNumber}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">Model:</Typography>
            <Typography variant="body1">{carData.model}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">Color:</Typography>
            <Typography variant="body1">{carData.color}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">Registration Date:</Typography>
            <Typography variant="body1">{carData.registrationDate}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Insurance Details:</Typography>
            <Typography variant="body1">{carData.insuranceDetails}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CarDetails;
