import React, { useEffect, useState } from "react";

export const PreComprehension = ({ data }) => {
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const isOptionCorrect = () => {
    const correctOption = data.answer;
    if(selectedOption === correctOption){
        setCorrectAnswer(true);
    }else{
        setCorrectAnswer(false);
    }
  }
  

  useEffect(() => {
    setOptions(data.options);
  }, []);

  return (
    <div className="flex justify-start mt-5">
      <ul className="flex flex-col items-start m-3">
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="options"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="mr-5"
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      {selectedOption && (
        <p>
          Selected Option: {selectedOption} | Correct:{" "}
          {isOptionCorrect() ? "Yes" : "No"}
        </p>
      )}
    </div>
  );
};
