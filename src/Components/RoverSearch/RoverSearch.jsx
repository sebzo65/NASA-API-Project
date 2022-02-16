import { useState } from "react";
import styles from "./RoverSearch.module.scss";
import { Button } from "react-bootstrap";

const RoverSearch = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    onSubmit(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleButtonClick();
    }
  };

  return (
    <div>
      <div className={styles.inputBox}>
        <label htmlFor="input"></label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className={styles.input}
          name="input"
        ></input>
        <div>
          <Button
            onClick={handleButtonClick}
            className={styles.button}
            variant="secondary"
            size="lg"
          >
            SEARCH
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoverSearch;
