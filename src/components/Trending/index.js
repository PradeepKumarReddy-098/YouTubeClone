import {Component} from 'react'
import {FaFire} from 'react-icons/fa'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import FailureView from '../FailureView'
import SideNavbar from '../SideNavbar'
import {
  TrendingBodyContainer,
  TrendingVideosContainer,
  TrendingHeadingContainer,
  IconBackground,
  TrendingMainHeading,
  LoaderContainer,
  TrendingVideos,
  VideoLink,
  TrendingVideo,
  TrendingThumbnail,
  VideosDetailsContainer,
  ChannelImg,
  VideoHeading,
  VideoParagraph,
  ViewsAndPublishedContainer,
  TrendingDot,
} from './styleComponent'
import NexWatchContext from '../../context/NexWatchContext'

const displayTrendingView = {
  initial: 'Initial',
  inProgress: 'In Progress',
  successView: 'SUCCESS',
  failureView: 'FAILURE',
}

class Trending extends Component {
  state = {
    display: displayTrendingView.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({
      display: displayTrendingView.inProgress,
    })
    const response = await fetch('https://apis.ccbp.in/videos/trending', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    })
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(videoDetails => ({
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
        },
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
      }))
      this.setState({
        trendingVideos: updatedData,
        display: displayTrendingView.successView,
      })
    } else {
      this.setState({display: displayTrendingView.failureView})
    }
  }

  retry = () => {
    this.getTrendingData()
  }

  spinnerView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  trendingView = () => (
    <NexWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const {trendingVideos} = this.state
        return (
          <TrendingVideos>
            {trendingVideos.map(video => (
              <VideoLink to={`videos/${video.id}`}>
                <TrendingVideo>
                  <TrendingThumbnail
                    src={video.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <VideosDetailsContainer>
                    <ChannelImg
                      src={video.channel.profileImageUrl}
                      alt="channel logo"
                    />
                    <div>
                      <VideoHeading isDarkMode={isDarkMode}>
                        {video.title}
                      </VideoHeading>
                      <VideoParagraph>{video.channel.name}</VideoParagraph>
                      <ViewsAndPublishedContainer>
                        <VideoParagraph>{video.viewCount} Views</VideoParagraph>
                        <TrendingDot> . </TrendingDot>
                        <VideoParagraph>
                          {formatDistanceToNow(new Date(video.publishedAt))}
                        </VideoParagraph>
                      </ViewsAndPublishedContainer>
                    </div>
                  </VideosDetailsContainer>
                </TrendingVideo>
              </VideoLink>
            ))}
          </TrendingVideos>
        )
      }}
    </NexWatchContext.Consumer>
  )

  renderTrendingView = () => {
    const {display} = this.state
    switch (display) {
      case displayTrendingView.inProgress:
        return this.spinnerView()
      case displayTrendingView.successView:
        return this.trendingView()
      case displayTrendingView.failureView:
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
              <TrendingBodyContainer
                isDarkMode={isDarkMode}
                data-testid="trending"
              >
                <SideNavbar />
                <TrendingVideosContainer>
                  <TrendingHeadingContainer isDarkMode={isDarkMode}>
                    <IconBackground isDarkMode={isDarkMode}>
                      <FaFire size={30} color="#ff0b37" />
                    </IconBackground>
                    <VideoLink>
                      <TrendingMainHeading isDarkMode={isDarkMode}>
                        Trending
                      </TrendingMainHeading>
                    </VideoLink>
                  </TrendingHeadingContainer>
                  {this.renderTrendingView()}
                </TrendingVideosContainer>
              </TrendingBodyContainer>
            </>
          )
        }}
      </NexWatchContext.Consumer>
    )
  }
}

export default Trending
