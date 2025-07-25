import { Route,Routes,BrowserRouter } from 'react-router-dom'
import MyContainer from './components/MyContainer'
import About from './components/About'
import Header from './components/Header'


function App() {

  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<MyContainer/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
