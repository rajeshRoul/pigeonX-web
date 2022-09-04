import React from "react";
import Authentication from "pages/Authentication";
import NotFound from "pages/NotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthWrapper from "wrappers/AuthWrapper";
import routes from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          key="Route-userOnboard"
          path="/user-onboard"
          element={<Authentication />}
        />
        <Route
          key="Route-base-home"
          exact
          path="/"
          element={<Navigate to="/home" replace />}
        />
        {routes.map((route, index) => (
          <Route
            key={`Route-${route.path}-${index}`}
            path={route.path}
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <AuthWrapper>
                  <route.component />
                </AuthWrapper>
              </React.Suspense>
            }
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
