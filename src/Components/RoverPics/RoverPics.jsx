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
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RoverPics;
