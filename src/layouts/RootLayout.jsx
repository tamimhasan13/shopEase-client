import { Outlet } from "react-router";
// import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      {/* Header */}
      <Header/>
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default RootLayout;
