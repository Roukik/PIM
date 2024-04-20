import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import '../Pages/Accueil.css';
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
import Riley from '../assets/Riley.svg';
import Glue from '../assets/Glue.svg';
import Rikers from '../assets/Rikers.svg';
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import Carte from '../Pages/CarteR'
import SDes from '../Descriptions/SDes';

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
        <p>Annuaire</p>
        {/* Première carte */}
        <Card sx={cardStyle}>
          <CardActionArea component={Link} to="/SDes">
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
            <div style={Circle} onClick={toggleFavorite} > 
              {isFavorite ? (
                <FavoriteIcon style={{ color: '#ffffff' }} />
              ) : (
                <FavoriteBorderIcon style={{ color: '#ffffff' }} />
              )}
            </div>
          </CardContent>
        </Card>

        {/* Deuxième carte (Riley) */}
        <Card sx={cardStyle}>
          <CardActionArea component={Link} to="/page-riley">
            <CardMedia
              component="img"
              height="140"
              image={Riley}
              alt="Riley"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
            <CardContent className="description">
              <Typography gutterBottom variant="h7" component="div">
                Riley, 3 ans
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Malinois
                Agir Pour Les Animaux
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="dynamique" className="chip" />
                <Chip label="curieux" className="chip" />
              </Stack>
              <Stack direction="row" spacing={1}>
                <Chip label="aventureux" className="chip" />
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

        {/* Troisième carte */}
        <Card sx={cardStyle}>
          <CardActionArea component={Link} to="/page-glue">
            <CardMedia
              component="img"
              height="140"
              image={Glue}
              alt="Glue"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
            <CardContent className="description">
              <Typography gutterBottom variant="h7" component="div">
                Glue, 3 ans
              </Typography>
              <Typography variant="body2" color="text.secondary">
                X Labrador
                SPA de Toulouse
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="méfiant" className="chip" />
                <Chip label="joueur" className="chip" />
                <Chip label="affectueux" className="chip" />
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

        {/* Quatrième carte (Rikers) */}
        <Card sx={cardStyle}>
          <CardActionArea component={Link} to="/page-rikers">
            <CardMedia
              component="img"
              height="140"
              image={Rikers}
              alt="Rikers"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
            <CardContent className="description">
              <Typography gutterBottom variant="h7" component="div">
                Rikers, 3 ans
              </Typography>
              <Typography variant="body2" color="text.secondary">
                American Staffordshi
                SPA de Toulouse
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="attachant" className="chip" />
                <Chip label="sociable" className="chip" />
                <Chip label="joueur" className="chip" />
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
      

      {/* petit bouton carte */}
      <div style={{ position: 'fixed', bottom: '10%', left: '50%', transform: 'translate(-50%, 50%)', textAlign: 'center' }}>
        <Button component={Link} to="/Carte" variant="contained" color="primary" style={{backgroundColor: '#897F66', color: '#ffffff', borderRadius: '50px'}}>
          <RoomIcon /> Carte
        </Button>
      </div>
    </div>
  );
}

export default Accueil;

