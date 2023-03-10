import React from "react";
import styled from "styled-components";
import { LoginForm } from "./LoginForm";
import {motion} from "framer-motion";
import { useState } from "react";
// import  AccountBox from "../accountBox";
import AccountBox from '../../components/accountBox';

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;
const BackDrop = styled(motion.div)`
width: 160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
transform: rotate(60deg);
top: -290px;
left: -70px;
background:#FFC442;
background: 
background: linear-gradient( 58deg, 
    rgba(241, 196, 15, 1) 0%, ) 20%,
    rgba(243, 172, 18, 1) 100% 
    );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #175d8f;
  z-index: 10;
  margin: 0;
`;
const SmallText = styled.h5`
  color: #175d8f;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
    padding-right: 0 1.8em;
    
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
};
const  expandingTransition = {
    type: "spring",

    duration: 2.3,
    stiffness: 30
};



// export function AccountBox(props) {
// const [isExpanded, setExpanded] = useState(false);
// const [active, setActive] = useState("true");


const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
        setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
};




  return (
    <BoxContainer>
      <TopContainer>
        <BackDrop  initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropVariants} />
        <HeaderContainer>
          <HeaderText>Log In</HeaderText>
          <SmallText>Please Log-in to continue!</SmallText>
        </HeaderContainer>
      </TopContainer>
      <InnerContainer>
        <LoginForm />
        {/* <p onClick={}>Click me</p> */}
      </InnerContainer>
    </BoxContainer>
  )






// export default function AccountBox(props) {
//   return (
//     <BoxContainer id="box-container">
//       <TopContainer id="top-container">
//         <BackDrop />
//         <HeaderContainer id="header-container">
//           <HeaderText>Log In</HeaderText>
          
//           <SmallText id ="small-text">Please Log-in to continue!</SmallText>
//         </HeaderContainer>
//       </TopContainer>
//       <InnerContainer id="inner-container">
//         <LoginForm  id="login-form"/>
//       </InnerContainer>
//     </BoxContainer>
//   );
// }
