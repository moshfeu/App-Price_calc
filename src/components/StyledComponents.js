import styled from "styled-components";

const Icon = styled.img`
  max-width: 5em;
  max-height: 5em;
  border-radius: 50%;
  :hover {
    cursor: pointer;
    transform: scale(1.3);
  }
  :active {
    outline: none;
    transform: translateY(4px);
  }
`;
const CoverImage = styled.img`
  alt: "cover-image";
  content: url("https://images.unsplash.com/photo-1545138697-45eb2968b249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1559&q=80");
  box-shadow: 0px 0px 0px 5px rgba(189, 189, 189, 0.57);
  border-radius: 50%;
  width: 12em;
  height: 12em;
  opacity: 0.9;
`;
const FrontWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  align-items: center;
  background-color: #070707;
`;
const MainTitle = styled.h1`
  color: #e5e5e5;
  max-width: 80vw;
  font-size: 2rem;
  text-align: center;
`;
const SubText = styled.h3`
  color: #e5e5e5;
  max-width: 60vw;
  font-size: 0.8rem;
  text-align: center;
`;
const StartButton = styled.button`
  color: #e5e5e5;
  margin-top: 2em;
  margin-bottom: 1em;
  background-color: #28bd43;
  border: none;
  outline:none;
  border-radius: 25px;
  width: 11em;
  height: 3em;
  font-size: 1em;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
   &:active {
    background-color: #1b822e;
    transform: translateY(4px);
    box-shadow: 0 5px #28bd43;
  }
`;

const Previous = styled.span`
  color: #c1054a;
  font-weight: bold;
  position: absolute;
  top: 3em;
  left: 2em;
  font-family: "Quicksand", sans-serif;
  text-decoration: none;
  &:before {
    content: "« ";
  }
  &:hover {
    cursor: pointer;
    color: #630226;
  }
`;

const Pricing = styled.span`
  color: #c1054a;
  font-weight: bold;
  position: absolute;
  top: 3em;
  right: 2em;
  &:after {
    content: "€";
  }
`;

const MainWrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  align-items: center;
  background-color: #070707;
`;
const MainText = styled.h1`
  color: #e5e5e5;
  max-width: 80vw;
  font-size: 2rem;
  text-align: center;
  grid-area: title;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 2em;
  max-width:100vw;
`;
const SelectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-right: 3em;
  margin-left: 3em;
  h6 {
    margin-top: 3em;
  }
`;

const ButtonLabel = styled.h6`
  color: #e5e5e5;
  text-align:center;
  font-size: 0.8em;
  font-family: "Quicksand", sans-serif;
  width:100%;
`;

const ListItem = styled.li`
  list-style-type: none;
  color: #c1054a;
  font-weight: bolder;
  font-size: 1.5em;
`;
const ContactButton = styled(StartButton)`
  width: 13em;
  height: 3em;
  background-color: #3d8bf2;
  :active {
    background-color: #2e6dbf;
    box-shadow: 0 5px #3d8bf2;
  }
`;

export {
  ContactButton,
  Pricing,
  MainWrapper,
  MainText,
  ButtonsWrapper,
  Icon,
  SelectionsContainer,
  ButtonLabel,
  Previous,
  CoverImage,
  FrontWrapper,
  MainTitle,
  SubText,
  StartButton,
  ListItem
};
