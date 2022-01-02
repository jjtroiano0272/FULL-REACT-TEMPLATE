import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Die from './Die';
// error

export default function Main(props) {
  const [diceValues, setDiceValues] = useState(allNewDice(10));

  function allNewDice(numDice) {
    // return Array.from({ length: numDice }, () => Math.ceil(Math.random() * 6));
    const newDiceArr = [];

    function toggleHold() {
      newDiceArr;
    }

    // TODO: Can this be more elegant? Array.from
    for (let i = 0; i < numDice; i++) {
      newDiceArr.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }

    return newDiceArr;
  }

  function toggleHold() {
    console.log('die clicked');
  }

  return (
    <div className='container'>
      <div className='container bg-light rounded text-dark text-center p-5'>
        <h1>Tenzies</h1>
        {/* map render 5 here */}
        {/* TODO: This might cause some issues */}
        {/* TODO: Offload this into a Dice.jsx component that captures Die.jsx and 
                    takes numRows, numCols params, so that this below formatting will 
                    automatically be determined  */}
        <div className='row my-2'>
          {allNewDice(5).map((die) => (
            <div className='col' key={die.id}>
              <button
                className='btn btn-md btn-secondary'
                onClick={() => {
                  die.isHeld(!die.isHeld);
                  console.log(die.isHeld);
                }}
              >
                <Die value={JSON.stringify(die.value)} />
              </button>
            </div>
          ))}
        </div>
        <div className='row my-2'>
          {allNewDice(5).map((die) => (
            <div className='col' key={die.id}>
              <button
                className='btn btn-md btn-secondary'
                onClick={() => toggleHold()}
              >
                <Die value={die.value} />
              </button>
            </div>
          ))}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          reiciendis modi ut vero repudiandae facere in eligendi officiis
          expedita velit, eos saepe voluptate tempora iure voluptatibus earum
          natus repellendus temporibus.
        </p>
        <button
          className='btn btn-primary btn-fluid'
          onClick={() => setDiceValues(allNewDice(10))}
        >
          ROLL
        </button>
      </div>
    </div>
  );
}
