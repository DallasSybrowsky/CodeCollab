import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../components/accountBox/AccountContext';

import { BoldLink, BoxContainer, FormContainer, Input, MutedLink,  SubmitButton } from '../accountBox/Common';

 



export function SignupForm() {

    const { switchToSignin } = useContext(AccountContext);


    return (
        <BoxContainer>
      <FormContainer id="signup-container">
        <Input id="signup-input" type="text" placeholder="Name or Handle" />
        <Input id="signup-input" type="email" placeholder="Email" />
        <Input id="signup-input" type="password" placeholder="Password" />
        <Input  id="signup-input"type="password" placeholder="Confirm Password" />
      </FormContainer>
      
      
      
      <SubmitButton id="" type="submit">Sign Up</SubmitButton>
      
      <MutedLink id="muted-link" href="#">
        Already have an account?<BoldLink  id="bold" href="#" onClick={switchToSignin}>SignIn </BoldLink>
        
      </MutedLink>
    </BoxContainer>
    )
    
}
