import styles from "./detail.module.css";
import CLIENT_LOADING from "../../../assets/images/couplediary/client_loading.png";
import SERVER_LOADING from "../../../assets/images/couplediary/server_loading.png";
const CoupleLoading = () => {
  return (
    <div className={styles.container}>
      <h2>무한 스크롤</h2>
      <section>
        <h3>Intersection Observer API를 활용한 무한 스크롤</h3>
        <p>최적화를 위해 데이터가 일정 수 이상인 경우 한번에 전부 불러오지 않고 일부만 불러온 후, 스크롤을 내리면 추가 데이터를 불러오도록 구현했습니다.</p>
      </section>
      <section>
        <h3>스크롤을 통한 사진 로딩 관련 코드</h3>
        <p>useRef를 사용해 마지막에 로드된 사진 참조</p>
        <p>사진이 교차되고, 데이터 fetching 중이 아니며, 모든 사진을 불러온 경우가 아닐 경우 다음 사진 로드</p>
        <h4>클라이언트</h4>
        <a href={CLIENT_LOADING} target="_blank" rel="noreferrer" className={styles.img_container}>
          <img src={CLIENT_LOADING} />
        </a>
        <h4>서버</h4>
        <a href={SERVER_LOADING} target="_blank" rel="noreferrer" className={styles.img_container}>
          <img src={SERVER_LOADING} />
        </a>
      </section>
    </div>
  );
};

export default CoupleLoading;
