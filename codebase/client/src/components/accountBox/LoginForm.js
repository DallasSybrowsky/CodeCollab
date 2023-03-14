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
        <Input id="login-input" type="email" placeholder="Email" />
        <Input  id="login-input" type="password" placeholder="Password" />
      </FormContainer>

      <MutedLink id="muted-link" href="#">
        Forget your password?
      </MutedLink>

      <SubmitButton  id="login-button"type="submit">Sign In</SubmitButton>

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
