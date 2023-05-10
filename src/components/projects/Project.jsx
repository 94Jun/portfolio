import { useEffect, useRef, useState } from "react";
import styles from "./Project.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modalSlice";
const Project = ({ project, parentIdx, idx }) => {
  const dispatch = useDispatch();
  const [visibleIdx, setVisibleIdx] = useState(0);
  const interval = useRef();

  const handlePrevClick = () => {
    if (visibleIdx !== 0) {
      setVisibleIdx((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (visibleIdx !== project.images?.length - 1) {
      setVisibleIdx((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (project.images?.length > 1 && parentIdx === idx) {
      interval.current = setInterval(() => {
        setVisibleIdx((prev) => {
          if (prev !== project.images?.length - 1) {
            return prev + 1;
          } else {
            return 0;
          }
        });
      }, 4000);
      return () => {
        clearInterval(interval.current);
      };
    }
  }, [parentIdx, project, visibleIdx]);
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{project.name}</h2>
      <section className={styles.section}>
        <div className={styles.carousel_container}>
          <div className={styles.carousel_wrap}>
            <div className={styles.carousel}>
              {project.images?.map((img, idx) => {
                return (
                  <a
                    href={img}
                    target="_blank"
                    rel="noreferrer"
                    key={idx}
                    className={styles.img_wrap}
                    style={{ transform: `translateX(-${visibleIdx * 100}%)` }}
                  >
                    <img src={img} alt={img} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className={styles.idx_wrap}>
            <button className={styles.prev_icon} onClick={handlePrevClick}>
              <ArrowBackIosNewIcon fontSize="inherit" color="inherit" />
            </button>
            {visibleIdx + 1} / {project.images?.length}
            <button className={styles.next_icon} onClick={handleNextClick}>
              <ArrowForwardIosIcon fontSize="inherit" color="inherit" />
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            <p>{project.description}</p>
          </div>
          <div className={styles.info_wrap}>
            <h4>제작 기간 / 인원</h4>
            <p className={styles.info}>
              {project.period} / {project.Personnel}
            </p>
          </div>
          <div className={styles.skills}>
            <h4>사용 기술</h4>
            <div className={styles.skills_wrap}>
              {project.skills.map((skill, idx) => {
                return (
                  <div key={idx} className={styles.skill}>
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.features}>
            <h4>특징</h4>
            <ul className={styles.features_wrap}>
              {project.features.map((feature, idx) => {
                return (
                  <li key={idx} className={styles.feature}>
                    {feature}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.url}>
            <h4>URL</h4>
            <div className={styles.url_wrap}>
              {idx === 0 && <p onClick={() => dispatch(modalActions.OPEN_MODAL(project.name))}>상세 보기</p>}
              <a href={project.url} target="_blank" rel="noreferrer">
                프로젝트 페이지
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                깃허브
              </a>
            </div>
          </div>
          <div className={styles.empty}></div>
        </div>
      </section>
    </div>
  );
};

export default Project;
