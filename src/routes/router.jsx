import { createBrowserRouter } from "react-router";

// Layouts
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import CollectionPage from "../pages/CollectionPage/CollectionPage";
import CategoryCollectionPage from "../pages/CategoryCollectionPage/CategoryCollectionPage";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";


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
        element:<CategoryCollectionPage/>
      },
      {
        path: "/collection/:category/:id",
        element:<ProductDetailsPage></ProductDetailsPage>
      },
    ],
  },
]);
