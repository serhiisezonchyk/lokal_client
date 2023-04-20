import AdminPage from "../pages/AdminPage";
import Auth from "../pages/Auth";
import FullProduct from "../pages/FullProduct";
import FullPost from "../pages/FullPost";
import FullPartner from "../pages/FullPartner";
import Partners from "../pages/Partners";
import Posts from "../pages/Posts";
import Products from "../pages/Products";
import Main from "../pages/Main";

import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  MAIN_ROUTE,
  FULLPRODUCT_ROUTE,
  PRODUCTS_ROUTE,
  FULLPARTNER_ROUTE,
  PARTNERS_ROUTE,
  FULLPOST_ROUTE,
  POSTS_ROUTE,
} from "./consts";

export const authRoutes = [
  // {
  //   path: ADMIN_ROUTE,
  //   Component: AdminPage,
  // },
];

export const publicRoutes = [
    {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
  
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: FULLPRODUCT_ROUTE + "/:id",
    Component: FullProduct,
  },
  {
    path: FULLPARTNER_ROUTE + "/:id",
    Component: FullPartner,
  },
  {
    path: FULLPOST_ROUTE + "/:id",
    Component: FullPost,
  },
  {
    path: PARTNERS_ROUTE,
    Component: Partners,
  },
  {
    path: POSTS_ROUTE,
    Component: Posts,
  },
  {
    path: PRODUCTS_ROUTE,
    Component: Products,
  },
];
