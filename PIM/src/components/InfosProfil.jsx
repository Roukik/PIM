import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'start',
  color: 'green', // Couleur du texte en gris
  display: 'flex',
  flexDirection: 'column',
  alignItems: '', // Centrer verticalement les éléments
    // Ajouter position relative pour positionner TextRight
}));




const TextContainer = styled('div')({
  display: 'block',
});

const Text1 = styled('div')({
    fontSize: '13px', 
    fontFamily: 'Nunito Sans', 
    color: '#555555', 
    fontWeight: '400'
  });
  


  function FormRow({ text1, index }) {
      // Déterminez la couleur de fond en fonction de l'index de l'élément
      const backgroundColor = index < 3 ? '#FFFFFF' : ''; // Couleur spécifiée pour les trois premiers éléments
      
      return (
        <React.Fragment>
          <Grid item xs={11} style={{ marginLeft: '10px' }}> {/* Ajoutez le style marginLeft */}
            <Item style={{ backgroundColor }}> {/* Appliquez la couleur de fond dynamique */}
              <TextContainer>
                <Text1>{text1}</Text1> {/* Utilisez le composant Text1 avec les styles spécifiés */}
              </TextContainer>
            </Item>
          </Grid>
        </React.Fragment>
      );
    }
  
  
  export default function NestedGrid() {
    return (
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={2}>
          <Grid container item spacing={3}>
            <FormRow text1="Tel : 06 59 33 38 11" index={0} />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow text1="Mail : julienriodejanero@gmail.com" index={1} />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow text1="Résidence : appartement" index={2} />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow text1="Département : île-de-France" index={2} />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow text1="Voir mes préférences" index={2} />
          </Grid>
        </Grid>
      </Box>
    );
  }
  
