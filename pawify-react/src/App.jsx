import './App.css'
import Home from './app/components/home/Home';
import NavBar from './app/components/navBar/navBar'
import Register from "./app/components/registerUser/Register";


function App() {

  return (
    <>
      <NavBar />
      <Home />
      <Register/>
    </>
  )
}

export default App;