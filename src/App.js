// hook import
import { useState } from "react"
// router
import { Routes, Route, useNavigate } from 'react-router-dom'
// component import
import Home from "./screens/Home"
import Game from "./screens/Game"
import Ranking from "./screens/Ranking"
import Result from "./screens/Result"
// css import
import "./App.css"

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/game'} element={<Game />} />
        <Route path={'/result'} element={<Result />} />
        <Route path={'/ranking'} element={<Ranking />} />
      </Routes>

    </div>
  )
}

export default App
