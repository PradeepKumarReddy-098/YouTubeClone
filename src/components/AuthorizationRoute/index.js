import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const AuthorizationRoute = props => {
  if (Cookies.get('jwt_token') !== undefined) {
    return <Route {...props} />
  }
  return <Redirect to="/login" />
}

export default AuthorizationRoute
