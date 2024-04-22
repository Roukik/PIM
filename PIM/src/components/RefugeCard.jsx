import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#EAE3D3', borderRadius: 10, boxShadow: 'none' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Refuge ATPA - SPA Toulouse
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Refuge pour animaux à Toulouse
        </Typography>
        <Typography variant="body2">
          Tel de l’accueil :05 61 47 62 60
          <br />
          {'Mail de l’accueil :accueil_spa@orange.fr '}
          <br />
          Adresse : <a href="https://maps.google.com/?q=6+impasse+Marie+Laurencin+31200+Toulouse" target="_blank">6 impasse Marie Laurencin 31200 Toulouse</a>
        </Typography>
        <br />
        <Typography variant="body3">
          Horaires :
          <br />
          Du lundi au samedi de 14h et 17h45. (Fermé le dimanche et jours fériés)
        </Typography>
      </CardContent>
    </Card>
  );
}
