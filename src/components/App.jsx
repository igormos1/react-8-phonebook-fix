import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import { PublicRoute } from "./PublicRoute/PublicRoute.jsx";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute.jsx";
import authOperations from "redux/auth/authOperations.js";
import { Layout } from "./Layout/Layout";
import { Container } from "./Container/Container.jsx";

const HomePage = lazy(() => import("pages/HomePage/HomePage.jsx"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage.jsx"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage.jsx"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage.jsx"));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));


export const App = () => {

  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(state => state.auth.isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);


  return (
    <Container>
      {!isFetchingCurrentUser && (
        <>
          <Toaster />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<PublicRoute><HomePage /></PublicRoute>} />
                <Route path="/register" element={<PublicRoute restricted><RegisterPage /></PublicRoute>} />
                <Route path="/login" element={<PublicRoute restricted><LoginPage /></PublicRoute>} />
                <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
};
