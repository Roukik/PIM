import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function BasicSelect() {
  const [department, setDepartment] = React.useState('');

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  const departments = [
    { code: '31', name: 'Haute-Garonne' },
    { code: '32', name: 'Gers' },
    { code: '09', name: 'Ariège' },
    { code: '81', name: 'Tarn' },
    { code: '75', name: 'Paris' },
    { code: '92', name: 'Hauts-de-Seine' },
    { code: '94', name: 'Val-de-Marne' },
    { code: '93', name: 'Seine-Saint-Denis' },
    // Ajoutez d'autres départements si nécessaire
  ];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Département</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="Département"
          onChange={handleChange}
        >
          {departments.map((dept) => (
            <MenuItem key={dept.code} value={dept.code}>
              {dept.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        disableElevation
        style={{
          width: '100%',
          borderRadius: '16px',
          color: '#897F66',
          backgroundColor: '#EAE3D3',
          border: '2px solid #897F66',
          marginTop: '16px',
        }}
      >
        Suivant
      </Button>
    </Box>
  );
}

