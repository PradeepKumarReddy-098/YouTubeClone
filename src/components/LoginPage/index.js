import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginPageContainer,
  LoginCardContainers,
  Form,
  WebsiteLogo,
  LabelAndInputContainer,
  ShowPasswordText,
  LabelText,
  InputElement,
  Checkbox,
  SubmitButton,
  ErrorMessage,
} from './styleComponent'
import NexWatchContext from '../../context/NexWatchContext'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    error: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  showPasswordOrNot = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitSuccessful = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, error: errorMsg})
  }

  onSubmittingForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccessful(data.jwt_token)
      // console.log(data)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showPassword, showError, error} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NexWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const webLogo = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginPageContainer>
              <LoginCardContainers>
                <WebsiteLogo src={webLogo} alt="website logo" />
                <Form>
                  <LabelAndInputContainer>
                    <LabelText htmlFor="username">Username</LabelText>
                    <br />
                    <InputElement
                      id="username"
                      placeholder="Username"
                      type="text"
                      onChange={this.onChangeUserName}
                      value={username}
                    />
                    <br />
                  </LabelAndInputContainer>
                  <LabelAndInputContainer>
                    <LabelText htmlFor="password">Password</LabelText>
                    <br />
                    <InputElement
                      id="password"
                      placeholder="Password"
                      type={showPassword ? 'text' : 'password'}
                      onChange={this.onChangePassword}
                      value={password}
                    />
                    <br />
                  </LabelAndInputContainer>
                  <LabelAndInputContainer>
                    <Checkbox
                      type="checkbox"
                      id="check"
                      onChange={this.showPasswordOrNot}
                    />
                    <ShowPasswordText htmlFor="check">
                      Show Password
                    </ShowPasswordText>
                  </LabelAndInputContainer>
                  <SubmitButton type="submit" onClick={this.onSubmittingForm}>
                    Login
                  </SubmitButton>
                  {showError && <ErrorMessage>{error}</ErrorMessage>}
                </Form>
              </LoginCardContainers>
            </LoginPageContainer>
          )
        }}
      </NexWatchContext.Consumer>
    )
  }
}

export default LoginPage
