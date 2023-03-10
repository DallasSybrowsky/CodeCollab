import React from 'react';

import { BoldLink, BoxContainer, FormContainer, Input, MutedLink,  SubmitButton } from '../accountBox/Common';

 

export function LoginForm() {
    return (
        <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      
      <MutedLink  id ="muted-link" href="#">Forget your password?</MutedLink >
      
      <SubmitButton type="submit">Sign in</SubmitButton>
      
      <MutedLink id="muted-link" href="#">
        Don't have an account?<BoldLink  id="bold" href="#">SignUp</BoldLink>
        
      </MutedLink>
    </BoxContainer>
    )
    
}
