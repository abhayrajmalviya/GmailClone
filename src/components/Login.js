import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { login } from '../features/userSlice';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux'

function Login() {

    const dispatch = useDispatch();

    const signin= () =>{
        auth.signInWithPopup(provider)
        .then(({user}) =>{
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            }))
        })
        .catch(error=>alert(error.message))
    };

  return (
    <LoginContainer>
        <LoginBody>
            <img 
                src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png"
                alt="Gmail logo"
            />
            <Button variant="contained" color="primary" onClick={signin}>Login with Google</Button>
        </LoginBody>
        
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
    background-color: #f2f2f2; 
    display:grid;
    height: 100vh;
`;
const LoginBody = styled.div`
    display:flex;
    flex-direction: column;
    place-items: center;
    img{
        object-fit: contain;
        height: 400px;
    }
`;
export default Login