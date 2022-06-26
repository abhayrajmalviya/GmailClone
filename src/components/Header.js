import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

import { Avatar, IconButton } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout, selectUser } from '../features/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import { auth } from '../firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signout =() =>{
        auth.signOut().then(()=>{
            dispatch(logout())
        });
        
    }

  return (
    <HeaderContainer>
        <HeaderLeft>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <img 
                src='https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png'
            />
        </HeaderLeft>
        <HeaderMiddle>
            <SearchIcon/>
            <input 
                type='text'
                placeholder='Search Gmail'
            />
            <ArrowDropDownIcon />
        </HeaderMiddle>
        <HeaderRight>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <Avatar className='avt' onClick={signout} src= {user?.photoURL}/>
        </HeaderRight>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    display:flex;
    align-items :center;
    justify-content :space-between;
    border-bottom: 1px solid whitesmoke;
`;
const HeaderLeft = styled.div`
    display:flex;
    align-items :center;

    img{
        height:60px;
        object-fit: contain;
        margin-left: 10px;
    }
`;
const HeaderMiddle = styled.div`
    display :flex;
    flex:0.7;
    align-items :center;
    background-color: whitesmoke;
    padding: 10px;
    border-radius : 10px;

    input{
        border:none;
        width:100%;
        padding:10px;
        outline-width :0;
        font-size : medium;
        background-color:transparent;
    }
    .MuiSvgIcon-root{
        color: gray;
    }
`;
const HeaderRight = styled.div`
    display:flex;
    padding:15px;
    .avt{
        cursor:pointer !important;
    }
`;

export default Header