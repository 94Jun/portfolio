import { useState } from "react";
import MainContainer from "../ui/MainContainer";
import styles from "./Projects.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Project from "./Project";

const projectList = [
  {
    name: "Couple Diary",
    images: [
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/couple_diary/main.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/couple_diary/login.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/couple_diary/memory.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/couple_diary/photo.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/couple_diary/letter.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/couple_diary/calendar.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/couple_diary/anniversary.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/couple_diary/mypage.png",
    ],
    description: "커플들의 사진을 저장하고 기념일과 일정을 관리할 수 있는 웹페이지이며 실제 사용 목적으로 제작했습니다.",
    features: ["모바일 우선 반응형 디자인", "OAuth2.0을 사용한 로그인 관리", "스크롤을 통한 로딩 구현", "REST API 직접 구축 및 SQL DB 사용"],
    period: "2023년 04월(1개월)",
    Personnel: "1인",
    url: "http://couple-diary-v1.eba-pf6nhfii.ap-northeast-2.elasticbeanstalk.com",
    github: "https://github.com/94Jun/couple-diary",
    skills: ["React", "Redux", "Node.js", "MySQL", "AWS"],
  },
  {
    name: "Travel",
    images: [
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/travel/main.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/travel/login.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/travel/make_posting.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/travel/mypage.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/travel/myplan.png",
    ],
    description: "여행 관련 정보를 공유하고 본인의 여행 계획을 수립하여 동행을 구할 수 있는 여행 SNS 웹페이지이며 포트폴리오용으로 제작했습니다.",
    features: ["반응형 디자인", "4인 팀 프로젝트", "구글 맵 API 사용", "좋아요, 댓글, 마크 등의 SNS 기본 기능 구현", "Firebase로 백엔드 대체"],
    period: "2022년 12월(1개월)",
    Personnel: "4인",
    url: "https://travel-1g.firebaseapp.com/",
    github: "https://github.com/94Jun/Team-Project-D",
    skills: ["React", "Redux", "firebase"],
  },
  {
    name: "Cland",
    images: [
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/cland/main.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/cland/schedule.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/cland/memo.png",
      "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/projects/cland/modal.png",
    ],
    description: "개인 일정을 관리하고 간단한 메모를 할 수 있는 웹페이지이며 포트폴리오용으로 제작했습니다.",
    features: ["React를 사용한 첫 프로젝트", "Firebase Auth / Firestore / Hosting 사용"],
    period: "2022년 11월(2주)",
    Personnel: "1인",
    url: "https://cland-596ce.web.app",
    github: "https://github.com/94Jun/cland",
    skills: ["React", "firebase"],
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
    <>
      <div className={styles.carousel_top_btn}>
        {projectList.map((project, idx) => {
          return (
            <button key={idx} className={`${styles.circle} ${visibleIdx === idx ? styles.circle_active : ""}`} onClick={() => setVisibleIdx(idx)}>
              {idx + 1}
            </button>
          );
        })}
      </div>
      <MainContainer>
        <div className={styles.carousel_container}>
          <button className={styles.prev_icon} onClick={handlePrevClick} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <ArrowBackIosNewIcon fontSize="inherit" color="inherit" />
          </button>
          <div className={styles.carousel_wrap}>
            <div className={styles.carousel} style={{ transform: `translateX(${-100 * visibleIdx}%)` }}>
              {projectList.map((project, idx) => {
                return (
                  <div key={idx} className={styles.carousel_card}>
                    <Project project={project} parentIdx={visibleIdx} />
                  </div>
                );
              })}
            </div>
          </div>
          <button className={styles.next_icon} onClick={handleNextClick}>
            <ArrowForwardIosIcon fontSize="inherit" color="inherit" />
          </button>
          <div className={styles.carousel_bottom_btn}>
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
    </>
  );
};

export default Projects;
