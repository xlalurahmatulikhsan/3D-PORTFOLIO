import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="relative z-0 bg-primary min-h-screen flex justify-center items-center">
              <Login />
              <StarsCanvas />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div className="relative z-0 bg-primary min-h-screen flex justify-center items-center">
              <Register />
              <StarsCanvas />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
