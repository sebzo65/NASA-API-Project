import { useState, useEffect } from "react";
import LandsatSearch from "../../Components/LandsatSearch";
import styles from "./LandsatImages.module.scss";

const key = "GJ18rhBDoC1WeHfexEhTSsZh18xsgmlr3w25Rr3i";
const LandsatImages = () => {
  //Longitude, Latitude & Date SearchBar functionality for Earth API
  const [longitude, setLongitude] = useState(-110.8358417);
  // const [latitude, setLatitude] = useState(1.5);
  // const [date, setDate] = useState("2014-02-01");
  //

  //Earth API (Landsat Images from coordinates)
  const [landsat, setLandsat] = useState(null);

  useEffect(() => {
    const renderLandsat = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=32.1499889&date=2020-11-01&&dim=0.155&api_key=${key}`
      );
      console.log("response: ", response);
      const landsatData = await response.json();
      console.log("landsatData: ", landsatData);
      setLandsat(landsatData);
    };
    renderLandsat();
  }, [longitude]);
  // }, [longitude, latitude, date]);
  console.log("Landsat-Imagery state: ", landsat);

  console.log(longitude);
  const handleSubmit = (newSearchValue) => {
    setLongitude(newSearchValue);
    // setLatitude(newSearchValue);
    // setDate(newSearchValue);
  };

  return (
    <div>
      <h1 className={styles.title}>
        Find satellite images of your favourite place!
      </h1>
      <LandsatSearch onSubmit={handleSubmit} />
      {landsat && (
        <img src={landsat.url} alt="test" className={styles.landsatPic} />
      )}
    </div>
  );
};

export default LandsatImages;
