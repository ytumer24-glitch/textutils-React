
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, {useState} from 'react'
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("\n\nDark mode enabled!", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
      showAlert("\n\nLight mode enabled!", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    <BrowserRouter>
<Navbar title="Textutils" aboutText="About" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="container my-3">
  <Routes>
    <Route exact path="/about" element={<About showAlert={showAlert} />} />
    <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
  </Routes>
</div>
</BrowserRouter>
    </>
  );
}

export default App;
