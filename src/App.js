import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./views/Dashboard/dashboard.js";
import LandingPage from "./views/LandingPage/landingPage";
import ContactUs from "./views/ContactUsPage/contactUs";
import Categories from "./views/Categories/categories";
import Discover from "./views/Discover/discover";
import Connect from "./views/Connect/connect";
import NavBar from "./navbar/NavBar.jsx";
import Analytics from "./views/Analytics/analytics";
import "./firebase.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./views/About/about";
import Messager from "./views/Message/messager";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <ContactUs />
    // <LandingPage />
    // <Dashboard />
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Discover" element={<Discover />} />
        <Route path="/About" element={<About />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Messages" element={<Messager />} />
        <Route path="/Connect" element={<Connect />} />
      </Routes>
    </div>
  );
}

export default App;
