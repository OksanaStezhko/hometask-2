import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewNote from './pages/NewNote'
import EditNote from './pages/EditNote'
import NotFound from './pages/NotFound'
import { path } from './tools/variables'

import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path={`${path}/`} element={<Home />}></Route>
      <Route path={`${path}/edit/:id`} element={<EditNote />}></Route>
      <Route path={`${path}/new`} element={<NewNote />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default App
