import { Card, Row, Col } from "react-bootstrap";
import styles from "./NASAImageGallery.module.scss";

const NASAImageGallery = ({ gallery }) => {
  return (
    <div>
      <Row xs={1} md={2} className={styles.cardRows}>
        {/* {Array.from({ length: 1 }).map((_, idx) => ( */}
        <Col>
          <Card className={styles.card}>
            {gallery.links && (
              <Card.Img
                className={styles.card_img}
                variant="top"
                src={gallery.links[0].href}
                alt="NASA photos"
              />
            )}
            {gallery.data.map((d) => (
              <Card.Body className={styles.body} key={d}>
                <Card.Title>{d.title}</Card.Title>
                <Card.Text>{d.description}</Card.Text>
              </Card.Body>
            ))}
          </Card>
        </Col>
        {/* )} */}
      </Row>
    </div>
  );
};

export default NASAImageGallery;
