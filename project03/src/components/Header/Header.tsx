import useAuthContext from '@context/auth'
import KoalaText from '@icons/KoalaText'
import * as Icon from '@icons/Logo'
import Signin from '@icons/Signin'
import Signup from '@icons/Signup'
import * as S from './Header.style'

function Header() {
  const { loggedIn, user, logOut } = useAuthContext()

  return (
    <S.Container>
      {loggedIn ? (
        <>
          <S.LoggedInWrapper>
            {user.providerData[0].providerId.includes('google') && <Icon.Google size={26} />}
            {user.providerData[0].providerId.includes('github') && <Icon.Github size={30} />}
            {user.providerData[0].providerId.includes('password') && (
              <S.DefaultIcon>✉️</S.DefaultIcon>
            )}
            <S.Text>{user.displayName || user.email}</S.Text>
          </S.LoggedInWrapper>
          <S.LogoutBtn onClick={logOut}>logout</S.LogoutBtn>
        </>
      ) : (
        <>
          <KoalaText />
          <S.ButtonWrapper>
            <S.Button type="signin">
              <Signin />
              <S.SLink to="/signin">signin</S.SLink>
            </S.Button>
            <S.Button type="signup">
              <Signup />
              <S.SLink to="/signup">signup</S.SLink>
            </S.Button>
          </S.ButtonWrapper>
        </>
      )}
    </S.Container>
  )
}

export default Header
