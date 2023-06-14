

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import RootPage from './pages/Root'




function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="register" element={<RegisterPage />}/>  
        <Route path="login" element={<LoginPage />} />   
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
