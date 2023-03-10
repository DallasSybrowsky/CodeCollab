import React from 'react';
import styled from 'styled-components';
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
const BackDrop = styled.div`
width: 160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
transform: rotate(60deg);
top: -290px;
left: -70px;
background: #fff;
box-shadow: -1px 14px 28px rgba(15, 15, 15, 0.25),
0 10px 10px rgba(15, 15, 15, 0.22);
`;
export default function AccountBox(props) {
    return (
        <div>
            <h1>AccountBox</h1>
        </div>
    )
}