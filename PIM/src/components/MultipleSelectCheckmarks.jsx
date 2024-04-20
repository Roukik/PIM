import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const dogBreeds = [
  'Indifférent',
  'Labrador Retriever',
  'German Shepherd',
  'Golden Retriever',
  'French Bulldog',
  'Bulldog',
  'Poodle',
  'Beagle',
  'Rottweiler',
  'German Shorthaired Pointer',
  'Dachshund',
];

export default function MultipleSelectCheckmarks() {
  const [selectedBreeds, setSelectedBreeds] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedBreeds(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Types de chien</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedBreeds}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {dogBreeds.map((breed) => (
            <MenuItem key={breed} value={breed}>
              <Checkbox checked={selectedBreeds.indexOf(breed) > -1} />
              <ListItemText primary={breed} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

