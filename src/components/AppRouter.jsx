import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../router/routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          element={<route.component />}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="../img/*" exact={false} />
    </Routes>
  );
};

export default AppRouter;
