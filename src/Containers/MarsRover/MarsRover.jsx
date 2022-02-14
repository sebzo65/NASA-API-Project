import { useState, useEffect } from "react";
import RoverPics from "../../Components/RoverPics";
import styles from "./MarsRover.module.scss";
import { Button, ButtonGroup } from "react-bootstrap";

const MarsRover = () => {
  //Mars Rover API
  const [roverPics, setRoverPics] = useState(null);

  const [roverCam, setRoverCam] = useState(null);

  const KEY = "GJ18rhBDoC1WeHfexEhTSsZh18xsgmlr3w25Rr3i";

  useEffect(() => {
    const getRoverPics = async () => {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&&camera=${roverCam}&api_key=${KEY}`
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
  //
  //

  let newArr = [];
  function roverArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  console.log("NewArr:", newArr);
  console.log(roverArr(roverPics.photos));

  let picArr = [];
  function roverPicArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      picArr.push(arr[i].img_src);
    }
    return picArr;
  }
  console.log("roverPicArr", picArr);
  console.log(roverPicArr(newArr));

  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" value="FHAZ" onClick={handleClick}>
          Front Hazard Avoidance Camera
        </Button>
        <Button variant="secondary" value="RHAZ" onClick={handleClick}>
          Rear Hazard Avoidance Camera
        </Button>
        <Button variant="secondary" value="MAST" onClick={handleClick}>
          Mast Camera
        </Button>
        <Button variant="secondary" value="CHEMCAM" onClick={handleClick}>
          Chemistry and Camera Complex
        </Button>
        <Button variant="secondary" value="MAHLI" onClick={handleClick}>
          Mars Hand Lens Imager
        </Button>
        <Button variant="secondary" value="MARDI" onClick={handleClick}>
          Mars Descent Imager
        </Button>
        <Button variant="secondary" value="NAVCAM" onClick={handleClick}>
          Navigation Camera
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
