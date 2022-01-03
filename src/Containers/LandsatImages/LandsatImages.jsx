import { useState, useEffect } from "react";
// import LandsatSearch from "../../Components/LandsatSearch";
import styles from "./LandsatImages.module.scss";

const key = "GJ18rhBDoC1WeHfexEhTSsZh18xsgmlr3w25Rr3i";

const LandsatImages = () => {
  //Longitude SearchBar functionality for Earth API
  // const [longitude, setLongitude] = useState(100.75);
  // const [latitude, setLatitude] = useState(1.5);
  // const [date, setDate] = useState("2014-02-01");
  //
  // const handleSubmit = (newSearchValue) => {
  //   setLongitude(newSearchValue);
  //   setLatitude(newSearchValue);
  //   setDate(newSearchValue);
  // };

  //Earth API (Landsat Images from coordinates)
  const [landsat, setLandsat] = useState(null);

  useEffect(() => {
    const renderLandsat = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/earth/assets?lon=-110.8358417
        &lat=32.1499889
        &date=2018-11-01&&dim=0.155&api_key=${key}`

        // `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&${date}&api_key=dNmdVqWGeHJ2klLNWXyfZfSqUX6OB4IJXqmw6dlZ`
      );
      const landsatData = await response.json();
      setLandsat(landsatData);
    };
    renderLandsat();
  }, []);
  // }, [longitude, latitude, date]);
  console.log("Landsat-Imagery state: ", landsat);
  return (
    <div>
      <h1 className={styles.title}>
        Find satellite images of your favourite place!
      </h1>
      {landsat && (
        <img src={landsat.url} alt="test" className={styles.landsatPic} />
      )}
    </div>
  );
};

export default LandsatImages;
