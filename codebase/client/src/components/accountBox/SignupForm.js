import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

import { AccountContext } from "../../components/accountBox/AccountContext";

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../accountBox/Common";

export function SignupForm() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name,value, formState);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(`This is the formstate: ${formState}`);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      {/* {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : ( */}
      <FormContainer id="signup-container" onSubmit={handleFormSubmit}>
        <Input
          id="signup-input1"
          type="text"
          placeholder="Username"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
        <Input
          id="signup-input2"
          type="email"
          placeholder="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        <Input
          id="signup-input3"
          type="password"
          placeholder="Password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
      </FormContainer>
      {/* )}  */}
      <SubmitButton id="signup-button" type="submit">
        Sign Up
      </SubmitButton>
      <MutedLink id="muted-link" href="#">
        Already have an account?
        <BoldLink id="bold" href="#" onClick={switchToSignin}>
          SignIn{" "}
        </BoldLink>
      </MutedLink>

      {/* {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )} */}
    </BoxContainer>
  );
}
