import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/Navbar'
import Banner from './components/Banner'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Banner />
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <NavBar />
        <Main />
      </div>
      <Footer />
    </Router>
  )
}

export default App
