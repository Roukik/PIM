import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  textAlign: 'start',
  color: 'gray', // Couleur du texte en gris
  display: 'flex',
  flexDirection: 'column',
  alignItems: '', // Centrer verticalement les éléments
   // Ajouter position relative pour positionner TextRight
}));

const TextRight = styled('div')({
  position: 'absolute',
  right: '50px',
});

const TextContainer = styled('div')({
  display: 'block',
});

function FormRow({ text1, text2, text3}) {
  return (
    <React.Fragment>
      <Grid item xs={11} style={{ marginLeft: '15px' }}> {/* Ajoutez le style marginLeft */}
        <Item>
          <TextContainer>
            <div>{text1}</div>
            <div>{text2}</div>
          </TextContainer>
          <TextRight>{text3}</TextRight>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow text1="Un chien peureux" text2="Un nouveau chien dans ta région !" text3="Voir plus" />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow text1="Tiger a trouvé une maison" text2="votre favori a été adopté !" text3="Voir plus" />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow text1="Coup de cœur pour Loulou ?" text2="Passez à l'action ! Planifiez une visite !" text3="6h" />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow text1="Lola a trouvé une maison" text2="votre favori a été adopté !" text3="2j"/>
        </Grid>
        <Grid container item spacing={3}>
          <FormRow text1="Un chien affectueux" text2="Un nouveau chien dans ta région !" text3="2j"/>
        </Grid>
        <Grid container item spacing={3}>
          <FormRow text1="Un Teckel dans votre région!" text2="Il cherche une famille aimante" text3="5j"/>
        </Grid>
        <Grid container item spacing={3}>
          <FormRow text1="Kiki a trouvé une maison !" text2="votre favori a été adopté !" text3="7j"/>
        </Grid>
      </Grid>
    </Box>
  );
}
