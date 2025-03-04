import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { HashRouter, BrowserRouter } from "react-router-dom";

export const Home = props => {
  return (
    <div>
      {/* passing props to the chil component so it can redirect */}
      <Login {...props} />
    </div>
  );
};
