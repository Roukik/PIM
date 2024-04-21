import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#EAE3D3', borderRadius: 10, boxShadow: 'none'  }}> {/* Changer la couleur de l'arrière-plan */}
      <CardContent>
        <Typography variant="h5" component="div">
        Refuge ATPA - SPA Toulouse
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Refuge pour animaux à Toulouse
        </Typography>
        <Typography variant="body2">
        Tel de l’accueil :
          <br />
          {'Mail de l’accueil : '}
          <br />
          {'Adresse : '}
        </Typography>
        <br />
        <Typography variant="body3">
        Horaires :
          <br />
          {'Du lundi au samedi de 14h et 17h45. (Fermé le dimanche et jours fériés) '}
        </Typography>
        
      </CardContent>
    </Card>
  );
}