import React from 'react'
import styled from 'styled-components';

function Section({title, color, Icon, selected}) {

    const SectionContainer = styled.div`
    border-bottom: 3px solid ${ color };
    display: flex;   
    align-items :center;
    background-color: ${(selected && `whitesmoke`) };
    /* border-bottom-width: 2px; */
    padding:15px;
    min-width: 200px;
    cursor: pointer;
    color:grey;
    border-width: ${(!selected && `0px !important`)};

    :hover{
        background-color: whitesmoke;
        border-width: 3px !important;
    }
    h4{
        font-size: 14px;
        margin-left: 15px;
    }
`;

  return (
    <SectionContainer>
        <Icon/>
        <h4>{title}</h4>
    </SectionContainer>
  )
}

export default Section