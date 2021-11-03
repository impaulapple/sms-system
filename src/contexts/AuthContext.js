import React, { useContext, useEffect } from "react";
import { validIsEmpty } from "../api/Validator";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const LOCAL_STORAGE_KEY = "MySystem";
const TIMEOUT_MINS = 60;

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState();

  function signUp(account, password) {
    return true;
  }

  function login(account, password) {
    let oLoginInfo = {
      token: `${account};${password}`,
      loginTime: Date.now()
    };

    setCurrentUser(oLoginInfo);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(oLoginInfo));

    return true;
  }

  function logout() {
    setCurrentUser(null);
  }

  function isLogin() {
    let sLoginInfo = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!validIsEmpty(sLoginInfo) && validIsEmpty(currentUser)) {

      let oLoginInfo = JSON.parse(sLoginInfo);

      setCurrentUser(oLoginInfo);

      return true;

    }

    if (validIsEmpty(currentUser) || validIsEmpty(currentUser.token)){
      logout();
      return false;
    } 

    if (Date.now() - currentUser.loginTime > 1000 * 60 * TIMEOUT_MINS) {
      logout();
      return false;
    }

    return true;
  }

  useEffect(() => {
    // setCurrentUser(user)
  }, [])

  const value = {
    currentUser,
    signUp,
    login,
    logout,
    isLogin
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}