import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./views/Dashboard/dashboard.js";
import LandingPage from "./views/LandingPage/landingPage";
import ContactUs from "./views/ContactUsPage/contactUs";

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
    // <LandingPage />
    // <ContactUs />
    <Dashboard />
  );
}

export default App;
