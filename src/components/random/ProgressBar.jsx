import React from 'react';
import './index.css'

const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-bar-container position-relative mb-4">
      <div
        className="position-absolute top-right-text"
        style={{ left: `calc(${percentage}% - 2rem)` }} // Adjust position based on percentage
      >
        <i className="fa-solid fa-robot fa-bounce fa-xl"></i>
      </div>
      <div className="progress" style={{ height: '1.5rem' }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percentage.toFixed(0)}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
