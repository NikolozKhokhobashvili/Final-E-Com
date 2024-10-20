import { Routes, Route } from 'react-router-dom';
import DiscountHeader from './components/DiscountHeader'
import Header from './components/Header'
import HomePage from './Pages/HomePage'
import Footer from './components/Footer'


function App() {
  return (
    <div>

      <DiscountHeader/>
      <Header/>

      <Routes>
        <Route  path="/" element={<HomePage/>}/>
      </Routes>
        
        <Footer/>
    </div>
  )
}

export default App;
