/**
 * App.tsx
 * Main application component.
 * 
 * To Do:
 *  1. Do the projects page
 *  2. Add an experience section
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
  const [page, setPage] = useState('projects');

  return (
    <main className="bg-[var(--dominant-colour)] max-w-screen min-w-screen">
      <Navbar sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen}/>
      <AnimatePresence>
      {sideMenuOpen && <SideMenu setSideMenuOpen={setSideMenuOpen} setPage={setPage}/>}
      </AnimatePresence>
      {page === 'home' &&
        <HomePage />
      }
      {page === 'projects' &&
        <ProjectPage />
      }
      <Footer />
    </main>
  )
}

export default App
