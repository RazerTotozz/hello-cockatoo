import React from 'react';
import Styled from 'styled-components';

const ContentHeader = Styled.h2 `
    color: rgb(251, 159, 164);
    text-align: left;
    font-weight: 400;
    font-size: 65px;
    line-height: 52px;
    text-transform: uppercase;
    text-size-adjust: 100%;
`;

const ImageBox = Styled.img`

`;

function Content(props) {
    if(props.image){
        return(
            <img src="https://collagecrafting.com/uploads/home2.jpg" alt="FUCK" width='100%' height='100%'></img>
        );
    }
    else{
        return (
            <ContentHeader>
                {props.textHeader}
            </ContentHeader>
        );
    }
}

export default Content;
