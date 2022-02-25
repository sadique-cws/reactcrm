import Container from './components/Container'
import InsertPost from './components/InsertPost';
import Register from './components/Register';
import Login from './components/Login';
import SingleContentCard from './components/SingleContentCard'
import NavBar from './components/NavBar'
import {Route,Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';

function App() {
  const isLogined = localStorage.getItem("isLogined");
  const session = localStorage.getItem("isLogined")
  const user = JSON.parse(localStorage.getItem("userData"));

  console.log(user)

  const [logined, setLogined] = useState();

  useEffect(() => {
      if(localStorage.getItem("isLogined") == null){
        setLogined(false);
      }
  },[])

  return (
    <>
      <NavBar user={user} setLogin={setLogined}/>
      <Routes>
         
        {(isLogined) && <Route path='/insert' element={<InsertPost/>}/> }
          <Route path="/"  element={<Container/>}/>
          <Route path="/post/:id"  element={<SingleContentCard/>}/>
          <Route path="/register"  element={<Register/>}/>
          <Route path="/login"  element={<Login setLogin={setLogined}/>}/>
      </Routes>
    </>
  );
}

export default App;
