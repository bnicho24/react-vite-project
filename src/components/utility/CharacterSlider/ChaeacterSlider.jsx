import React, { useState } from "react";

function CharacterSlider({ totalPoints }) {
  const [strength, setStrength] = useState(0);
  const [speed, setSpeed] = useState(0);

  const handleAttributeChange = (event, attributeName) => {
    const NewValue = parseInt(event.target.value, 10);
    if (attributeName === "strength") {
      setStrength(NewValue);
      if (NewValue + speed > totalPoints) {
        setSpeed(totalPoints - NewValue);
      }
    } else if (attributeName === "speed") {
      setSpeed(NewValue);
      if (strength + NewValue > totalPoints) {
        setStrength(totalPoints - NewValue);
      }
    }
  };

  return (
    <div>
      Character stats: <span id="points">{totalPoints - speed - strength}</span>{" "}
      points
      <div>
        <input
          type="range"
          id="strength"
          min="0"
          max={totalPoints}
          value={strength}
          step="1"
          onChange={(event) => handleAttributeChange(event, "strength")}
        />
        Strength {strength}
      </div>
      <div>
        <input
          type="range"
          id="speed"
          min="0"
          max={totalPoints}
          value={speed}
          step="1"
          onChange={(event) => handleAttributeChange(event, "speed")}
        />
        Speed {speed}
      </div>
    </div>
  );
}

export default CharacterSlider;
