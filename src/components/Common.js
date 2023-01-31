import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Common = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("login-token")) {
      navigate("/login");
    }
  }, []);
  return props.component
};

export default Common;
