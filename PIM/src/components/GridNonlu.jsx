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
  color: 'green', // Couleur du texte en gris
  display: 'flex',
  flexDirection: 'column',
  alignItems: '', // Centrer verticalement les éléments
    // Ajouter position relative pour positionner TextRight
}));

const TextRight = styled('div')({
    position: 'absolute',
    right: '50px',
    fontFamily: 'Poppins',
    fontSize: '10px',
    marginTop: '14px'
});


const TextContainer = styled('div')({
  display: 'block',
});

const Text1 = styled('div')({
    fontSize: '16px', 
    fontFamily: 'Poppins', 
    color: '#1F330A', 
    fontWeight: '500'
  });
  
  const Text2 = styled('div')({
    fontSize: '12px', 
    fontFamily: 'Poppins', 
    color: '#7D7878', 
    fontWeight: '400'
  });

  function FormRow({ text1, text2, text3, index }) {
      // Déterminez la couleur de fond en fonction de l'index de l'élément
      const backgroundColor = index < 3 ? '#EAE3D3' : ''; // Couleur spécifiée pour les trois premiers éléments
      
      return (
        <React.Fragment>
          <Grid item xs={11} style={{ marginLeft: '0px' }}> {/* Ajoutez le style marginLeft */}
            <Item style={{ backgroundColor }}> {/* Appliquez la couleur de fond dynamique */}
              <TextContainer>
                <Text1>{text1}</Text1> {/* Utilisez le composant Text1 avec les styles spécifiés */}
                <Text2>{text2}</Text2> 
              </TextContainer>
              <TextRight>{text3}</TextRight>
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
            <FormRow text1="Un chien peureux" text2="Un nouveau chien dans ta région !" text3="Voir plus" index={0} />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow text1="Tiger a trouvé une maison" text2="votre favori a été adopté !" text3="Voir plus" index={1} />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow text1="Coup de cœur pour Loulou ?" text2="Passez à l'action ! Planifiez une visite !" text3="6h" index={2} />
          </Grid>
        </Grid>
      </Box>
    );
  }
  
