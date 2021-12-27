import { useState, useEffect } from "react";
import LandsatSearch from "../../Components/LandsatSearch";

const LandsatImages = () => {
  //Longitude SearchBar functionality for Earth API
  const [longitude, setLongitude] = useState(100.75);
  const [latitude, setLatitude] = useState(1.5);
  const [date, setDate] = useState("2014-02-01");
  //
  const handleSubmit = (newSearchValue) => {
    setLongitude(newSearchValue);
    setLatitude(newSearchValue);
    setDate(newSearchValue);
  };

  //Earth API (Landsat Images from coordinates)
  const [landsat, setLandsat] = useState(null);

  useEffect(() => {
    const renderLandsat = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&${date}&api_key=dNmdVqWGeHJ2klLNWXyfZfSqUX6OB4IJXqmw6dlZ`
      );
      const landsatData = await response.json();
      setLandsat(landsatData);
    };
    renderLandsat();
  }, [longitude, latitude, date]);
  console.log(landsat);
  return (
    <div>
      <LandsatSearch onSubmit={handleSubmit} />
    </div>
  );
};

export default LandsatImages;
