import AstroHeader from "../../Components/AstroHeader";
import NASAImageGallery from "../../Components/NASAImageGallery";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <AstroHeader />
      <NASAImageGallery />
    </div>
  );
};

export default Home;
