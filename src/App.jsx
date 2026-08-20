import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Header></Header>
      <HomePage />
    </>
  );
}

export default App;
