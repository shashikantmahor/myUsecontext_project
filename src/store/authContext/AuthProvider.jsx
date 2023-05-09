import React from "react";

import { useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  const [userAuth, setUserAuth] = useState("user");
  const [data, setData] = useState([
    {
      label: "one",
      value: "1",
    },
    {
      label: "two",
      value: "2",
    },
  ]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "Something went wrong",
    severity: "error",
  });

  return (
    <AuthContext.Provider
      value={{
        userAuth,
        setUserAuth,
        data,
        setData,
        setSnackbar,
        snackbar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
