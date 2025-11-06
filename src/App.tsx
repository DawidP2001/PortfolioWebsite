/**
 * App.tsx
 * Main application component.
 * 
 * To Do:
 *  - Add an effect showing the section ur on the navbar
 *  - Change descriptions
 */
import Navbar from './components/Navbar'
import './App.css'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import { useState } from 'react';
import SideMenu from './components/SideMenu';
import { AnimatePresence } from 'framer-motion';
import ProjectPage from './pages/ProjectsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  return (
    <Router>
      <main className="bg-[var(--dominant-colour)] max-w-screen min-w-screen">
        <Navbar sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen}/>
        <AnimatePresence>
        {sideMenuOpen && <SideMenu setSideMenuOpen={setSideMenuOpen}/>}
        </AnimatePresence>
        <Routes>
          <Route path="/" element={<HomePage setSelectedPage={() => {}} setSelectedProject={setSelectedProject}/>} />
          <Route path="/projects" element={<ProjectPage setSelectedProject={setSelectedProject} selectedProject={selectedProject}/>} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
