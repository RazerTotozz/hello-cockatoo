import React from 'react';
import Styled from 'styled-components';

const ContentHeader = Styled.h2 `
    
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
