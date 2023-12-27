import Header from "./components/Header/Header";
import styles from "./App.module.css";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <LoginPage />
    </div>
  );
}

export default App;
