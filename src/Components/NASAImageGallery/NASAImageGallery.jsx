import { useState, useEffect } from "react";
import styles from "./NASAImageGallery.module.scss";

const NASAImageGallery = () => {
  const [images, getImages] = useState(2);

  useEffect(() => {
    const renderImages = async () => {
      const response = await fetch(`https://images-api.nasa.gov/search?q=poor`);
      const data = await response.json();
      getImages(data.collection.items);
    };
    renderImages();
  }, []);
  console.log(images);
  return <div></div>;
};

export default NASAImageGallery;
