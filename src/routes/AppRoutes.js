import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogoHome } from "../components/LogoHome";
import { Spinner } from "../components/Spinner";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { Age } from "../components/Age";
import { Gender } from "../components/Gender";
import { Height } from "../components/Height";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Suscription } from "../components/Suscription";
import { Verification } from "../components/Verification";
import { Weight } from "../components/Weight";

export const AppRoutes = () => {
  const [checking, setChecking] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLogged(true);
        user.getIdToken().then((token) => {
          return token;
        });
      } else {
        setIsLogged(false);
      }
      setChecking(false);
    });
  }, []);

  if (checking) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <LogoHome />
            </PublicRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <Register />
            </PublicRoutes>
          }
        />
        <Route
          path="/verification"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <Verification />
            </PublicRoutes>
          }
        />
        <Route
          path="/register/height"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <Height />
            </PublicRoutes>
          }
        />
        <Route
          path="/register/weight"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <Weight />
            </PublicRoutes>
          }
        />
        <Route
          path="/register/age"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <Age />
            </PublicRoutes>
          }
        />
        <Route
          path="/register/gender"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <Gender />
            </PublicRoutes>
          }
        />
        <Route
          path="/suscription"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <Suscription />
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutes isAuthenticated={isLogged}>
              <DashboardRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
