import React from 'react'
import { Container } from './styles'
import LoginAccount from './LoginAccount'
import RegisterAccount from './RegisterAccount'

const Login = () => {

  return (
    <Container>
      <LoginAccount />
      <RegisterAccount />
    </Container>
  )
}

export default Login