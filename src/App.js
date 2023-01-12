import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Signin, Signup, Browse } from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/browse" element={<Browse />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}
