import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './view/home'
import Login from './view/login'
import Editor from './view/editor'
import RequireAuth from './view/requireAuth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RequireAuth />}>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/editor' element={<Editor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
