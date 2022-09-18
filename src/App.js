import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import HomePage from './pages/HomePage/HomePage';
import StoryPage from './pages/StoryPage/StoryPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<HomePage/>} />
          <Route exact path="/story" element={<StoryPage/>} />
            {/* <Route path="/recipes/:id" component={Detail} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
