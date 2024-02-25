import './App.css'
import { useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import authService from "./appwrite/auth";
import {Header, Footer} from './components'
import {login, logout} from "./store/authSlice"

function App() {
   const [loading,setloading] = useState(true);

   const  dispatch = useDispatch();

   useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout);
      }
    })
    .finally(()=>setloading(false));
   },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-Full block'>
        <Header/>
        <main>
          <h1> test </h1>
          </main>
        <Footer/>
      </div>
    </div>
  ) : (null);
}

export default App
