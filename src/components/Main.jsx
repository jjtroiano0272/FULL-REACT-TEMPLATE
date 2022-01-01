import React, { useState } from 'react';
import Die from './Die';

export default function Main(props) {
  const rollResult = ((Math.random() * 10) % 6).toPrecision(1);
  const [diceValues, setDiceValues] = useState(allNewDice(10));

  function allNewDice(numDice) {
    return Array.from({ length: numDice }, () => Math.ceil(Math.random() * 6));
  }

  return (
    <div className='container'>
      <div className='container bg-light rounded text-dark text-center p-5'>
        <h1>Tenzies</h1>
        <div className='row my-2'>
          {/* map render 5 here */}
          {/* TODO: This might cause some issues */}
          {/* TODO: Offload this into a Dice.jsx component that captures Die.jsx and 
                    takes numRows, numCols params, so that this below formatting will 
                    automatically be determined  */}
          {allNewDice(5).map((item) => (
            <div className='col'>
              <button className='btn btn-md btn-secondary'>
                <Die key={item} value={item.toString()} />
              </button>
            </div>
          ))}
        </div>
        <div className='row my-2'>
          {allNewDice(5).map((item) => (
            <div className='col'>
              <button className='btn btn-md btn-secondary'>
                <Die key={item} value={item.toString()} />
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
