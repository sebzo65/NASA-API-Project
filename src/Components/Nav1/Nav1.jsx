import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav1.module.scss";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Nav1 = () => {
  return (
    <Navbar className={styles.nav} expand={false}>
      <Container fluid className={styles.nav_innerNav}>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className={styles.nav_innerNav__burger}
        />
        <Navbar.Offcanvas
          className={styles.offCanvas}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              className={styles.offCanvas_title}
              id="offcanvasNavbarLabel"
            >
              Discover more
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} className={styles.links} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className={styles.links} to="/LandsatImages">
                Landsat Images
              </Nav.Link>
              <Nav.Link as={Link} className={styles.links} to="/MarsWeather">
                Mars Weather
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={styles.links}
                to="/Natural Event Tracker"
              >
                Natural Event Tracker
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className={styles.button} variant="outline-success">
                Search
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Nav1;
