import { useState } from "react";
import MainContainer from "../ui/MainContainer";
import styles from "./About.module.css";
import Profile from "./Profile";
import Skills from "./Skills";
import Career from "./Career";

const list = ["프로필", "기술", "경력"];
const skillList = [
  {
    name: "HTML",
    img: "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/logo/html.png",
    proficiency: "상",
    details: ["Semantic Tag", "웹 표준을 준수한 구조화", "SEO 최적화"],
  },
  {
    name: "CSS",
    img: "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/logo/css.png",
    proficiency: "상",
    details: ["반응형 디자인", "애니메이션", "Flex/Grid 활용", "Tailwind", "Bootstrap"],
  },
  {
    name: "Javascript",
    img: "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/logo/js.png",
    proficiency: "상",
    details: ["ES6 문법", "Ajax", "DOM 조작 및 이벤트 처리", "비동기 프로그래밍"],
  },
  {
    name: "React",
    img: "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/logo/react.png",
    proficiency: "상",
    details: ["함수형 컴포넌트", "Hooks 사용", "SPA", "컴포넌트 스타일링"],
  },
  {
    name: "Redux",
    img: "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/logo/redux.png",
    proficiency: "중",
    details: ["Redux 미들웨어", "Redux-Toolkit"],
  },
  {
    name: "Typescript",
    img: "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/logo/ts.png",
    proficiency: "중",
    details: ["타입 정의 및 인터페이스", "React에서 사용"],
  },
  {
    name: "Node.js",
    img: "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/logo/node.png",
    proficiency: "중",
    details: ["Express.js", "RESTful API 개발", "미들웨어 사용", "비동기 서버 프로그래밍"],
  },
  {
    name: "MySQL",
    img: "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/logo/mysql.png",
    proficiency: "중",
    details: ["데이터 모델링", "CRUD 작업 수행", "조인과 서브쿼리 사용"],
  },
  {
    name: "AWS",
    img: "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/logo/aws.png",
    proficiency: "하",
    details: ["EC2", "S3 버킷", "RDS", "Route 53", "Beanstalk"],
  },
  {
    name: "Github",
    img: "https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/logo/github.png",
    proficiency: "중",
    details: ["버전 및 브랜치 관리", "협업을 위한 Git 사용"],
  },
];

const About = () => {
  const [nav, setNav] = useState(list[0]);
  return (
    <MainContainer>
      <div className={styles.about}>
        <ul className={styles.list}>
          {list.map((el, idx) => {
            return (
              <li
                key={el}
                onClick={() => {
                  setNav(list[idx]);
                }}
                className={nav === el ? styles.active : ""}
              >
                {el}
              </li>
            );
          })}
        </ul>
        {nav === list[0] && <Profile skillList={skillList} />}
        {nav === list[1] && <Skills skillList={skillList} />}
        {nav === list[2] && <Career />}
      </div>
    </MainContainer>
  );
};

export default About;
