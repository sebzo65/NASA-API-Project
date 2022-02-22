import styles from "./NaturalEvents.module.scss";

const NaturalEvents = ({ natEvent }) => {
  return (
    <div>
      <p>{natEvent.events}</p>
    </div>
  );
};

export default NaturalEvents;
