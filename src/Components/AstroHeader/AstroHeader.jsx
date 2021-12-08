import { useState, useEffect } from "react";
import styles from "./AstroHeader.module.scss";

const AstroHeader = () => {
  const [picture, getPicture] = useState(1);

  useEffect(() => {
    const getPicOfDay = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=mgCzn4vdY8LralpHVwIKBPydQIDt6LXodanpsy10`
      );
      const data = await response.json();
      getPicture(data);
    };
    getPicOfDay();
  }, []);
  console.log(picture);

  return (
    <div>
      <h1 className={styles.title}>{picture.title}</h1>
      <img
        src={picture.url}
        alt="Astronomy pic of the day"
        className={styles.img}
      />
      <h3 className={styles.date}>{picture.date}</h3>
      <p className={styles.explanation}>{picture.explanation}</p>
    </div>
  );
};

export default AstroHeader;
