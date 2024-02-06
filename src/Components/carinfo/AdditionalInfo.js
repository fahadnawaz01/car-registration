import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import "./AdditionalInfo.css";

function AdditionalInfo({ additionalData }) {
  return (
    <Card style={{}} className="AdditionalInfoCard">
      <CardContent>
        <Typography variant="h5" component="h2">
          Additional Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="subtitle1">Body Type:</Typography>
            <Typography variant="body1">{additionalData.bodyType}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">Engine Type:</Typography>
            <Typography variant="body1">{additionalData.engineType}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">Fuel Type:</Typography>
            <Typography variant="body1">{additionalData.fuelType}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">Mileage:</Typography>
            <Typography variant="body1">
              {additionalData.mileage.toString()}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">Number of Doors:</Typography>
            <Typography variant="body1">
              {additionalData.numberOfDoors.toString()}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">Number of Seats:</Typography>
            <Typography variant="body1">
              {additionalData.numberOfSeats.toString()}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Transmission Type:</Typography>
            <Typography variant="body1">
              {additionalData.transmissionType}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">VIN Number:</Typography>
            <Typography variant="body1">{additionalData.vinNumber}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default AdditionalInfo;
