import { Button } from "react-bootstrap";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ handleInputChange, handleButtonClick, inputValue }) => {
  return (
    <>
      <div className={styles.searchText}>
        <p>Search the Gallery!</p>
      </div>
      <div className={styles.inputBox}>
        <label for="input"></label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
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
