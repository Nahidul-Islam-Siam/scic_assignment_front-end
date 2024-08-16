
import HeaderTop from '../src/Shared/HeaderTop'
// import './App.css'
import HeaderMain from '../src/Shared/HeaderMain'
import Navbar from './Shared/Navbar'
import MobNavbar from './Shared/MobNavbar'
import Footer from './Shared/Footer'
import Hero from './Home/Hero'
import NewProducts from './Home/NewProducts'
import Testimonials from './Home/Testimonials'
function App() {


  return (
    <div className='container mx-auto overflow-hidden'>
    <HeaderTop/>
        <HeaderMain/>
        <Navbar/>
        <MobNavbar/>
        <Hero/>
        <NewProducts/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default App
