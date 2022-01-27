import { useState, useEffect } from "react";
import RoverPics from "../../Components/RoverPics";

const MarsRover = () => {
  //Mars Rover API
  const [roverPics, setRoverPics] = useState("");

  const KEY = "mgCzn4vdY8LralpHVwIKBPydQIDt6LXodanpsy10";

  useEffect(() => {
    const getRoverPics = async () => {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${KEY}`
      );
      const data = await response.json();
      setRoverPics(data);
    };
    getRoverPics();
  }, []);
  console.log(roverPics);
  return (
    <div>
      <RoverPics roverPics={roverPics} />
    </div>
  );
};

export default MarsRover;
