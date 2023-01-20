import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from  '../context/firebase'
import { HeaderContainer } from "../containers/Header";
import { FooterContainer } from "../containers/Footer";
import { Form } from "../component";
import * as ROUTES from '../constants/routes'

export default function Signin() {
  const navigate = useNavigate()
  const { firebase } = useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInValid = password === '' === emailAddress === '';
  const handleSignin = (event) => {
    event.preventDefault();
    firebase
    .auth()
    .signInWithEmailAndPassword(emailAddress, password)
    .then(() => {
      navigate(ROUTES.BROWSE)
    })
    .catch((error) => {
      setEmailAddress('')
      setPassword('')
      setError(error.message)
    })

  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email Address"
              valur={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              valur={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disable={isInValid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to='/signup'>Sign up now. </Form.Link>
          </Form.Text>
          <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
