import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignupCandidate from "./pages/Signup/Candidate";
import SignupCampany from "./pages/Signup/Campany";
import { CurrentUserContext } from "./contexts/currentUser";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    console.log("eeee === ", user);
    setCurrentUser(localStorage.getItem("currentUser"));
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Router>
        <Header />
        <div style={{ padding: 30 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup">
              <Route path="candidate" element={<SignupCandidate />} />
              <Route path="campany" element={<SignupCampany />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </CurrentUserContext.Provider>
  );
};

export default App;
