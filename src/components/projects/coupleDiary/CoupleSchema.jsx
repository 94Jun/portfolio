import styles from "./detail.module.css";

const TABLE_LIST = [
  {
    table: "users",
    fields: [
      { name: "user_id", type: "VARCHAR(64)" },
      { name: "kakao_id", type: "VARCHAR(64)" },
      { name: "nickname", type: "VARCHAR(64)" },
      { name: "age_range", type: "VARCHAR(32)" },
      { name: "birthday", type: "VARCHAR(64)" },
      { name: "birthday_type", type: "VARCHAR(64)" },
      { name: "email", type: "VARCHAR(64)" },
      { name: "gender", type: "VARCHAR(32)" },
      { name: "couple_code", type: "VARCHAR(64)" },
      { name: "is_couple", type: "BOOLEAN" },
      { name: "connected_at", type: "VARCHAR(64)" },
    ],
  },
  {
    table: "couples",
    fields: [
      { name: "couple_id", type: "VARCHAR(64)" },
      { name: "user_id1", type: "VARCHAR(64)" },
      { name: "user_id2", type: "VARCHAR(64)" },
      { name: "profile_url", type: "VARCHAR(1024)" },
      { name: "created_at", type: "DATETIME" },
    ],
  },
  {
    table: "couple_sign",
    fields: [
      { name: "sign_id", type: "VARCHAR(64)" },
      { name: "user_id", type: "VARCHAR(64)" },
      { name: "couple_code", type: "VARCHAR(64)" },
      { name: "created_at", type: "DATETIME" },
    ],
  },
  {
    table: "letters",
    fields: [
      { name: "letter_id", type: "VARCHAR(64)" },
      { name: "couple_id", type: "VARCHAR(64)" },
      { name: "user_id", type: "VARCHAR(64)" },
      { name: "content", type: "TEXT" },
      { name: "paper_style", type: "VARCHAR(64)" },
      { name: "font_style", type: "VARCHAR(64)" },
      { name: "created_at", type: "DATETIME" },
    ],
  },
  {
    table: "letter_readers",
    fields: [
      { name: "read_id", type: "VARCHAR(64)" },
      { name: "letter_id", type: "VARCHAR(64)" },
      { name: "user_id", type: "VARCHAR(64)" },
      { name: "read_at", type: "DATETIME" },
    ],
  },
  {
    table: "schedules",
    fields: [
      { name: "schedule_id", type: "VARCHAR(64)" },
      { name: "couple_id", type: "VARCHAR(64)" },
      { name: "user_id", type: "VARCHAR(64)" },
      { name: "title", type: "VARCHAR(255)" },
      { name: "content", type: "TEXT" },
      { name: "schedule_date", type: "DATE" },
      { name: "schedule_time", type: "TIME" },
      { name: "created_at", type: "DATETIME" },
      { name: "updated_at", type: "DATETIME" },
    ],
  },
  {
    table: "anniversaries",
    fields: [
      { name: "anniversary_id", type: "VARCHAR(64)" },
      { name: "couple_id", type: "VARCHAR(64)" },
      { name: "event_name", type: "VARCHAR(128)" },
      { name: "event_date", type: "DATETIME" },
    ],
  },
  {
    table: "memories",
    fields: [
      { name: "memory_id", type: "VARCHAR(64)" },
      { name: "couple_id", type: "VARCHAR(64)" },
      { name: "user_id", type: "VARCHAR(64)" },
      { name: "title", type: "VARCHAR(255)" },
      { name: "content", type: "TEXT" },
      { name: "memory_date", type: "DATE" },
      { name: "created_at", type: "DATETIME" },
      { name: "updated_at", type: "DATETIME" },
    ],
  },
  {
    table: "memory_photos",
    fields: [
      { name: "photo_id", type: "VARCHAR(64)" },
      { name: "memory_id", type: "VARCHAR(64)" },
      { name: "photo_url", type: "VARCHAR(1024)" },
      { name: "created_at", type: "DATETIME" },
    ],
  },
  {
    table: "memory_tags",
    fields: [
      { name: "tag_id", type: "VARCHAR(64)" },
      { name: "memory_id", type: "VARCHAR(64)" },
      { name: "tag_name", type: "VARCHAR(64)" },
    ],
  },
];
const CoupleSchema = () => {
  return (
    <div className={styles.container}>
      <h2>테이블 스키마</h2>
      <div className={styles.table_container}>
        {TABLE_LIST.map((table) => {
          return (
            <div className={styles.table_card} key={table.table}>
              <h3 className={styles.table_title}>{table.table}</h3>
              {table.fields.map((field, idx) => {
                return (
                  <p key={idx}>
                    <span>{field.name}</span>
                    <span className={styles.type}>{field.type}</span>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoupleSchema;
