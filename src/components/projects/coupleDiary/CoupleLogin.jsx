import styles from "./detail.module.css";
import CLIENT_LOGIN from "../../../assets/images/couplediary/client_login.png";
import CLIENT_MAINTENANCE from "../../../assets/images/couplediary/client_maintenance.png";
import SERVER_LOGIN from "../../../assets/images/couplediary/server_login.png";
import SERVER_MAINTENANCE from "../../../assets/images/couplediary/server_maintenance.png";
import CLIENT_USER from "../../../assets/images/couplediary/client_user.png";
import SERVER_USER from "../../../assets/images/couplediary/server_user.png";

const CoupleLogin = () => {
  return (
    <div className={`${styles.container} ${styles.login}`}>
      <h2>카카오 로그인</h2>
      <section>
        <h3>OAuth2.0을 활용한 카카오 로그인</h3>
        <p>간편한 회원가입/로그인으로 사용자 편의를 증가시키고 보안 위협을 감소하기 위해 카카오 로그인을 사용하였습니다.</p>
      </section>
      <section>
        <h3>카카오 로그인 관련 코드</h3>
        <p>카카오 로그인 버튼을 누르면 카카오 측에서 redirect된 uri에서 로그인을 진행합니다.</p>
        <p>현재 쿠키를 사용 중이지만 refresh_token은 db에서 불러오도록 업데이트 할 예정입니다.</p>
        <h4>클라이언트</h4>
        <a href={CLIENT_LOGIN} target="_blank" rel="noreferrer" className={styles.img_container}>
          <img src={CLIENT_LOGIN} />
        </a>
        <h4>서버</h4>
        <a href={SERVER_LOGIN} target="_blank" rel="noreferrer" className={styles.img_container}>
          <img src={SERVER_LOGIN} />
        </a>
      </section>
      <section>
        <h3>로그인 유지 관련 코드</h3>
        <p>custom hooks를 통해 필요한 때에 로그인을 검사하고 token이 유효하지 않은 경우 로그아웃합니다.</p>
        <p>access_token이 만료된 경우 refresh_token을 통해 갱신합니다.</p>
        <h4>클라이언트</h4>
        <a href={CLIENT_MAINTENANCE} target="_blank" rel="noreferrer" className={styles.img_container}>
          <img src={CLIENT_MAINTENANCE} />
        </a>
        <h4>서버</h4>
        <a href={SERVER_MAINTENANCE} target="_blank" rel="noreferrer" className={styles.img_container}>
          <img src={SERVER_MAINTENANCE} />
        </a>
      </section>
      <section>
        <h3>유저 정보 GET 관련 코드</h3>
        <p>로그인(로그인 유지) 시 쿼리문을 통해 필요한 데이터를 조합하여 정보를 받아옵니다.</p>
        <h4>클라이언트</h4>
        <a href={CLIENT_USER} target="_blank" rel="noreferrer" className={styles.img_container}>
          <img src={CLIENT_USER} />
        </a>
        <h4>서버</h4>
        <a href={SERVER_USER} target="_blank" rel="noreferrer" className={styles.img_container}>
          <img src={SERVER_USER} />
        </a>
      </section>
    </div>
  );
};

export default CoupleLogin;
