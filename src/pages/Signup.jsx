import React, { useState } from 'react'
import Auth from '../components/Auth'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {config} from "../firebase/config";
import { useNavigate } from 'react-router-dom';


function Signup() {

    const app = getAuth(config);
    const navigate = useNavigate();

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
      let res =  await createUserWithEmailAndPassword(app, email, password);

      alert("user created..");

      navigate("/login")

    }

  return (
    <Auth Signup={true} setEmail={setEmail}  setPassword={setPassword} submitHandler={submitHandler}/>
  )
}

export default Signup