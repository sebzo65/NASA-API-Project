import styles from "./NASAImageGallery.module.scss";

const NASAImageGallery = ({ gallery }) => {
  return (
    <div>
      {gallery.data.map((d) => (
        <div key={d}>
          <p>{d.title}</p>
          <p>{d.description}</p>
        </div>
      ))}
      {gallery.links && (
        <img src={gallery.links[0].href} alt="NASA photos"></img>
      )}
    </div>
  );
};

export default NASAImageGallery;
