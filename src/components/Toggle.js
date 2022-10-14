import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  const setState = () =>{
    return setIsOn((isOn) => !isOn)
  }

  return <button style={{background : (isOn ? "red" : "white")}} onClick={setState}>{isOn ? 'On' : 'Off'}</button>;
}

export default Toggle;
