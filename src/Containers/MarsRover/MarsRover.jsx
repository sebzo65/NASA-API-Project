import { useState, useEffect } from "react";
import RoverPics from "../../Components/RoverPics";

const MarsRover = () => {
  //Mars Rover API
  const [roverPics, setRoverPics] = useState(null);

  // const KEY = "GJ18rhBDoC1WeHfexEhTSsZh18xsgmlr3w25Rr3i";

  useEffect(() => {
    const getRoverPics = async () => {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=DEMO_KEY`
      );
      const data = await response.json();
      setRoverPics(data);
    };
    getRoverPics();
  }, []);
  console.log(roverPics);
  return (
    <div>
      {roverPics &&
        roverPics.photos
          .filter((pics, index) => index < 3)
          .map((pic, index) => <RoverPics roverPics={pic} key={index} />)}
    </div>
  );
};

export default MarsRover;
