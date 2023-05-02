import styles from "./Container.module.css";
const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      {/* <video className={styles.background_video} autoPlay muted loop>
        <source type="video/mp4" src="images/Purple and Blue Gradient Old Computer Aesthetic Girlfriend's Birthday Video.mp4" />
      </video> */}
      <div className={styles.glass}>{children}</div>
    </div>
  );
};

export default Container;
