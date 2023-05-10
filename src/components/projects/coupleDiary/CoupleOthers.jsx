import styles from "./detail.module.css";
import CLIENT_CALENDAR from "../../../assets/images/couplediary/client_calendar.png";
import CLIENT_COMMON from "../../../assets/images/couplediary/client_common.png";
import CLIENT_MODAL from "../../../assets/images/couplediary/client_modal.png";
import CLIENT_LOADING from "../../../assets/images/couplediary/client_loading_state.png";

const CoupleOthers = () => {
  return (
    <div className={styles.container}>
      <h2>기타</h2>
      <section>
        <h3>공통 함수 관리</h3>
        <p>자주 사용되는 함수들은 모듈화 하여 관리하고 있습니다.</p>
        <h4>common.js 중 일부</h4>
        <a href={CLIENT_COMMON} target="_blank" rel="noreferrer" className={styles.img_container}>
          <img src={CLIENT_COMMON} />
        </a>
      </section>
      <section>
        <h3>로딩 컴포넌트</h3>
        <p>화면이 렌더되고 useEffect를 통해 데이터를 fetch 하는 중에는 로딩 컴포넌트가 실행되도록 구현했습니다.</p>
        <h4>렌더링 화면 예시 코드</h4>
        <a href={CLIENT_LOADING} target="_blank" rel="noreferrer" className={styles.img_container}>
          <img src={CLIENT_LOADING} />
        </a>
      </section>
      <section>
        <h3>모달 관리</h3>
        <p>React의 createPortal을 활용해 모달을 렌더링 합니다.</p>
        <p>Redux를 활용해 필요한 모달들을 한 곳에서 관리합니다.</p>
        <h4>모달 컴포넌트 코드</h4>
        <a href={CLIENT_MODAL} target="_blank" rel="noreferrer" className={styles.img_container}>
          <img src={CLIENT_MODAL} />
        </a>
      </section>
      <section>
        <h3>캘린더</h3>
        <p>라이브러리를 사용하지 않고 캘린더를 구현했습니다.</p>
        <p>일정 또는 기념일이 있는 경우 달력에 별도의 표시를 통해 유저가 확인할 수 있도록 구현했습니다.</p>
        <h4>캘린더 컴포넌트 코드 중 일부</h4>
        <a href={CLIENT_CALENDAR} target="_blank" rel="noreferrer" className={styles.img_container}>
          <img src={CLIENT_CALENDAR} />
        </a>
      </section>
    </div>
  );
};

export default CoupleOthers;
