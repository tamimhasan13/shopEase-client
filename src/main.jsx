import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/router.jsx";
import AuthContextProvider from "./context/AuthContext/AuthContextProvider.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
AOS.init({
  duration: 800,
  easing: "ease-out-cubic",
  once: false,
  offset: 50,
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
    <Toaster position="top-right" />
  </StrictMode>,
);
