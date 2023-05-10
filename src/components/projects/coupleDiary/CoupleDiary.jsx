import styles from "./CoupleDiary.module.css";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../store/modalSlice";
import { useState } from "react";
import CoupleOverview from "./CoupleOverview";
import CoupleTree from "./CoupleTree";
import CoupleSchema from "./CoupleSchema";
import CoupleLogin from "./CoupleLogin";
import CoupleLoading from "./CoupleLoading";
import CoupleOthers from "./CoupleOthers";
const LISTS = [
  { id: 0, title: "개요", component: <CoupleOverview /> },
  { id: 1, title: "파일 구조", component: <CoupleTree /> },
  { id: 2, title: "테이블 스키마", component: <CoupleSchema /> },
  { id: 3, title: "카카오 로그인", component: <CoupleLogin /> },
  { id: 4, title: "무한 스크롤", component: <CoupleLoading /> },
  { id: 5, title: "기타", component: <CoupleOthers /> },
];
const CoupleDiary = () => {
  const dispatch = useDispatch();
  const [component, setComponent] = useState(LISTS[0].component);
  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <section className={styles.left}>
        <ul>
          {LISTS.map((list) => {
            return (
              <li key={list.id}>
                <button
                  className={styles.list_btn}
                  onClick={() => {
                    setComponent(list.component);
                  }}
                >
                  {list.title}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section className={styles.right}>{component}</section>
      <button className={styles.close_btn} onClick={() => dispatch(modalActions.CLOSE_MODAL())}>
        x
      </button>
    </div>
  );
};

export default CoupleDiary;
