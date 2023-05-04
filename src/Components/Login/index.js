import React from 'react'
import { Container } from './styles'
import LoginAccount from './LoginAccount'
import RegisterAccount from './RegisterAccount'
import { GlobalContext } from '../Context'

const Login = () => {
  const { setToggleMenuMobile } = React.useContext(GlobalContext);

  React.useEffect(() => {
    setToggleMenuMobile('');
  }, [setToggleMenuMobile])

  return (
    <Container>
      <LoginAccount />
      <RegisterAccount />
    </Container>
  )
}

export default Login