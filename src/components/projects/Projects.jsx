import { useState } from "react";
import MainContainer from "../UI/MainContainer";
import styles from "./Projects.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const projectList = [
  {
    name: "project1",
    color: "blue",
  },
  {
    name: "project2",
    color: "red",
  },
  {
    name: "project3",
    color: "green",
  },
  {
    name: "project4",
    color: "violet",
  },
];

const Projects = () => {
  const [visibleIdx, setVisibleIdx] = useState(0);
  const [touchX, setTouchX] = useState(0);
  const handlePrevClick = () => {
    if (visibleIdx !== 0) {
      setVisibleIdx((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (visibleIdx !== projectList.length - 1) {
      setVisibleIdx((prev) => prev + 1);
    }
  };
  const onTouchStart = (e) => {
    setTouchX(e.changedTouches[0].pageX);
  };

  const onTouchEnd = (e) => {
    if (touchX > e.changedTouches[0].pageX) {
      handleNextClick();
    }
    if (touchX < e.changedTouches[0].pageX) {
      handlePrevClick();
    }
  };

  return (
    <MainContainer>
      <div className={styles.carousel_container}>
        <button className={styles.prev_icon} onClick={handlePrevClick} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <ArrowBackIosNewIcon fontSize="inherit" color="inherit" />
        </button>
        <div className={styles.carousel_wrap}>
          <div className={styles.carousel} style={{ transform: `translateX(${-100 * visibleIdx}%)` }}>
            {projectList.map((project, idx) => {
              return <div key={idx} className={styles.carousel_card} style={{ background: project.color }}></div>;
            })}
          </div>
        </div>
        <button className={styles.next_icon} onClick={handleNextClick}>
          <ArrowForwardIosIcon fontSize="inherit" color="inherit" />
        </button>
        <div className={styles.carousel_btn}>
          {projectList.map((project, idx) => {
            return (
              <button key={idx} className={`${styles.circle} ${visibleIdx === idx ? styles.circle_active : ""}`} onClick={() => setVisibleIdx(idx)}>
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </MainContainer>
  );
};

export default Projects;
