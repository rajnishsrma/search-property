
import React, { useState } from 'react'
import styled from 'styled-components';

function Auth({Signup, setEmail, setPassword, submitHandler}) {

    return (
        <AuthContainer color="orange">
            <form onSubmit={submitHandler}>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} required /></div>
                <button>{Signup ?"signup":"logIn"}</button>
            </form>
        </AuthContainer>
    )
}

export default Auth;

// styled components

const AuthContainer = styled.div`
    
` ;
