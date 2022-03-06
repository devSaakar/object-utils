import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [theme, setTheme] = useState(true);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const { keyCode } = e;
      // console.log('e.keyCode in theme change :>> ', keyCode);
      if (keyCode === 18) {
        setTheme(!theme);
      }
    };
    document.addEventListener("keydown", handleKeyPress, false);
    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, [theme]);


  const handleThemeChange = () => {
    setTheme(!theme);
    showAlert(`${theme ? "Light" : "Dark"} Mode Enabled`, "success");
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 1500);
  };

  let myStyle = theme
    ? {
        backgroundColor: "rgb(1 32 64)",
        color: "white",
        outline: "2px solid white",
        height: "500vh",
      }
    : {
        backgroundColor: "white",
        color: "black",
      };

  return (
    // <Router>
      <div className="App-Container" style={myStyle}>
        <Navbar
          title="{} Utils"
          theme={theme}
          onThemeChange={handleThemeChange}
        />
        {alert && <Alert alert={alert} />}
        {/* <Routes> */}
          {/* <Route
            exact path="/"
            element={ */}
              <TextForm
                title="Enter the Object to analyze below"
                theme={theme}
                showAlert={showAlert}
              />
            {/* }
          /> */}
          {/* <Route exact path="/about" element={<About theme={theme} />} />
        </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
