import React from "react";
import "./index.css";

const Step = ({ currentStep, selectedOption, onOptionSelect }) => {
  const renderButtons = (options) => {
    return options.map((option) => (
      <button
        key={option}
        className={`btn btn-outline-primary me-2 ${
          selectedOption === option ? "active" : ""
        }`}
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
          <h2 className="mb-3">
            Giới tính <i class="fa-solid fa-venus-mars"></i>
          </h2>
          <div className="d-flex">{renderButtons(["Nam", "Nữ"])}</div>
        </div>
      );
    case 2:
      return (
        <div>
          <h2 className="mb-3">
            Độ tuổi <i class="fa-solid fa-calendar-days"></i>
          </h2>
          <div className="d-flex">
            {renderButtons(["0-10", "11-20", "21-30", "31-40", "41+"])}
          </div>
        </div>
      );
    case 3:
      return (
        <div>
          <h2 className="mb-3">
            Tình trạng mối quan hệ <i class="fa-regular fa-heart"></i>
          </h2>
          <div className="d-flex">
            {renderButtons(["Bạn bè", "Người yêu", "Gia đình", "Bạn học"])}
          </div>
        </div>
      );
    case 4:
      return (
        <div>
          <h2 className="mb-3">Khoảng giá</h2>
          <div className="d-flex">
            {renderButtons([
              "10,000 vnđ -> 50,000 vnđ",
              "50,000 vnđ -> 100,000 vnđ",
              "> 100,000 vnđ",
            ])}
          </div>
        </div>
      );
    case 5:
      return (
        <div>
          <h2 className="mb-3">Sự kiện</h2>
          <div className="d-flex">
            {renderButtons(["Sinh nhật", "Lễ tốt nghiệp", "Tết", "Valentine"])}
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Step;
