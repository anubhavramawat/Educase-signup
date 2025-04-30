import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Signup from './pages/Signup'
import Login from './pages/Login'
import AccSetting from './pages/AccSetting'

function App() {
  return (
    <>
      {/* <h1 class="text-3xl font-bold underline">hello</h1> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<AccSetting/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
