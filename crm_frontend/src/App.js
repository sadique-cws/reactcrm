import Container from './components/Container'
import InsertPost from './components/InsertPost';
import Register from './components/Register';
import Login from './components/Login';
import SingleContentCard from './components/SingleContentCard'
import NavBar from './components/NavBar'
import {Route,Routes} from 'react-router-dom';

function App() {
  const isLogined = localStorage.getItem("isLogined");
  

  return (
    <>
      <NavBar/>
      <Routes>
         
        {(isLogined) && <Route path='/insert' element={<InsertPost/>}/> }
          
          <Route path="/"  element={<Container/>}/>
          <Route path="/post/:id"  element={<SingleContentCard/>}/>
          <Route path="/register"  element={<Register/>}/>
          <Route path="/login"  element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
