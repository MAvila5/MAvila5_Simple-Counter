//Import React
import React from 'react';

//Import SimpleCounter
import SimpleCounter from './SimpleCounter';

//useState, useEffect, setInterval, props
import { useState, useEffect } from 'react';


function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //Component Mounting
    const interval = setInterval(() => {
      setCounter(counter => counter + 1)
    }, 1000)
    console.log(counter)

    //Component UnMounting
    return () => clearInterval(interval);
  }, [counter])


  function calculateSeconds(aCounter, placeValue) {
    return Math.floor(aCounter / placeValue) % 10
  }


  return (
    <>
      <SimpleCounter
        tenthousandsDigit={calculateSeconds(counter, 10000)}
        thousandsDigit={calculateSeconds(counter, 1000)}
        hundredsDigit={calculateSeconds(counter, 100)}
        tensDigit={calculateSeconds(counter, 10)}
        onesDigit={calculateSeconds(counter, 1)}
      />
    </>
  );
}

export default Home;