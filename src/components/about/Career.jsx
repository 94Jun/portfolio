import styles from "./Career.module.css";
const Career = () => {
  const educations = [
    {
      name: "프론트엔드(React) 국비과정 수료",
      period: "2022.07. ~ 2023.01.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.edu}>
        <h3>교육</h3>
        {educations.map((edu, idx) => {
          return (
            <div key={idx} className={styles.edu_wrap}>
              <p className={styles.edu_name}>{edu.name}</p>
              <p className={styles.edu_period}>{edu.period}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Career;
