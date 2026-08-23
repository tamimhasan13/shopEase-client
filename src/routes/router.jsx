import { createBrowserRouter } from "react-router";

// Layouts
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import CollectionPage from "../pages/CollectionPage/CollectionPage";
import CategoryCollectionPage from "../pages/CategoryCollectionPage/CategoryCollectionPage";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import TestimonialPage from "../pages/TestimonialPage/TestimonialPage";
import ContractPage from "../pages/ContractPage/ContractPage";
import CartPage from "../pages/CartPage/CartPage";
import PlaceOderPage from "../pages/PlaceOderPage/PlaceOderPage";
import MyOrdersPage from "../pages/MyOrdersPage/MyOrdersPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/collection",
        Component: CollectionPage,
      },
      {
        path: "/collection/:category",
        element: <CategoryCollectionPage />,
      },
      {
        path: "/collection/:category/:id",
        element: <ProductDetailsPage></ProductDetailsPage>,
      },
      {
        path: "/testimonial",
        element: <TestimonialPage></TestimonialPage>,
      },
      {
        path: "/contact",
        element: <ContractPage></ContractPage>,
      },
      {
        path: "/cart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/place-order",
        element: <PlaceOderPage></PlaceOderPage>,
      },
      {
        path: "/my-orders",
        element: <MyOrdersPage></MyOrdersPage>,
      },
      {
        path: "/place-order",
        element: <PlaceOderPage></PlaceOderPage>,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
