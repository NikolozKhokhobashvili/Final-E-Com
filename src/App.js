import { Routes, Route } from 'react-router-dom';
import DiscountHeader from './components/DiscountHeader'
import Header from './components/Header'
import HomePage from './Pages/HomePage'


function App() {
  return (
    <div>

      <DiscountHeader/>
      <Header/>

      <Routes>
        <Route  path="/" element={<HomePage/>}/>
      </Routes>
        
    </div>
  )
}

export default App;
