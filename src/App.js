import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Signin, Signup, Browse } from "./pages";
import { RedirectRoute, ProtectedRoute } from "./helpers/routes";

export default function App() {
  const user = null ;
  return (
    <Router>
      <Routes>
        <Route
          element={
            <RedirectRoute user={user} redirectPath={ROUTES.BROWSE}>
              <Signin />
            </RedirectRoute>
          }
          path={ROUTES.SIGN_IN}
          exact
        />
        <Route
          element={
            <RedirectRoute user={user} redirectPath={ROUTES.BROWSE}>
              <Signup />
            </RedirectRoute>
          }
          path={ROUTES.SIGN_UP}
          exact
        />
        <Route
          element={
            <ProtectedRoute user={user}>
              <Browse />
            </ProtectedRoute>
          }
          exact
          path='/browse'
        />
        <Route exact path={ROUTES.HOME} element={<RedirectRoute user={user} redirectPath={ROUTES.BROWSE}>
              <Home />
            </RedirectRoute>} />
      </Routes>
    </Router>
  );
}
