import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { config } from '../firebase/config';
import Auth from '../components/Auth';


function Login() {

    const app = getAuth(config);
    const navigate = useNavigate();

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
      let res =  await signInWithEmailAndPassword(app, email, password);

      console.log("user loged In..", res.user);

      navigate("/admin");

    }

  return (
    <Auth  setEmail={setEmail}  setPassword={setPassword} submitHandler={submitHandler} />
  )
}

export default Login