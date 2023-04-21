import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { adminRoutes, authRoutes, publicRoutes } from "../utils/routes";
import { MAIN_ROUTE } from "../utils/consts";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../http/userApi";
import { selectAdminRole, selectIsAdmin } from "../http/adminApi";
const AppRouter = () => {
  const isAuth = useSelector(selectIsAuth);
  const isAdmin = useSelector(selectIsAdmin);
  const partner = useSelector(selectAdminRole);
  console.log(partner);
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {isAdmin &&
        adminRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
