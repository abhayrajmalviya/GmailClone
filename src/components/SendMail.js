import React from 'react'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from '../features/mailSlice';
import {useDispatch} from 'react-redux';

import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"

function SendMail() {

    const SendMailContainer = styled.div`
        position:absolute;
        bottom: 0px;
        right: 50px;
        background-color: #404040;
        width: 60%;
        height: 60%;
        max-width: 500px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display: flex;
        flex-direction: column;
        border: 1px solid whitesmoke;
        box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.24);

        form{
          display: flex;
          flex-direction: column;
          flex:1;
          input{
            height: 30px;
            padding: 10px;
            border: none;
            border-bottom: 1px solid whitesmoke ;
            outline:none;
          }
          .sendmail__message{
            flex:1;
          }
          .sendmail__error{
            background-color: white;
            color: red;
            text-align: right;
            padding: 2px;
          }
        }
    `;
    const SendMailOptions = styled.div`
      Button{
        background-color: #3839cd !important;
        text-transform: capitalize !important;
        margin: 15px !important;
        color: white !important;
      }
    `;
    const SendMailHeader = styled.div`
        padding: 13px;
        display: flex;
        justify-content : space-between;
        align-items : center;
        color: gray;
        h3{
          color: whitesmoke;
          font-size:12px;
        }
        .sendmail__close{
          cursor:pointer;
        }
    `;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
      console.log(formData);
      db.collection('emails').add({
        to: formData.to,
        subject : formData.subject,
        message : formData.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      dispatch(closeSendMessage());
    };
  return (
    <SendMailContainer>
        <SendMailHeader>
            <h3>New Message</h3>
            <CloseIcon className='sendmail__close' onClick={()=> dispatch(closeSendMessage())}/>
        </SendMailHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            placeholder='To' 
            type='email'
            {...register("to",{required: true })}
          />
          {errors.to && <p className='sendmail__error'>enter reciepient address</p>}
          <input 
            placeholder='Subject' 
            type="text"
            {...register("subject",{required: true}) }
          />
          {errors.subject && <p className='sendmail__error'>enter a Subject</p>}
          <input 
            type="text" 
            className='sendmail__message'
            {...register("message",{required: true}) }
          />
          {errors.message && <p className='sendmail__error'>enter some messsge</p>}

          <SendMailOptions>
            <Button
              variant='contained'
              color='primary'
              type='submit'
            > 
              send
            </Button>
          </SendMailOptions>
        </form>
    </SendMailContainer>
  )
}

export default SendMail
