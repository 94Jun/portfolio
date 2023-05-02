import styles from "./Skills.module.css";
const Skills = ({ skillList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.proficiency}>
        <p className={styles.proficiency_title}>활용도</p>
        <div className={styles.wrap}>
          <div className={styles.circle} style={{ background: "#2563eb" }}></div>
          <p>상</p>
        </div>
        <div className={styles.wrap}>
          <div className={styles.circle} style={{ background: "#facc15" }}></div>
          <p>중</p>
        </div>
        <div className={styles.wrap}>
          <div className={styles.circle} style={{ background: "#dc2626" }}></div>
          <p>하</p>
        </div>
      </div>
      <div className={styles.grid_container}>
        {skillList.map((skill, idx) => {
          let style;
          if (skill.proficiency === "상") style = { background: "#2563eb" };
          if (skill.proficiency === "중") style = { background: "#facc15" };
          if (skill.proficiency === "하") style = { background: "#dc2626" };
          return (
            <div key={idx} className={styles.flip}>
              <div className={styles.card} style={{ animationDelay: `${idx * 100 + 500}ms` }}>
                <div className={styles.front}>
                  <div className={styles.band} style={style}></div>
                  <div className={styles.logo}>
                    <img src={skill.img} />
                  </div>
                  <div className={styles.name}>{skill.name}</div>
                </div>
                <div className={styles.back}>
                  <div className={styles.card_back_header}>
                    <div className={styles.circle} style={style}></div>
                    <h4>{skill.name}</h4>
                  </div>
                  <ul className={styles.detail}>
                    {skill.details.length > 0 && skill.details.map((detail, idx) => {
                      return <li key={idx}>{detail}</li>
                    }) }
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
