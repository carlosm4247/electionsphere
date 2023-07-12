import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../UserContext';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';
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

  return (
    <div className='app'>
      <UserContext.Provider value={{ user, updateUser }}>
        <BrowserRouter>
          <main>
            <div className="navbar">
              <div className="dropdown">
                <Link to="/"><button>Home</button></Link>
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