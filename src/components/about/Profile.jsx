import styles from "./Profile.module.css";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
const Profile = ({ skillList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.info}>
          <div className={styles.profile}>
            <img src="https://94jun-portfolio.s3.ap-northeast-2.amazonaws.com/images/profile_2.png" />
          </div>
          <div className={styles.name}>
            <p>웹 개발자</p>
            <p>박병준</p>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.contact_text}>contact</div>
          <div className={styles.contact_content}>
            <span className={styles.contact_icon}>
              <SmartphoneIcon fontSize="inherit" color="inherit" />
            </span>
            <a href="tel:01067813517">010 - 6781 - 3517</a>
          </div>
          <div className={styles.contact_content}>
            <span className={styles.contact_icon}>
              <GitHubIcon fontSize="inherit" color="inherit" />
            </span>
            <a href="https://github.com/94Jun">github.com/94Jun</a>
          </div>
          <div className={styles.contact_content}>
            <span className={styles.contact_icon}>
              <EmailIcon fontSize="inherit" color="inherit" />
            </span>
            <a href="mailto:pbj11241@gamil.com">pbj11241@gmail.com</a>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.intro}>
          <h3>소개</h3>
          <p>React와 Node.js를 주로 사용하는 신입 웹 개발자입니다.</p>
          <p>아래와 같은 마음가짐으로 개발에 임하고 있습니다.</p>
          <ul>
            <li>유지보수와 협업을 위해 읽기 좋은 코드를 작성하려고 노력합니다.</li>
            <li>누구나 쉽게 사용할 수 있는 직관적인 UI를 선호합니다.</li>
            <li>새로운 웹 기술과 트렌드를 관심있게 찾아보고 사용해봅니다.</li>
          </ul>
        </div>
        <div className={styles.certification}>
          <h3>자격증</h3>
          <p>정보처리기사</p>
        </div>
        <div className={styles.skills}>
          <h3>사용 기술</h3>
          <div className={styles.logo_container}>
            {skillList.map((skill, idx) => {
              return (
                <div key={idx} className={styles.logo}>
                  <img src={skill.img} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
