import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import HomepageCopy from './components/pages/HomepageCopy'
import DailyCalories from './components/pages/DailyCalories'
import IdealWeight from './components/pages/IdealWeight'
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
