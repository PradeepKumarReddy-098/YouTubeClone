import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoDetails from './components/VideoDetails'
import NotFound from './components/NotFound'
import AuthorizationRoute from './components/AuthorizationRoute'
import NexWatchContext from './context/NexWatchContext'

class App extends Component {
  state = {
    isDarkMode: false,
    activeTab: 'HOME',
    savedVideosList: [],
  }

  toggleMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  changeSideBarTab = tabName => {
    this.setState({activeTab: tabName})
  }

  changeSavedVideosList = video => {
    this.setState({savedVideosList: video})
  }

  render() {
    const {isDarkMode, activeTab, savedVideosList} = this.state
    return (
      <NexWatchContext.Provider
        value={{
          isDarkMode,
          changeMode: this.toggleMode,
          activeTab,
          changeActiveTab: this.changeSideBarTab,
          savedVideosList,
          updateSavedVideosList: this.changeSavedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <AuthorizationRoute exact path="/" component={Home} />
          <AuthorizationRoute exact path="/trending" component={Trending} />
          <AuthorizationRoute exact path="/gaming" component={Gaming} />
          <AuthorizationRoute
            exact
            path="/saved-videos"
            component={SavedVideos}
          />
          <AuthorizationRoute
            exact
            path="/videos/:id"
            component={VideoDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NexWatchContext.Provider>
    )
  }
}
export default App
