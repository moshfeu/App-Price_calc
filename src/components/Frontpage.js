import React from 'react';
import {Link} from 'react-router-dom';
import {CoverImage,
    FrontWrapper,
    MainTitle,
    SubText,
    StartButton} from './StyledComponents'


 function Frontpage(props) {
    return (
        <FrontWrapper> 
            <CoverImage />
            <MainTitle>Do you want to know how much an app will cost you?</MainTitle>
            <SubText> If the answer is YES, click on the start button below!</SubText>
            <Link to='/questions/type' >
                    <StartButton>Start!</StartButton>
            </Link>  
        </FrontWrapper>
    )
}
export default Frontpage;

