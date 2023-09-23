import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import FailureView from '../FailureView'
import NexWatchContext from '../../context/NexWatchContext'
import {
  GamingBodyContainer,
  GamingVideosContainer,
  GamingHeadingContainer,
  GamingIconBackground,
  GamingMainHeading,
  LoaderContainers,
  GamingVideos,
  GamingVideoLink,
  GamingThumbnail,
  GamingVideoItem,
  GamingVideoTitle,
  GamingParagraph,
} from './styleComponent'

const displayGamingView = {
  initial: 'Initial',
  inProgress: 'In Progress',
  successView: 'SUCCESS',
  failureView: 'FAILURE',
}

class Gaming extends Component {
  state = {
    display: displayGamingView.initial,
    gamingVideos: [],
  }

  componentDidMount = () => {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({
      display: displayGamingView.inProgress,
    })
    const response = await fetch('https://apis.ccbp.in/videos/gaming', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    })
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(videoDetails => ({
        id: videoDetails.id,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
      }))
      // console.log(updatedData)
      this.setState({
        gamingVideos: updatedData,
        display: displayGamingView.successView,
      })
    } else {
      this.setState({display: displayGamingView.failureView})
    }
  }

  retry = () => {
    this.getGamingData()
  }

  spinnerView = () => (
    <LoaderContainers data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainers>
  )

  gamingView = () => (
    <NexWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const {gamingVideos} = this.state
        return (
          <GamingVideos>
            {gamingVideos.map(video => (
              <GamingVideoLink to={`videos/${video.id}`}>
                <GamingVideoItem key={video.id}>
                  <GamingThumbnail
                    src={video.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <GamingVideoTitle isDarkMode={isDarkMode}>
                    {video.title}
                  </GamingVideoTitle>
                  <GamingParagraph>
                    {video.viewCount} Watching Worldwide
                  </GamingParagraph>
                </GamingVideoItem>
              </GamingVideoLink>
            ))}
          </GamingVideos>
        )
      }}
    </NexWatchContext.Consumer>
  )

  renderGamingView = () => {
    const {display} = this.state
    switch (display) {
      case displayGamingView.inProgress:
        return this.spinnerView()
      case displayGamingView.successView:
        return this.gamingView()
      case displayGamingView.failureView:
        return <FailureView retry={this.retry} />
      default:
        return null
    }
  }

  render() {
    return (
      <NexWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <>
              <Header />
              <GamingBodyContainer data-testid="gaming" isDarkMode={isDarkMode}>
                <SideNavbar />
                <GamingVideosContainer>
                  <GamingHeadingContainer isDarkMode={isDarkMode}>
                    <GamingIconBackground isDarkMode={isDarkMode}>
                      <SiYoutubegaming size={30} color="#ff0b37" />
                    </GamingIconBackground>
                    <GamingMainHeading isDarkMode={isDarkMode}>
                      Gaming
                    </GamingMainHeading>
                  </GamingHeadingContainer>
                  {this.renderGamingView()}
                </GamingVideosContainer>
              </GamingBodyContainer>
            </>
          )
        }}
      </NexWatchContext.Consumer>
    )
  }
}

export default Gaming
