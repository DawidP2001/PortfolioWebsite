/**
 * App.tsx
 * Main application component.
 * 
 * To Do:
 *  1. Do the projects page
 *  2. Add an experience section
 *  3. Add more animations
 *  4. Apply to project cards
 *      - Add technologies
 *      - add go to project button
 */
import Navbar from './components/Navbar'
import './App.css'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import { useState } from 'react';
import SideMenu from './components/SideMenu';
import { AnimatePresence } from 'framer-motion';
import ProjectPage from './pages/ProjectsPage';

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [page, setSelectedPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState("");

  return (
    <main className="bg-[var(--dominant-colour)] max-w-screen min-w-screen">
      <Navbar sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen}/>
      <AnimatePresence>
      {sideMenuOpen && <SideMenu setSideMenuOpen={setSideMenuOpen} setPage={setSelectedPage}/>}
      </AnimatePresence>
      {page === 'home' &&
        <HomePage setSelectedPage={setSelectedPage} setSelectedProject={setSelectedProject}/>
      }
      {page === 'projects' &&
        <ProjectPage setSelectedProject={setSelectedProject} selectedProject={selectedProject}/>
      }
      <Footer />
    </main>
  )
}

export default App
