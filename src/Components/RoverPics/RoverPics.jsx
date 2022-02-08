import { styles } from "./RoverPics.module.scss";

const RoverPics = ({ roverPics }) => {
  console.log("roverPics prop: ", roverPics);
  return <div>{<img src={roverPics.img_src} alt="" />}</div>;
};

export default RoverPics;
