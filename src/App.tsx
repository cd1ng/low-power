import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login, Editor, RequireAuth, Project } from './view'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RequireAuth />}>
          <Route path='/editor' element={<Editor />} />
          <Route path='/project' element={<Project />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
