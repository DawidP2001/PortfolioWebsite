import Navbar from './components/Navbar'
import './App.css'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

function App() {

  return (
    <main className="bg-[var(--dominant-colour)] max-w-screen min-w-screen">
      <Navbar />
      <HomePage />
      <Footer />
    </main>
  )
}

export default App
