import Header from './components/Header/Header'
import Navbar from './components/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-background text-text">
      <div id="home" className="absolute top-0 w-full h-0"></div>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}
