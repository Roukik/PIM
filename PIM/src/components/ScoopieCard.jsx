import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#EAE3D3', borderRadius: 10, boxShadow: 'none'  }}> {/* Changer la couleur de l'arrière-plan */}
      <CardContent>
        <Typography variant="h5" component="div">
        Scoopie, 1 an
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Race non identifiée
        </Typography>
        <Typography variant="body2">
        SPA de Toulouse
          <br />
          {' 6, impasse Marie Laurencin 31200 Toulouse'}
        </Typography>
        
      </CardContent>
    </Card>
  );
}
