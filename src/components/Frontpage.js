import React, { useContext } from 'react';
import { PagesContext } from './model/PagesContext'
import { CoverImage,
    FrontWrapper,
    MainTitle,
    SubText,
    StartButton} from './StyledComponents'


 const Frontpage = () => {
     const history = useContext(PagesContext);
     const handleStart = () => {
         history.push("/questions/type");
     };
    return (
        <FrontWrapper> 
            <CoverImage />
            <MainTitle>Do you want to know how much an app will cost you?</MainTitle>
            <SubText> If the answer is YES, click on the start button below!</SubText>
            <StartButton onClick={handleStart}>Start!</StartButton>
        </FrontWrapper>
    )
}
export default Frontpage;

