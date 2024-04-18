import React, { useState } from 'react';
import Menu from '../components/Menu';
import '../Pages/Accueil.css'; // Import du fichier CSS externe
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Scoopie from '../assets/scoopie.svg';

const Circle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: '#897F66',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const cardStyle = {
  maxWidth: 300,
  margin: '20px auto',
};

function Accueil() {
  const [isFavorite, setIsFavorite] = useState(false); 

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <Menu /> 
      <div className="espace">
        <p>Accueil</p>
        <Card sx={cardStyle}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Scoopie}
              alt="Scoopie"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
            <CardContent className="description">
              <Typography gutterBottom variant="h7" component="div">
                Scoopie, 1 an
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Race non identifiée
                SPA de Toulouse
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="affectueux" className="chip" />
                <Chip label="joueur" className="chip" />
                <Chip label="peureux" className="chip" />
              </Stack>
            </CardContent>
          </CardActionArea>
          <CardContent sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={Circle} onClick={toggleFavorite}> 
              {isFavorite ? (
                <FavoriteIcon style={{ color: '#ffffff' }} />
              ) : (
                <FavoriteBorderIcon style={{ color: '#ffffff' }} />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Accueil;

