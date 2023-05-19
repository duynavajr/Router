import React from "react";
import HomePage from "../HomePage";
import { Navigate } from "react-router-dom";

function Checkout() {
  const isLogin = false;
  return <div>{isLogin ? <HomePage /> : <Navigate to={"/login"} />}</div>;
}

export default Checkout;
