import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "./App.css";

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <main>
          <div className="navbar">
            <div className="dropdown">
              <p>Dropdown Placeholder</p>
            </div>
            <h2 className="title">Website Name</h2>
            <button className="button">Profile Placeholder</button>
          </div>
          <div className="content">
            <Routes>
              <Route path='/' element={
                                <p>Message</p>
                                }/>
            </Routes>
            
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}