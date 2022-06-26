import { Checkbox, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import RedoIcon from '@mui/icons-material/Redo'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide'
import SettingsIcon from '@mui/icons-material/Settings'
import styled from 'styled-components'
import InboxIcon from '@mui/icons-material/Inbox'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import PeopleIcon from '@mui/icons-material/People'

import Section from './Section'
import EmailRow from './EmailRow'
import { db } from '../firebase'



function EmaiList() {
    const [emails,setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
                setEmails(
                    snapshot.docs.map( doc => (
                        {
                            id: doc.id,
                            data : doc.data(),
                        }
                    )))
            ))
    },[]);

  return (
    <EmailListContainer >
        <EmailListSettings>
            <EmailListSettingsLeft>
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </EmailListSettingsLeft>

            <EmailListSettingsRight>
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
            </EmailListSettingsRight>
        </EmailListSettings>
        <EmailListSection>
             <Section Icon={InboxIcon} title='primary' color='red' selected/>
             <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
             <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
             {/* <Section Icon={InboxIcon} title='primary' color='green' /> */}
        </EmailListSection>
        <EmailList>
            {
                emails.map(({id,data:{to,subject,message,timestamp}})=>(
                    <EmailRow 
                        id={id}
                        key={id}
                        title ={to}
                        subject ={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))
            }
            {/* <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' />
            <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' />
            <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' />
            <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' />
            <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' />
            <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' />
            <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' />
            <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' />
            <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' />
            <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' />
            <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' />
            <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' />
            <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' />
            <EmailRow  id= '1' key = '1' title='abhayrajmalviya@gmail.com' subject='DO NOT OPEN THIS' description= 'this is a Gmail Clone but isn`t it looking even better 🔥' time='Sun, 26 Jun 2022 08:24:43 GMT' /> */}
        </EmailList>
    </EmailListContainer>
  )
}

const EmailListContainer = styled.div`
    flex: 1;
    overflow:scroll;
`;
const EmailListSettings = styled.div`
    position:sticky;
    top:0;
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    background-color: white;
    z-index:999;
    padding-right: 10px ;
`;
const EmailListSettingsLeft = styled.div``;
const EmailListSettingsRight = styled.div``;

const EmailListSection = styled.div`
    position: sticky;
    top:0;
    display: flex;
    background-color: white;
    z-index: 999;
    border-bottom: 1px solid whitesmoke;
`;
const EmailList = styled.div`
    padding-bottom: 20%;
`;
export default EmaiList