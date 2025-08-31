import React, { useState } from "react";

function Events() {
  const [inputValue, setInputValue] = useState("");
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`was The Enter keypressed, your input is ${inputValue}`);
    }
  };
    const handleClick  = () => {
        setIsToggleOn(!isToggleOn);
    }

  return (
    <div>
      <button onClick={clickMe}>click Me</button>
      <br />
      <br />
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Press the ENTER key!"
        />
      </form>
      <br/>
      <button onClick={handleClick }>{isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default Events;
