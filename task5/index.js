import React, { useEffect, useState } from 'react';

function App() {
  var [fuel, setFeul] = useState(0);
  var [alertText, setAlertTxt] = useState('Processing...');

  useEffect(() => {
    fetch('https://new.world.com/fleet/121')
      .then(response => response.json())
      .then(json => {
        setFeul(json);
        console.log(json);
      })
  });
  
  useEffect(() => {
    if (!fuel) setAlertTxt('Processing...'); else
    if (fuel.litres > 0) setAlertTxt('Need to buy more fuel'); else
    setAlertTxt('All is fine');
  }, [fuel])

  return (
    <div>
      <h1 style={alertText == 'Need to buy more fuel'? {color:"red"}:{}}>{alertText}</h1>
    </div>
  );

}

export default App;

/**
 * CODE REVIEW BY DIEGO:
 * Lines 4 and 5 should use const instead of var, because they are states;
 * Line 14 useEffect should have a setFeul as a dependency;
 * Lines 17 and 18 can't have an else in the same line without curly braces;
 * Line 24 equal comparison should be === instead of ==.
 */