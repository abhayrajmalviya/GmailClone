import React from 'react'
import styled from 'styled-components';

function SidebarOption({Icon, title, number,selected}) {

    
  const SidebarContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    cursor:pointer;
    border-radius: 20px;
    color : ${(selected ? `#c04b37` : `#818181`)};
    background-color: ${(selected && `#fcecec` )};
    padding: 5px 15px 5px 5px;
  
    .MuiSvgIcon-root{
        padding:5px; 
    }
    h3{
        flex: 1;
        margin-left: 10px;
        font-size: 14px;
        font-weight: ${(selected ? `800 !important`: `400` )} ;
    }
    p{
        display:${(selected ? `inline`: `none`)};
        font-weight: 300;
        font-weight: ${(selected ? `800 !important`: `400` )} ;
    }

    :hover{
        color: #c04b37;
        font-weight: 800 !important;
        background-color: #fcecec !important;
        p{
            display: inline;
            color: #c04b37;
            font-weight: 800 !important;
        }   
        h3{
            color: #c04b37;
            font-weight: 800 !important;
        }   
    }
    `;


  return (
    <SidebarContainer className={`${selected && "sidebar--active"}`}>
        <Icon />
        <h3>{title}</h3>
        <p className={`${selected && "sidebar--active"}`}>{number}</p>
    </SidebarContainer>
  )
  

}


export default SidebarOption