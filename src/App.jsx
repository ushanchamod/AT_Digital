import './App.css'
import Button from './components/widgets/Button'
import TopBar from './components/page_components/top_bar/TopBar'
import Footer from './components/page_components/footer/Footer'
import Home from './pages/home/Home'

const App = () => {
  return (
    <>
      <TopBar />
      <Home />
      <Footer />
    </>
  )
}

export default App