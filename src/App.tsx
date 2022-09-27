import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewNote from './pages/NewNote'
import EditNote from './pages/EditNote'
import NotFound from './pages/NotFound'

import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/hometask-2/" element={<Home />}></Route>
      <Route path="/hometask-2/edit/:id" element={<EditNote />}></Route>
      <Route path="/hometask-2/new" element={<NewNote />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default App
