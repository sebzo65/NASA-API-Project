import { Carousel } from "react-bootstrap";

const RoverPics = ({ roverPics }) => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scx2.b-cdn.net/gfx/news/2018/meteoritesre.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thestatesman.com/wp-content/uploads/2017/08/1487141680-marsgetty517.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2016/02/arda_valles_perspective/15820153-1-eng-GB/Arda_Valles_perspective_pillars.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default RoverPics;
