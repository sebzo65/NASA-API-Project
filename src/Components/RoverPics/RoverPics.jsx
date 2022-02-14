import { Card, Row, Col } from "react-bootstrap";
import styles from "./RoverPics.module.scss";

const RoverPics = ({ roverPics }) => {
  console.log("roverPics prop: ", roverPics);
  return (
    <div>
      <div className={styles.cardGallery}>
        <Row xs={2} md={4} className="g-4">
          {/* {Array.from({ length: 4 }).map((_, idx) => ( */}

          <Col>
            <Card className={styles.card}>
              <Card.Img
                variant="top"
                src={roverPics.img_src}
                alt=""
                className={styles.cardPic}
              />
              <Card.Body className={styles.cardText}>
                <Card.Title className={styles.cardText_cardTitle}>
                  {roverPics.rover.name} - {roverPics.camera.name}
                </Card.Title>
                <div className={styles.cardText_cardSubtitles}>
                  <Card.Text>
                    Launch Date: {roverPics.rover.launch_date}
                  </Card.Text>
                  <Card.Text>
                    Landing Date: {roverPics.rover.landing_date}
                  </Card.Text>
                  <Card.Text>Status: {roverPics.rover.status}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RoverPics;
