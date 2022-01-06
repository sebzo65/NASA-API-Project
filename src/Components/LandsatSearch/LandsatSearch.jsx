import { useState } from "react";
import styles from "./LandsatSearch.module.scss";
import { Button } from "react-bootstrap";

const LandsatSearch = ({ onSubmit }) => {
  // const [latitudeInput, setLatitudeInput] = useState("");
  const [longitudeInput, setLongitudeInput] = useState("");
  // const [dateInput, setDateInput] = useState("");

  // const handleLatInput = (e) => {
  //   setLatitudeInput(e.target.value);
  // };

  const handleLongChange = (e) => {
    setLongitudeInput(e.target.value);
  };

  // const handleDateInput = (e) => {
  //   setDateInput(e.target.value);
  // };

  const handleButtonClick = () => {
    onSubmit(longitudeInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleButtonClick();
    }
  };

  return (
    <div>
      {/* <div className={styles.inputBox}>
        <label htmlFor="latInput"></label>
        <input
          type="text"
          value={latitude}
          onChange={handleLatInput}
          onKeyPress={handleKeyPress}
          className={styles.latInput}
          name="latInput"
        ></input>*/}
      <Button
        onClick={handleButtonClick}
        className={styles.button}
        variant="secondary"
        size="lg"
      >
        SEARCH
      </Button>
      <label htmlFor="longInput"></label>
      <input
        type="text"
        onChange={handleLongChange}
        onKeyPress={handleKeyPress}
        className={styles.longInput}
        name="longInput"
      ></input>
      {/*<div>
          <label htmlFor="dataInput"></label>
          <input
            type="text"
            value={date}
            onChange={handleDateInput}
            onKeyPress={handleKeyPress}
            className={styles.dateInput}
            name="dateInput"
          ></input>
        </div>
      </div> */}
    </div>
  );
};

export default LandsatSearch;
