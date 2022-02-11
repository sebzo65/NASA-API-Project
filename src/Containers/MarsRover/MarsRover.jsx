import { useState, useEffect } from "react";
import RoverPics from "../../Components/RoverPics";
import styles from "./MarsRover.module.scss";
import { Button, ButtonGroup } from "react-bootstrap";

const MarsRover = () => {
  //Mars Rover API
  const [roverPics, setRoverPics] = useState(null);

  const [roverCam, setRoverCam] = useState(null);

  // const KEY = "GJ18rhBDoC1WeHfexEhTSsZh18xsgmlr3w25Rr3i";

  useEffect(() => {
    const getRoverPics = async () => {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&&camera=${roverCam}&api_key=DEMO_KEY`
      );
      const data = await response.json();
      setRoverPics(data);
    };
    getRoverPics();
  }, [roverCam]);

  const handleClick = (e) => {
    setRoverCam(e.target.value);
  };

  // const cleanedRoverPics = (data) => {
  //   let newArr = [];
  //   if (data !== null && data.photos.length > 0) {
  //     for (let i = 0; i < data.photos.length; i++) {
  //       if (data.photos[i].id !== data.photos[i + 1].id) {
  //         newArr.push(data.photos[i]);
  //       }
  //     }
  //   }
  //   return newArr;
  // };

  // if (roverPics !== null) {
  //   console.log(cleanedRoverPics(roverPics));
  // }

  // let newRoverPics = cleanedRoverPics(roverPics.photos);

  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={handleClick}>
          FHAZ
        </Button>
        <Button variant="secondary" onClick={handleClick}>
          NAVCAM
        </Button>
        <Button variant="secondary" onClick={handleClick}>
          MAST
        </Button>
      </ButtonGroup>
      <div className={styles.roverGallery}>
        {roverPics &&
          roverPics.photos
            .filter((pics, index) => index < 4)
            .map((pic, index) => <RoverPics roverPics={pic} key={index} />)}
      </div>
    </div>
  );
};

export default MarsRover;
