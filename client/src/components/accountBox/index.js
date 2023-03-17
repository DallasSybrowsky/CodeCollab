import React from "react";
import styled from "styled-components";
import { LoginForm } from "./LoginForm";
import { motion } from "framer-motion";
import { useState } from "react";
import { AccountContext } from "./AccountContext";
import { SignupForm } from "./SignupForm";
// import  AccountBox from "../accountBox";

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
    width: "290%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

//  this collapses the form when you click on the button

export  default function AccountBox(props) {
    //this is the state that toggles the form

  const [isExpanded, setExpanded] = useState(false);

  //this is the state that toggles the form between signin and signup
  const [active, setActive] = useState("signin");

  //   this toggles
  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  //   this toggles
  const switchToSignup = () => {
    console.log("running")
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };


    //   this toggles
  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  //this is the context value that is passed to the children components

  const contextValue = { switchToSignup, switchToSignin, playExpandingAnimation };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome Back</HeaderText>
              <SmallText>Please Log-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create Account</HeaderText>
              <SmallText>Please Sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}

          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
