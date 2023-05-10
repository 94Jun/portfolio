import { useState } from "react";
import MainContainer from "../ui/MainContainer";
import styles from "./About.module.css";
import Profile from "./Profile";
import Skills from "./Skills";
import Career from "./Career";
import AWS from "../../assets/images/logo/aws.png";
import CSS from "../../assets/images/logo/css.png";
import GITHUB from "../../assets/images/logo/github.png";
import HTML from "../../assets/images/logo/html.png";
import JS from "../../assets/images/logo/js.png";
import MYSQL from "../../assets/images/logo/mysql.png";
import NODE from "../../assets/images/logo/node.png";
import REACT from "../../assets/images/logo/react.png";
import REDUX from "../../assets/images/logo/redux.png";
import TS from "../../assets/images/logo/ts.png";

const list = ["프로필", "기술", "경력"];
const skillList = [
  {
    name: "HTML",
    img: HTML,
    proficiency: "상",
    details: ["Semantic Tag", "웹 표준을 준수한 구조화", "SEO 최적화"],
  },
  {
    name: "CSS",
    img: CSS,
    proficiency: "상",
    details: ["반응형 디자인", "애니메이션", "Flex/Grid 활용", "Tailwind", "Bootstrap"],
  },
  {
    name: "Javascript",
    img: JS,
    proficiency: "상",
    details: ["ES6 문법", "Ajax", "DOM 조작 및 이벤트 처리", "비동기 프로그래밍"],
  },
  {
    name: "React",
    img: REACT,
    proficiency: "상",
    details: ["함수형 컴포넌트", "Hooks 사용", "SPA", "컴포넌트 스타일링"],
  },
  {
    name: "Redux",
    img: REDUX,
    proficiency: "중",
    details: ["Redux 미들웨어", "Redux-Toolkit"],
  },
  {
    name: "Typescript",
    img: TS,
    proficiency: "중",
    details: ["타입 정의 및 인터페이스", "React에서 사용"],
  },
  {
    name: "Node.js",
    img: NODE,
    proficiency: "중",
    details: ["Express.js", "RESTful API 개발", "미들웨어 사용", "비동기 서버 프로그래밍"],
  },
  {
    name: "MySQL",
    img: MYSQL,
    proficiency: "중",
    details: ["데이터 모델링", "CRUD 작업 수행", "조인과 서브쿼리 사용"],
  },
  {
    name: "AWS",
    img: AWS,
    proficiency: "하",
    details: ["EC2", "S3 버킷", "RDS", "Route 53", "Beanstalk"],
  },
  {
    name: "Github",
    img: GITHUB,
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
