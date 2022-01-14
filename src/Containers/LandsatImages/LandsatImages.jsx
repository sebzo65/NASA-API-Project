import { useState, useEffect } from "react";
import LandsatSearch from "../../Components/LandsatSearch";
import styles from "./LandsatImages.module.scss";
import { Row, Col, Card } from "react-bootstrap";

const key = "GJ18rhBDoC1WeHfexEhTSsZh18xsgmlr3w25Rr3i";
const LandsatImages = () => {
  // api call for landsat imagery
  const [landSatImagery, setLandSatImagery] = useState(null);

  // lat = N and S
  // lon = E and W

  // longitude state
  const [longSearch, setLongSearch] = useState(-110.8358417);
  // latitude state
  const [latSearch, setLatSearch] = useState(32.1499889);

  useEffect(() => {
    const getLandSatImagery = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/earth/assets?lon=${longSearch}&lat=${latSearch}&date=2020-11-01&&dim=0.1&api_key=${key}`
      );
      console.log("response:", response);
      const data = await response.json();
      console.log("data:", data);
      setLandSatImagery(data);
    };
    getLandSatImagery();
  }, [longSearch, latSearch]); // watch the search states

  console.log("landsatimagery state:", landSatImagery);

  // function handler which we will pass down to our search component, allowing us to update the state.
  const handleLongSubmit = (longValue) => {
    setLongSearch(longValue);
  };
  // latitude handler
  const handleLatSubmit = (latValue) => {
    setLatSearch(latValue);
  };

  console.log("longSearch:", longSearch);
  console.log("latSearch:", latSearch);

  return (
    <div>
      <h1 className={styles.landSatTitle}>LandSat Imagery</h1>
      <LandsatSearch onSubmit={(handleLongSubmit, handleLatSubmit)} />
      {landSatImagery && <p>{landSatImagery.msg}</p>}
      {landSatImagery && (
        <img
          src={landSatImagery.url}
          alt="LandSat Photograph"
          className={styles.landSatPic}
        />
      )}
      <div className={styles.cardGallery}>
        <Row xs={1} md={4} className="g-4">
          {/* {Array.from({ length: 1 }).map((_, idx) => ( */}
          <Col>
            <Card className={styles.card}>
              <Card.Img
                className={styles.cardPic}
                variant="top"
                src="https://th.bing.com/th/id/OIP.LpScLQqmB9UKlxrkKbcMqgHaEK?pid=ImgDet&rs=1"
              />
              <Card.Body>
                <Card.Title>Chernobyl</Card.Title>
                <Card.Text>Latitude: 56.375149, Longitude: 36.548851</Card.Text>
                <Card.Text>
                  The Chernobyl disaster was a nuclear accident that occurred on
                  26 April 1986 at the No. 4 reactor in the Chernobyl Nuclear
                  Power Plant, near the city of Pripyat in the north of the
                  Ukrainian SSR in the Soviet Union.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* ))} */}
        </Row>
        <Card className={styles.card}>
          <Card.Img
            className={styles.cardPic}
            variant="top"
            src="https://i1.wp.com/blissofasia.com/wp-content/uploads/2019/09/cropped-Imamzadeh-Saleh.jpg?fit=1279%2C721&ssl=1"
          />
          <Card.Body>
            <Card.Title>Tehran</Card.Title>
            <Card.Text>Latitude: 35.689198, Longitude: 51.388973</Card.Text>
            <Card.Text>
              Tehran is the capital of Iran and Tehran Province. With a
              population of around 8.7 million in the city and 15 million in the
              larger metropolitan area of Greater Tehran, Tehran is the most
              populous city in Iran and Western Asia, and has the second-largest
              metropolitan area in the Middle East, after Cairo
            </Card.Text>
          </Card.Body>
        </Card>
        <Row xs={1} md={4} className="g-4">
          {/* {Array.from({ length: 1 }).map((_, idx) => ( */}
          <Col>
            <Card className={styles.card}>
              <Card.Img
                className={styles.cardPic}
                variant="top"
                src="https://i2.wp.com/wheelchairtravel.org/wp-content/uploads/2020/01/moscow-v2020-header.jpg?fit=1920%2C1024&ssl=1"
              />
              <Card.Body>
                <Card.Title>Moscow</Card.Title>
                <Card.Text>Latitude: 55.75222, Longitude: 37.61556</Card.Text>
                <Card.Text>
                  Moscow is the capital and largest city of Russia. The city
                  stands on the Moskva River in Central Russia, with a
                  population estimated at 12.4 million residents within the city
                  limits, over 17 million residents in the urban area, and over
                  20 million residents in the metropolitan area.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* ))}  */}
        </Row>
        <Card className={styles.card}>
          <Card.Img
            className={styles.cardPic}
            variant="top"
            src="https://media.cntraveler.com/photos/5b202d63874bbd7572c7e5bb/master/w_1200,c_limit/Chengdu-China_GettyImages-510901343.jpg?mbid=social_retweet"
          />
          <Card.Body>
            <Card.Title>Chengdu</Card.Title>
            <Card.Text>Latitude: 30.66667, Longitude: 104.06667</Card.Text>
            <Card.Text>
              Chengdu is a sub-provincial city which serves as the capital of
              the Chinese province of Sichuan. It is one of the six
              most-populous cities in China. As of November 2020, the permanent
              resident population of Chengdu is 20.937 million, the largest in
              Sichuan and the sixth largest in China.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default LandsatImages;
