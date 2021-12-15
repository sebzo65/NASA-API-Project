import { useState, useEffect } from "react";
import AstroHeader from "../../Components/AstroHeader";
import SearchBar from "../../Components/SearchBar";
import NASAImageGallery from "../../Components/NASAImageGallery";
import styles from "./Home.module.scss";
import { Row } from "react-bootstrap";

const Home = () => {
  //Astronomy Picture of the Day API Call (Header Image)
  const [picture, setPicture] = useState(1);

  useEffect(() => {
    const getPicOfDay = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=mgCzn4vdY8LralpHVwIKBPydQIDt6LXodanpsy10`
      );
      const data = await response.json();
      setPicture(data);
    };
    getPicOfDay();
  }, []);
  console.log(picture);

  //SearchBar functionality for NASA Image & Video Library API
  const [search, setSearch] = useState("moon");
  console.log("Search:", search);
  const handleSubmit = (newSearchValue) => {
    setSearch(newSearchValue);
  };

  //NASA Image & Video Library API (Image Gallery)
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    const renderImages = async () => {
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=${search}`
      );
      const data2 = await response.json();
      setGallery(data2.collection.items);
    };
    renderImages();
  }, [search]);
  console.log(gallery);
  return (
    <div className={styles.homePage}>
      <AstroHeader picture={picture} />
      <SearchBar onSubmit={handleSubmit} />
      <Row xs={1} md={3} className={styles.cardRows}>
        {gallery &&
          gallery
            .filter((gallery, idx) => idx < 9)
            .map((gallery, idx) => (
              <NASAImageGallery gallery={gallery} key={idx} />
            ))}
      </Row>
    </div>
  );
};

export default Home;
