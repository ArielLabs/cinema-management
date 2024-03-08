import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./CinemaLayout.module.css";

const CinemaLayout = () => {
  return (
    <div className={styles.cinema}>
      <Header />
      <main className={styles.cinemaMain}>
        <Outlet />
      </main>
    </div>
  );
};

export default CinemaLayout;
