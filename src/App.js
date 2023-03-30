
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const [color, setColor] = useState('grey')
  const setTheme = (color) => {
    setColor({
      color: color
    });
  }
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      if(document.getElementById('myBox')){
        document.getElementById('myBox').style.backgroundColor = 'white';
        console.log('h1');
      }
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils - light';
    } else {
      let c = color.color, dc = 'grey';
      console.log('tg',c);
      setMode('dark');
      document.body.style.backgroundColor = c || dc;
      console.log('TA', document.getElementById('myBox'));
      if(document.getElementById('myBox')){
        document.getElementById('myBox').style.backgroundColor = c || dc;
        console.log('h2');
      }  
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils - dark';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} setcolor={setTheme} togglemode={toggleMode}/>
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm mode={mode} setcolor={toggleMode} showalert={showAlert} heading="Enter the text to analyze" />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
