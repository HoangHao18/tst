import React from "react";
import { Route, Routes } from "react-router-dom";
export const Switcher = () => {
  return (
    <Routes>
      <Route path="/flowers"  />
      <Route path="/flowers:id" />
    </Routes>
  );
};
