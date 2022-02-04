import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom"
//pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/Navbar';

function App() {
  const { user } = useAuthContext();

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Home /> : <SignIn />} />
          <Route path="/sign-in" element={user ? <Home /> : <SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
