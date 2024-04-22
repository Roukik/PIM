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
        30 avril 2024
        </Typography>
        
      </CardContent>
    </Card>
  );
}