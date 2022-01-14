import { useState } from "react";
import styles from "./LandsatSearch.module.scss";

const LandsatSearch = ({ onSubmit }) => {
  // state for long value
  const [longValue, setLongValue] = useState("");
  //handler to keep track of input value
  const handleLongChange = (event) => {
    setLongValue(event.target.value);
  };
  // update our search state after clicking button
  const handleButtonClick = () => {
    onSubmit(longValue);
    onSubmit(latValue);
  };

  console.log("longValue", longValue);

  // state for lat value
  const [latValue, setLatValue] = useState("");
  // handler to track lat input value
  const handleLatChange = (event) => {
    setLatValue(event.target.value);
  };
  console.log("latValue", latValue);

  return (
    <div>
      <div className={styles.searchBar}>
        <div>
          <label>Longitude</label>
          <input type="text" onChange={handleLongChange} />
        </div>
        <div>
          <label>Latitude</label>
          <input type="text" onChange={handleLatChange} />
        </div>
        {/* <div>
                <p>Date</p>
                <input type="text" />
            </div> */}
        <div>
          <button onClick={handleButtonClick}>Search!</button>
        </div>
      </div>
      <p className={styles.latLongInfo}>
        Latitude and longitude are a pair of numbers (coordinates) used to
        describe a position on the plane of a geographic coordinate system. The
        numbers are in decimal degrees format and range from -90 to 90 for
        latitude and -180 to 180 for longitude.
      </p>
    </div>
  );
};

export default LandsatSearch;
