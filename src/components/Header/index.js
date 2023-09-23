import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {IoReorderThree} from 'react-icons/io5'
import NexWatchContext from '../../context/NexWatchContext'
import {
  NavbarContainer,
  WebsiteLogo,
  OptionsContainer,
  ThemeButton,
  LogoutIconButton,
  LogoutButton,
  ProfileButton,
  ProfileImage,
  ThreeLines,
  LogoutContainer,
  CloseButton,
  ConfirmButton,
  AlartMsg,
  ButtonsContainer,
  LinkItem,
} from './styleComponent'

const Header = props => (
  <NexWatchContext.Consumer>
    {value => {
      const {isDarkMode, changeMode} = value
      const color = isDarkMode ? '#ffffff' : '#000000'
      const bgColor = isDarkMode ? '#231f20' : '#f1f5f9'

      const onChangeMode = () => {
        changeMode()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarContainer bgColor={bgColor}>
          <LinkItem to="/">
            <WebsiteLogo
              src={
                isDarkMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LinkItem>
          <OptionsContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeMode}
            >
              {isDarkMode ? (
                <BsBrightnessHigh color="#ffffff" size={30} />
              ) : (
                <BsMoon size={30} />
              )}
            </ThemeButton>
            <ThreeLines>
              <IoReorderThree size={30} color={color} />
            </ThreeLines>
            <ProfileButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileButton>
            <Popup
              modal
              trigger={
                <LogoutButton
                  type="button"
                  bgColor={bgColor}
                  color={isDarkMode ? '#ffffff' : '#4f46e5'}
                >
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <LogoutContainer color={isDarkMode ? '#000000' : '#f1f1f1'}>
                  <AlartMsg color={color}>
                    Are you sure, you want to logout?
                  </AlartMsg>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </LogoutContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIconButton type="button">
                  <FiLogOut size={25} color={color} />
                </LogoutIconButton>
              }
              className="popup-content"
            >
              {close => (
                <LogoutContainer color={isDarkMode ? '#000000' : '#f1f1f1'}>
                  <AlartMsg color={color}>
                    Are you sure, you want to logout?
                  </AlartMsg>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </LogoutContainer>
              )}
            </Popup>
          </OptionsContainer>
        </NavbarContainer>
      )
    }}
  </NexWatchContext.Consumer>
)

export default withRouter(Header)
