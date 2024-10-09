import Header from './components/header.tsx'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/home.tsx'
import Random from './pages/random.tsx'
import Projects from './pages/projects.tsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </>
  )
}

export default App
