import LabelImportant from '@mui/icons-material/LabelImportant';
import { Checkbox, IconButton } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import { selectMail } from '../features/mailSlice';


function EmailRow({title, description, subject,  id, time}) {
    const EmailRowContainer = styled.div`
        display:flex;
        align-items: center;
        height:auto;
        border-bottom: 1px solid whitesmoke;
        cursor:pointer;
        z-index:999;
        :hover{
            border-top: 1px solid whitesmoke;
            box-shadow: 0px 4px 4px -2px rgba(0,0,0,0.24);
        }
        h3{
            font-size: 13px;
            flex:0.3;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        p{
            padding-right: 15px;
            font-size:9px;
            font-weight:bold5
        }
    `;
    const EmailRowOptions = styled.div`
        display:flex;
    `;

    const EmailRowMessage = styled.div`
        display:flex;
        flex:0.8;
        align-items:center;
        font-size: 13px;    
        h4{
            width: 400px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-left: 10px;
            padding-right: 10px;

            span{
                font-weight:400;
                color:gray;
            }
        }
    `;

    const history = useNavigate();
    const dispatch = useDispatch();


    const openMail =()=>{
        dispatch(
            selectMail(
                {
            title, description, subject,  id, time
            }
        ));
        history("/mail");
    };

  return (
    <EmailRowContainer onClick={openMail}>
        <EmailRowOptions>
            <Checkbox/>
            <IconButton>
                <StarBorderOutlinedIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon/>
            </IconButton>
        </EmailRowOptions>
        
        <h3>{title}</h3>
    
        <EmailRowMessage>
            <h4>
                {subject}{" "}
                <span>-{description}</span>
            </h4>
        </EmailRowMessage>

        <p>{time}</p>
    </EmailRowContainer>
  )
}

export default EmailRow