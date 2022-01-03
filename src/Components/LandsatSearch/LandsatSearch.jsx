// import { useState } from "react";
// import styles from "./LandsatSearch.module.scss";
// import { Button } from "react-bootstrap";

const LandsatSearch = ({ onSubmit }) => {
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");
  // const [date, setDate] = useState("");

  // const handleLatInput = (e) => {
  //   setLatitude(e.target.value);
  // };

  // const handleLongInput = (e) => {
  //   setLongitude(e.target.value);
  // };

  // const handleDateInput = (e) => {
  //   setDate(e.target.value);
  // };

  // const handleButtonClick = () => {
  //   onSubmit(latitude, longitude);
  // };

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //     handleButtonClick();
  //   }
  // };

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
        ></input>
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
          value={longitude}
          onChange={handleLongInput}
          onKeyPress={handleKeyPress}
          className={styles.longInput}
          name="longInput"
        ></input>
        <div>
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
