import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom"
//pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <SignIn/>} />
        <Route path="/sign-in" element={user ? <Home /> : <SignIn/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
