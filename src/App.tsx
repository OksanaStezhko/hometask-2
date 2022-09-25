import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Note from './pages/Note'
import NotFound from './pages/NotFound'

import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/note/:id/edit" element={<Note />}></Route>
        <Route path="/note/new" element={<Note />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
