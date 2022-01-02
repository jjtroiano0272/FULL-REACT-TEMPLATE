import React, { useState } from 'react';
import Die from './Die';

export default function Dice({ diceArr, rows, cols }) {
  const [diceValues, setDiceValues] = useState(allNewDice(10));

  return (
    <div className='row my-2'>
      {diceArr(5).map((die) => (
        <div className='col' key={die.id}>
          <button className='btn btn-md btn-secondary'>
            <Die value={JSON.stringify(die.value)} />
          </button>
        </div>
      ))}
    </div>
  );
}
