import { useState } from "react";
import styles from "./LandsatSearch.module.scss";

const LandsatSearch = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  //   const handleInput = (e) => {
  //     setLatitude(e.target.value);
  //     setLongitude(e.target.value);
  //   };

  //   const handleButtonClick = () => {
  //     onSubmit(latitude, longitude);
  //   };

  //   const handleKeyPress = (e) => {
  //     if (e.key === "Enter") {
  //       e.preventDefault();
  //       handleButtonClick();
  //     }
  //   };

  return (
    <div>
      <div className={styles.inputBox}>
        <label htmlFor="input"></label>
        <input
          type="text"
          //   value={inputValue}
          //   onChange={handleInput}
          //   onKeyPress={handleKeyPress}
          className={styles.input}
          name="input"
        ></input>
      </div>
    </div>
  );
};

export default LandsatSearch;
