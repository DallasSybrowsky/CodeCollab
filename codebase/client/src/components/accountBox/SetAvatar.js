import React from "react";
import styled from "styled-components";
import {useState, useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import {setAvatarRoute} from "../accountBox/APIRoutes";
import { useNavigate } from "react-router-dom";
// import loader from "../../assets/loader.gif";
const Container = styled.div`
`;
export default function SetAvatar() {
const api = 'https://api.multiavatar.com/45678945';
const navigate = useNavigate();
  return (
   <>
   <Container >
    <div>
    </div>
   </Container>
   <ToastContainer />
   </>
  );
}