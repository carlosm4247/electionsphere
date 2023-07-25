import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../UserContext';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';
import PresidentialRaces from '../PresidentialRaces/PresidentialRaces';
import PresidentStatePage from '../PresidentStatePage/PresidentStatePage';
import "./App.css";
import { options, useDropdownVal } from "../../constants.js"

export default function App() {

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  })

  const updateUser = (newUser) => {
    setUser(newUser)
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user])

  const handleLogout = () => {
    updateUser(null);
  };

  const [dropdownVal, setDropdownVal] = useDropdownVal(window.location.pathname);

  const [raceType, setRaceType] = useState("");
  
  const handleDropdownChange = (e) => {
    e.preventDefault();
    setDropdownVal(e.target.value);
  };

  useEffect(() => {
    if (window.location.pathname !== dropdownVal) {
      window.location.replace(dropdownVal);
    }
  }, [dropdownVal]);

  return (
    <div className='app'>
      <UserContext.Provider value={{ user, updateUser }}>
        <BrowserRouter>
          <main>
            <div className="navbar">
              <div className="dropdown">
                <select value={dropdownVal} onChange={handleDropdownChange}>
                  {options.map((option) => (
                  <Link key={option.value} to={option.value}> <button>{option.label}</button> </Link>
                  ))}
                </select>  
              </div>
              <h2 className="title">Website Name</h2>
              <div className='user-info'>
                {user ? (
                  <>
                  <span>Welcome, {user.username}! |</span>
                  <button onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <Link to="/login"><button>Login</button></Link>
                )}
              </div>
            </div>
            <div className="content">
              <Routes>
                <Route path='/' element={<p>Message</p>}/>
                <Route path='/president' element={<PresidentialRaces />}/>
                <Route path='/login' element={<LoginForm />}/>
                <Route path='/signup' element={<SignupForm />}/>
                <Route path='/president/:stateName' element={<PresidentStatePage />}/>
              </Routes>

            </div>
          </main>
        </BrowserRouter>
      </UserContext.Provider>
      
    </div>
  );
}