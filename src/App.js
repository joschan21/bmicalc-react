import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import HomepageCopy from './components/HomepageCopy'
import DailyCalories from './components/DailyCalories'
import IdealWeight from './components/IdealWeight'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/daily-calories' element={<DailyCalories />} />
        <Route path='/ideal-weight' element={<IdealWeight />} />
        <Route path='/copy' element={<HomepageCopy />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
