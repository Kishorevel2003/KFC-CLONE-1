import react from 'react'
import logo from './logo.svg';
import Menu from './Pages/Menu';
import './App.css';
import Home from './Pages/Home';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Cart from './Pages/Cart';


function App() {
  return (
   <>
   <BrowserRouter>
   <Home/>
   <Routes>
    <Route path='/' element={<Menu/>}></Route>
    <Route path='Cart/' element={<Cart/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
