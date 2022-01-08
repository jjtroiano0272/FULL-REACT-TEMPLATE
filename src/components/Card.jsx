import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';

export default function Card({
  id = nanoid(),
  question,
  incorrect_answers,
  correct_answer,
}) {
  const choices = incorrect_answers.concat(correct_answer);
  const [userData, setUserData] = useState({
    numQuestions: 0,
  });
  const [selected, setSelected] = useState(false);

  function selectChoice(choice) {
    console.log('Choice selected! Now switching to next card in deck...');
    console.log('Selected: ', choice);
    // Set userSelections in state to this choice for the question
    setSelected(true);

    // Progress to next slide
    // console.log(carouselRef);
    // carouselRef.next();
  }

  function randomizeChoices(items) {
    return items.sort(item =>
      item.type === 'multiple' ? Math.random - 0.5 : item
    );
    // Except if T/F, print in the order of T/F
    // .filter((item) => item.type === 'multiple')
  }

  return (
    // <li
    //   data-target='#carouselExampleIndicators'
    //   data-slide-to={id}
    //   // className={id === 1 && 'active'}
    // >
    <div className='card bg-light text-dark mb-3 my-5 mx-4'>
      {/* <div className='card-badge bg-light text-dark'>{badgeText}</div> */}

      {/* FIXME:  */}
      <div className='card-body'>
        <h5
          className='card-title d-flex mb-4'
          dangerouslySetInnerHTML={{ __html: question }}
        />

        <Stack spacing={2} direction='column'>
          {/* If selected, variant is 'contained' */}

          {randomizeChoices(choices).map(choice => (
            <Button variant='outlined' onClick={() => selectChoice(choice)}>
              {choice}
            </Button>
          ))}
        </Stack>
      </div>
    </div>
    // </li>
  );
}
