import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardDeck from './CardDeck';

export default function Main(props) {
  return (
    <h1>
      Remember the first thing you <strong>must</strong> do is change the repo
      this pushes to! Otherwise you'll be pushing change{' '}
      <strong>to the template!!!</strong>
    </h1>
  );
}
