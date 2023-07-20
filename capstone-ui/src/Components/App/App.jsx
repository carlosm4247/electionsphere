import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../UserContext';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';
import PresidentialRaces from '../PresidentialRaces/PresidentialRaces';
import "./App.css";

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

  const [dropdownVal, setDropdownVal] = useState(window.location.pathname);

  const options = [

    { label: 'Home', value: '/' },
 
    { label: 'Presidential Race', value: '/president' },
 
  ];

  const [raceType, setRaceType] = useState("");

  const handleDropdown = (e) => {
    e.preventDefault();
    setDropdownVal(e.target.value);
  };

  useEffect(() => {
    if (window.location.pathname !== dropdownVal) {
      window.location.replace(dropdownVal);
    }

    if (dropdownVal !== '/') {
      setRaceType(dropdownVal.slice(1));
    }
    else {
      setRaceType("");
    }
  }, [dropdownVal]);

  return (
    <div className='app'>
      <UserContext.Provider value={{ user, updateUser }}>
        <BrowserRouter>
          <main>
            <div className="navbar">
              <div className="dropdown">
                <select value={dropdownVal} onChange={handleDropdown}>
                  {options.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
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
              </Routes>

            </div>
          </main>
        </BrowserRouter>
      </UserContext.Provider>
      
    </div>
  );
}