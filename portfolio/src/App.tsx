import Navbar from './components/Navbar'
import './App.css'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import { useState } from 'react';
import SideMenu from './components/SideMenu';

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <main className="bg-[var(--dominant-colour)] max-w-screen min-w-screen">
      <Navbar setSideMenuOpen={setSideMenuOpen}/>
      {sideMenuOpen && <SideMenu setSideMenuOpen={setSideMenuOpen} />}
      <HomePage />
      <Footer />
    </main>
  )
}

export default App
