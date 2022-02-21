import { useState, useEffect } from "react";
import RoverPics from "../../Components/RoverPics";
import styles from "./MarsRover.module.scss";
import { Button, ButtonGroup } from "react-bootstrap";
import SearchBar from "../../Components/SearchBar";

const MarsRover = () => {
  //Mars Rover API
  const [roverPics, setRoverPics] = useState(null);

  const [roverCam, setRoverCam] = useState(null);

  const KEY = "hbPQ19sazeu8aw1jzXpzwP75767IXCrZlw06sR7A";
  // const DEMO = "DEMO_KEY";

  //Search functionality for rover images based on Martian Sol
  const [search, setSearch] = useState(1000);
  const handleSubmit = (newSearch) => {
    setSearch(newSearch);
  };

  useEffect(() => {
    const getRoverPics = async () => {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${search}&&camera=${roverCam}&api_key=${KEY}`
      );
      const data = await response.json();
      setRoverPics(data);
    };
    getRoverPics();
  }, [roverCam, search]);

  const handleClick = (e) => {
    setRoverCam(e.target.value);
  };
  console.log(roverPics);

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

  //Function to randomise image selection
  function randomiseImg(arr) {
    let newArr = [];
    const limit = 8;
    //Specify how many pics to render
    for (let i = 0; i < limit; i++) {
      let randomNum = Math.floor(Math.random() * arr.length);
      if (!newArr.includes(randomNum)) {
        newArr.push(randomNum);
      }
    }

    //If new Arr is less than original Arr, fill out the rest of the photos
    if (newArr.length < limit) {
      for (let i = 0; i < limit - newArr.length; i++) {
        if (!newArr.includes(i) && newArr.length <= limit) {
          newArr.push(i);
        }
      }
    }

    return newArr;
  }

  return (
    <div className={styles.page}>
      <h2 className={styles.header}>
        Photos taken on Curiosity's {search}th Martian Sol Expedition
      </h2>
      <SearchBar onSubmit={handleSubmit} />
      <div className={styles.btnGroup}>
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
      </div>
      <div className={styles.roverGallery}>
        {roverPics &&
          roverPics.photos
            .filter((pics, index) =>
              randomiseImg(roverPics.photos).includes(index)
            )
            .map((pic, index) => <RoverPics roverPics={pic} key={index} />)}
      </div>
    </div>
  );
};

export default MarsRover;
