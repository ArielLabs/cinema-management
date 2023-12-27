import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.toolbar}>
        <span className={styles.titleApp}>Cinema</span>
      </div>
    </div>
  );
};

export default Header;
