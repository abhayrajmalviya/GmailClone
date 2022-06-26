import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import ErrorIcon from '@mui/icons-material/Error'
import DeleteIcon from '@mui/icons-material/Delete'
import EmailIcon from '@mui/icons-material/Email'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import LabelImportantIcon from '@mui/icons-material/LabelImportant'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import PrintIcon from '@mui/icons-material/Print'


import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import styled from 'styled-components'
import { selectOpenMail } from '../features/mailSlice'
import { useSelector } from 'react-redux'

function Mail() {
    const MailContainer = styled.div`
        flex: 1;
        background-color: whitesmoke;
    `;
    const MailTools = styled.div`
        display:flex;
        background-color: white;
        justify-content :space-between;
    `;
    const MailToolsLeft = styled.div`
        display:flex;

        
    `;
    const MailToolsRight = styled.div``;
    const MailBody = styled.div`
        display:flex;
        flex-direction : column;
        margin: 30px;
        background-color: white;
        padding :20px;
        height: 100vh;
        box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.24);
    `;


    const MailBodyHeader = styled.div`
        display:flex;
        align-items:center;
        border-bottom: 1px solid whitesmoke;
        padding: 20px;
        position: relative;
        h2{
            font-weight:400;
            margin-right: 20px;
        }
        p{
            margin-left: 20px;
        }
        .important{
            color: #e8ab02 !important;
        }
        .time{
            position: absolute;
            top:24px;
            right:0;
            font-size: 12px;
            color: gray;
        }
    `;
    const MailMessage = styled.div`
        p{
            padding:10px;
            margin-right: 20px;
            overflow-wrap: break-word;
        }
    `;

    const history = useNavigate();

    const selectMail = useSelector(selectOpenMail);
  return (
    <MailContainer>
        <MailTools>
            <MailToolsLeft>
                <IconButton onClick={() => history("/")}>
                    <ArrowBackIcon/>
                </IconButton>
                <IconButton>
                    <MoveToInboxIcon/>
                </IconButton>
                <IconButton>
                    <ErrorIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton>
                    <EmailIcon/>
                </IconButton>
                <IconButton>
                    <WatchLaterIcon/>
                </IconButton>
                <IconButton>
                    <CheckCircleIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </MailToolsLeft>
            <MailToolsRight>
                <IconButton>
                    <UnfoldMoreIcon/>
                </IconButton>
                <IconButton>
                    <PrintIcon/>
                </IconButton>
                <IconButton>
                    <ExitToAppIcon/>
                </IconButton>
            </MailToolsRight>
        </MailTools>
        <MailBody>
            <MailBodyHeader>
    
                <h2>{selectMail?.subject}</h2>
                <LabelImportantIcon className='important'/>
                <p >{selectMail?.title}</p>
                <p className='time'>{selectMail?.time}</p>
            </MailBodyHeader>
            <MailMessage>
                <p>{selectMail?.description}</p>
            </MailMessage>
        </MailBody>
    </MailContainer>
  )
}

export default Mail