
import styled from 'styled-components';


export const BoxContainer = styled.div`
width: 280px;
min-height: 300px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 6em;
`;

export const FormContainer = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`;


export const MutedLink = styled.a`
font-size: 11px;
color: #4DC4D2;
font-weight: 500;
text-decoration: none;
`;

export const BoldLink = styled.a`
font-size: 11px;
color: #FFC442;
font-weight: 500;
text-decoration: none;
margin: 0 4px;
`;

export const Input = styled.input`
width: 80%;

height: 42px;
outline: none;
border: 1px solid rgba(200, 200, 200, 0.4);
padding: 0px 10px;
border-radius: 2px;
border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
transition: all, 200ms ease-in-out;

&::placeholder {
    color: #4DC4D2;
}
 &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
}


&:focus {
    outline: none;
    border-bottom: 3px solid #FFC442;

}

`;


export const SubmitButton = styled.button`
width: 80%;
padding: 11px 30%;
color:  #175D8F;
font-size: 15px;
font-weight: 600;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
background: #FFC442;
background: linear-gradient( 58deg,
    rgba(241, 196, 15, 1) 0%,
    rgba(243, 172, 18, 1) 100% );

&:hover {
    filter: brightness(1.03);
}

`;


