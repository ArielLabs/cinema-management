// import Header from "./components/Header/Header";
import styles from "./App.module.css";
// import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";


function App() {
  return (
    <div className={styles.app}>
      {/* <Header /> */}
      {/* <LoginPage /> */}
      <RegisterPage />
    </div>
  );
}

export default App;
