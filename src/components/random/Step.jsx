import React from 'react';
import './index.css'

const Step = ({ currentStep, selectedOption, onOptionSelect }) => {
  const renderButtons = (options) => {
    return options.map((option) => (
      <button
        key={option}
        className={`btn btn-outline-primary me-2 ${selectedOption === option ? 'active' : ''}`}
        onClick={() => onOptionSelect(currentStep, option)}
      >
        {option}
      </button>
    ));
  };

  switch (currentStep) {
    case 1:
      return (
        <div>
          <h2>Select Gender</h2>
          <div className="d-flex">{renderButtons(['Male', 'Female', 'Other'])}</div>
        </div>
      );
    case 2:
      return (
        <div>
          <h2>Select Age Range</h2>
          <div className="d-flex">{renderButtons(['0-10', '11-20', '21-30', '31-40', '41+'])}</div>
        </div>
      );
    case 3:
      return (
        <div>
          <h2>Select Relationship</h2>
          <div className="d-flex">{renderButtons(['Friend', 'Lover', 'Family', 'Colleague'])}</div>
        </div>
      );
    case 4:
      return (
        <div>
          <h2>Select Budget</h2>
          <div className="d-flex">{renderButtons(['< $20', '$20-50', '$50-100', '$100+'])}</div>
        </div>
      );
    default:
      return null;
  }
};

export default Step;
