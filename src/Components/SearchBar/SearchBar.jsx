import { Button } from "react-bootstrap";
import styles from "./SearchBar.module.scss";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
    <>
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
    </>
  );
};

export default SearchBar;
