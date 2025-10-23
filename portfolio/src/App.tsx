import Navbar from './components/Navbar'
import './App.css'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

function App() {

  return (
    <main className='bg-(--dominant-colour)'>
      <Navbar />
      <div className='min-h-screen w-full'>
        <HomePage />
      </div>
      <Footer />
    </main>
  )
}

export default App
