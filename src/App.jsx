import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Resume } from './pages/resume/resume.jsx'
import { About } from './pages/about/about.jsx'
import { Portfolio } from './pages/portfolio/portfolio.jsx'
import { Contacts } from './pages/contacts/contacts.jsx'
import { Layout } from './components/layout/layout.jsx'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Resume />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contacts' element={<Contacts />} />
        </Route>``
      </Routes>
    </BrowserRouter>
  )
}

export default App
