import React, { useState } from "react";
import { Tabs, Tab, Grid, Card, CardContent, Typography, CardActionArea, CardMedia, Button, CardActions } from "@mui/material";
import Favorie4 from '../assets/Favories.png';
import SpaToulouse from '../assets/spatoulouse.svg';
import "../components/barfav.css";

function Barfav() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Animaux" />
        <Tab label="Refuges" />
      </Tabs>
      {selectedTab === 0 && (
        <div className="AnimauxFav">
          <div className="Fav34">
            <img src={Favorie4} alt="" className="Favorie4" />
          </div>
        </div>
      )}
      {selectedTab === 1 && (
        <div className="Refuges">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={SpaToulouse}
                    alt="Refuge 1"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Refuge 1
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Voir adresse
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}

export default Barfav;


