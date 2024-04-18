import React, { useState } from "react";
import "../components/barfav.css";
import Favorie1 from '../assets/favorie1.svg';
import Favorie2 from '../assets/favorie2.svg';
import Favorie3 from '../assets/favorie3.svg';
import Favorie4 from '../assets/favorie4.svg';
import SpaToulouse from '../assets/spatoulouse.svg';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia, Button, CardActions } from "@mui/material";

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
            <div className="Fav12">
              <img src={Favorie1} alt="" className="Favorie1" />
              <img src={Favorie2} alt="" className="Favorie2" />
            </div>

            <div className="Fav34">
                <img src={Favorie3} alt="" className="Favorie3" />
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
                    <Typography variant="body2" color="text.secondary">
                      Description du refuge 1.
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
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={SpaToulouse}
                    alt="Refuge 2"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Refuge 2
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description du refuge 2.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* Ajoutez d'autres cartes ici pour chaque refuge */}
          </Grid>
        </div>
      )}
    </div>
  );
}

export default Barfav;

