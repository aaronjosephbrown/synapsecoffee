import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/Navbar'
import Banner from './components/Banner'
import Main from './components/Main'

function App() {
  return (
    <Router>
    <Banner />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NavBar />
        <Main />
      </div>
    </Router>
  )
}

export default App
