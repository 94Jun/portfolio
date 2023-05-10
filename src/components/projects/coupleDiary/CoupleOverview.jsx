import styles from "./detail.module.css";
const CoupleOverview = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>개요</h2>
      <section>
        <h3>프로젝트 제목</h3>
        <p>Couple Diary(커플 다이어리)</p>
      </section>
      <section>
        <h3>제작 기간</h3>
        <p>2023년 4월(1개월)</p>
      </section>
      <section>
        <h3>주요 기능</h3>
        <ul>
          <li>카카오 계정을 이용한 로그인 및 자동 로그인</li>
          <li>서로의 커플 코드를 입력하여 커플 생성</li>
          <li>커플 일정 및 기념일 등록, 조회, 수정, 삭제</li>
          <li>커플 일정 및 기념일을 달력과 연동하여 한눈에 조회 가능</li>
          <li>커플 시작일 등록 시 주요 기념일 자동 생성(x주년, 100일 등)</li>
          <li>편지 등록, 조회, 삭제</li>
          <li>추억(사진 및 글) 등록, 조회, 수정, 삭제</li>
          <li>사진이 일정 수 이상인 경우 스크롤을 통한 로딩</li>
          <li>개인 정보(닉네임 등) 및 커플 정보(프로필 사진 등) 수정</li>
        </ul>
      </section>
      <section>
        <h3>사용 기술</h3>
        <p>React, Redux-toolkit, Node.js(express), MySQL, AWS(Beanstalk, RDS, S3)</p>
      </section>
      <section>
        <h3>URL</h3>
        <p>
          <span>프로젝트 : </span>
          <a href="http://couple-diary-v1.eba-pf6nhfii.ap-northeast-2.elasticbeanstalk.com">
            http://couple-diary-v1.eba-pf6nhfii.ap-northeast-2.elasticbeanstalk.com
          </a>
        </p>
        <p>
          <span>깃허브 : </span>
          <a href="https://github.com/94Jun/couple-diary">https://github.com/94Jun/couple-diary</a>
        </p>
      </section>
    </div>
  );
};

export default CoupleOverview;
