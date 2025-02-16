import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

export const Navigation = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <route.layout>
              <route.page />
            </route.layout>
          }
        />
      ))}
    </Routes>
  );
};
