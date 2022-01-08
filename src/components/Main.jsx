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
  // TODO: Why the hell does setting it to an empty array cause it to function?
  const [triviaData, setTriviaData] = useState([]);
  const [takingQuiz, setTakingQuiz] = useState(false);
  // Here we'll set numQuestions, difficulty,
  const [userPreferences, setUserPreferences] = useState({
    numQuestions: 10,
    difficulty: 'hard',
  });
  // TODO: After loop, store userPreferences in localstorage and just re-read it, with an option to change this at the top.
  const apiEndpoint = `https://opentdb.com/api.php?amount=${userPreferences.numQuestions}&difficulty=${userPreferences.difficulty}`;

  useEffect(() => {
    async function getData() {
      await axios
        .get(apiEndpoint)
        .then(response => setTriviaData(response.data.results))
        .catch(err => alert('Whoa! Something done goofed! ', err));
    }

    getData();

    const myVar = localStorage.getItem('userPreferences');
    // setUserPreferences(myVar);
  }, [userPreferences]);

  // Checking user settings
  // useEffect(() => {
  //   const myVar = localStorage.getItem('userPreferences');
  //   setUserPreferences(myVar);
  // }, [userPreferences]);

  function handleSelect(id) {
    return true;
  }

  async function renderChoices(data) {
    const numChoices =
      data.correct_answer.length + data.incorrect_answers.length;

    return (
      // Filter the keys by 'correct_answer' and 'incorrect_answers' to return one array with the choices back
      // const result = words.filter(word => word.length > 6);

      <div></div>
    );
  }

  const handleChangeQuestions = event => {
    setUserPreferences({ numQuestions: event.target.value });
    // (event.target.value);
    console.log(
      'Select box used. Set a user preference:\n\t',
      userPreferences.numQuestions
    );
  };

  const handleChangeDifficulty = event => {
    setUserPreferences({ difficulty: event.target.value });
  };

  return (
    <div className='container'>
      {/* Conditionally render gameLoop */}
      {!takingQuiz ? (
        <div>
          {/* Dropdown menu */}
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id='demo-simple-select-label'>
              Number of Qustions
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={userPreferences.numQuestions}
              label='Number of Questions'
              onChange={handleChangeQuestions}
            >
              {[...Array(30).keys()].map(num => (
                <MenuItem value={num}>{num}</MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Selecting Difficulty */}
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id='select-label-difficulty'>Difficulty</InputLabel>
            <Select
              labelId='select-label-difficulty'
              id='select-difficulty'
              value={userPreferences.difficulty}
              label='Difficulty'
              onChange={handleChangeDifficulty}
            >
              {['Easy', 'Normal', 'Hard'].map(choice => (
                <MenuItem value={choice.toLowerCase()}>{choice}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            style={{ marginTop: '5rem' }}
            variant='contained'
            size='large'
            fullWidth
            onClick={() => setTakingQuiz(true)}
          >
            START
          </Button>
        </div>
      ) : (
        // render all the stuff we've been using
        <div>
          <CardDeck data={triviaData} />
          <Box textAlign='center'>
            <Button
              className='text-muted mt-2'
              onClick={() => setTakingQuiz(false)}
            >
              RESET
            </Button>
          </Box>
        </div>
      )}

      {/* TODO: probably offload this */}
      {/* TODO: Might need a toggleSelect prop */}
      {/* TODO: Also might want to just offload this all into a renderSelections function */}
    </div>
  );
}
