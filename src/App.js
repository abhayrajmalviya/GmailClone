import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import EmaiList from './components/EmaiList';
import Header from './components/Header';
import Login from './components/Login';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import Sidebar from './components/Sidebar';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux'

function App() {
  const sendMessageIsOpen =useSelector(selectSendMessageIsOpen); 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
      auth.onAuthStateChanged(user =>{
        if (user){
          dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          }))
        }
      })
  },[])

  return (
    <Router>
      {
      !user?(
        <Login/>
      ):(
        <AppContainer>
          <Header/>
          <AppBodyContainer>
            <Sidebar/>
            <Routes>
              <Route path="/mail" element={<Mail/>}/>
              <Route path="/" element={<EmaiList/>}/>
            </Routes>
          </AppBodyContainer>
          {sendMessageIsOpen && <SendMail/>}
        </AppContainer>
      ) 
    }
      
    </Router>
  );
}


const AppContainer = styled.div`
  height:100vh;
`;

const AppBodyContainer = styled.div`
  display: flex;
  height :90vh;
`;
export default App;
