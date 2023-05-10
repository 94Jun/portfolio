import styles from "./Header.module.css";
import Nav from "./Nav";
import profile from "../../assets/images/profile_2.png";
const Links = [
  {
    name: "About",
    url: "/",
  },
  {
    name: "Projects",
    url: "/projects",
  },
];
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.profile}>
          <img src={profile} />
        </div>
        <p>
          <span>Web Deveolper</span>
          <span> 박병준</span>
        </p>
      </div>
      <ul className={styles.list}>
        {Links.map((link) => {
          return (
            <Nav key={link.name} to={link.url}>
              {link.name}
            </Nav>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
