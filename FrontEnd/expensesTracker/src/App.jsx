import React from 'react'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import Expense from './pages/Auth/Dashboard/Expense'
import Income from './pages/Auth/Dashboard/Income'
import Home from './pages/Auth/Dashboard/Home'
import{BrowserRouter as Router,
  Routes,
  Route,
  Navigate 
} from 'react-router-dom'
import  UserProvider  from './context/UserContext'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <UserProvider>
    <div>
<Router>
  <Routes>
    <Route path="/" element={<Root/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/dashboard" element={<Home/>}/>
    <Route path="/income" element={<Income/>}/>
    <Route path="/expense" element={<Expense/>}/>

  </Routes>
</Router>
    </div>
    <Toaster 
      toastOptions={{
        className: "",
        style:{
          fontsize:"13px"
        }
      }}/>
</UserProvider>
  )
}

export default App

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated
    ? (<Navigate to="/dashboard" />)
    : (<Navigate to="/login" />);
};
