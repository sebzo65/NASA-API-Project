import styles from "./AstroHeader.module.scss";

const AstroHeader = ({ picture }) => {
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
