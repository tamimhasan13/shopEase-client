import { createBrowserRouter } from "react-router";

// Layouts
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";
import RootLayout from "../layouts/RootLayout";
import AddProduct from "../pages/AdminPage/AddProduct";
import ListProduct from "../pages/AdminPage/ListProduct";
import Orders from "../pages/AdminPage/Orders";
import CartPage from "../pages/CartPage/CartPage";
import CategoryCollectionPage from "../pages/CategoryCollectionPage/CategoryCollectionPage";
import CollectionPage from "../pages/CollectionPage/CollectionPage";
import ContractPage from "../pages/ContractPage/ContractPage";
import HomePage from "../pages/HomePage/HomePage";
import LoadingPage from "../pages/Loading/LoadingPage";
import MyOrdersPage from "../pages/MyOrdersPage/MyOrdersPage";
import PlaceOrderPage from "../pages/PlaceOderPage/PlaceOderPage";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import TestimonialPage from "../pages/TestimonialPage/TestimonialPage";

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
        element: <PlaceOrderPage></PlaceOrderPage>,
      },
      {
        path: "/my-orders",
        element: <MyOrdersPage></MyOrdersPage>,
      },
      {
        path: "/loader",
        element: <LoadingPage></LoadingPage>,
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
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: AddProduct,
      },
      {
        path: "/admin/list",
        Component: ListProduct,
      },
      {
        path: "/admin/orders",
        Component: Orders,
      },
    ],
  },
]);
