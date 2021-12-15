import { Card, Col } from "react-bootstrap";
import styles from "./NASAImageGallery.module.scss";

const NASAImageGallery = ({ gallery }) => {
  return (
    <div className={styles.body}>
      {/* <Row xs={1} md={2}> */}
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col className={styles.column} key={idx}>
          <Card className={styles.card}>
            {gallery.links && (
              <Card.Img
                className={styles.columnImg}
                variant="top"
                src={gallery.links[0].href}
                alt="NASA photos"
              />
            )}
            {gallery.data.map((d) => (
              <Card.Body key={d}>
                <Card.Title>{d.title}</Card.Title>
                {/* <Card.Text>{d.description}</Card.Text> */}
              </Card.Body>
            ))}
          </Card>
        </Col>
      ))}
      {/* </Row> */}
    </div>
  );
};

export default NASAImageGallery;
