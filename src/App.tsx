import './App.css';

import {Route, Routes, BrowserRouter} from "react-router-dom"
//pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
