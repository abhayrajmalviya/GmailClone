import { Button, IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components';

import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import InboxIcon from '@mui/icons-material/Inbox';
import AcessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';

import SidebarOption from './SidebarOption';
import { useDispatch}  from "react-redux";
import { openSendMessage } from '../features/mailSlice';

function Sidebar() {

    const dispatch = useDispatch();
  return (
    <SidebarContainer>
        <Button 
            startIcon={<AddIcon  fontSize="large"/> }
            className="Sidebar__Compose"
            onClick={()=> dispatch(openSendMessage())}
        >
            Compose
        </Button>
        <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
        <SidebarOption Icon={StarIcon} title="Starred" number={54} selected={false}/>
        <SidebarOption Icon={AcessTimeIcon} title="Snoozed" number={54} selected={false}/>
        <SidebarOption Icon={LabelImportIcon} title="Important" number={54} selected={false}/>
        <SidebarOption Icon={NearMeIcon} title="Sent" number={54} selected={false}/>
        <SidebarOption Icon={NoteIcon} title="Drafts" number={54} selected={false}/>
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} selected={false}/>
        <SideBarFooter>
            <SideBarFooterIcons>
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <DuoIcon/>
                </IconButton>
                <IconButton>
                    <PhoneIcon/>
                </IconButton>
            </SideBarFooterIcons>
        </SideBarFooter>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
    .Sidebar__Compose{
        margin-top:15px !important;
        margin-left:15px !important;
        margin-bottom:15px !important;
        text-transform: capitalize !important;
        color: gray;
        padding: 15px !important;
        border-radius: 30px !important;
        box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
    }
    flex: 0.3;
    max-width:300px;
    padding-right: 20px;;
`;

const SideBarFooter = styled.div`
    display: flex;
    justify-content: center;
`;

const SideBarFooterIcons = styled.div`

`;
export default Sidebar ;