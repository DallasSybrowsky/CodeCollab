import React from "react";
import { useContext } from "react";
import { AccountContext } from "../../components/accountBox/AccountContext";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../accountBox/Common";


export function LoginForm(props) {

    const { switchToSignup } = useContext(AccountContext);
    console.log("switchToSignup", switchToSignup);



  return (
    // <AccountContext.Consumer>
    //     {({ switchToSignup, switchToSignin, playExpandingAnimation }) => (
    <BoxContainer>
      <FormContainer id="login-container">
        <Input id="login-input1" type="email" placeholder="Email" />
        <Input  id="login-input2" type="password" placeholder="Password" />
      <SubmitButton  id="login-button"type="submit">Sign In</SubmitButton>
      </FormContainer>

      <MutedLink id="muted-link" href="#">
        Forget your password?
      </MutedLink>


      <MutedLink id=" muted-link" href="#">
        Don't have an account?
        <BoldLink id="bold" href="#" onClick={switchToSignup}>
          SignUp
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    //     )}
    // </AccountContext.Consumer>
  );
}
