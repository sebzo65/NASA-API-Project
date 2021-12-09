import { useState, useEffect } from "react";
import AstroHeader from "../../Components/AstroHeader";
import NASAImageGallery from "../../Components/NASAImageGallery";
import styles from "./Home.module.scss";

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

  //NASA Image & Video Library API (Image Gallery)
  const [gallery, setGallery] = useState(2);

  useEffect(() => {
    const renderImages = async () => {
      const response = await fetch(`https://images-api.nasa.gov/search?q=poor`);
      const data = await response.json();
      setGallery(data.collection.items);
    };
    renderImages();
  }, []);
  console.log(gallery);
  return (
    <div className={styles.homePage}>
      <AstroHeader picture={picture} />
      <NASAImageGallery gallery={gallery} />
    </div>
  );
};

export default Home;
