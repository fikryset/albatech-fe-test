import "./App.css";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/profile/:token" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
