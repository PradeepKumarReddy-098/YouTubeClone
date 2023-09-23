import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import FailureView from '../FailureView'
import NexWatchContext from '../../context/NexWatchContext'
import {
  VideoDetailBody,
  VideoPlayerAndDetailsContainer,
  VideosSpinnerContainer,
  ItemDetails,
  VideosParagraph,
  ViewsAndLikesContainer,
  Container,
  VideoParagraph,
  LikeButton,
  DisLikeButton,
  SaveButton,
  Line,
  LogoAndChannelDetails,
  ChannelLogo,
  ChannelDetails,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
} from './styleComponent'

const displayVideoView = {
  initial: 'Initial',
  inProgress: 'In Progress',
  successView: 'SUCCESS',
  failureView: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    display: displayVideoView.initial,
    videoDetails: {},
    liked: false,
    disLiked: false,
  }

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({display: displayVideoView.inProgress})
    const {match} = this.props
    const {params} = match
    const token = Cookies.get('jwt_token')
    const response = await fetch(`https://apis.ccbp.in/videos/${params.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    if (response.ok) {
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        display: displayVideoView.successView,
        videoDetails: updatedData,
      })
    } else {
      this.setState({display: displayVideoView.failureView})
    }
  }

  retry = () => {
    this.getVideoData()
  }

  changeLikeState = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
      disLiked: false,
    }))
  }

  changeDislikeState = () => {
    this.setState(prevState => ({
      disLiked: !prevState.disLiked,
      liked: false,
    }))
  }

  renderVideosView = () => (
    <NexWatchContext.Consumer>
      {value => {
        let saved = false
        let savedVideo
        const {isDarkMode, savedVideosList, updateSavedVideosList} = value
        const {videoDetails, liked, disLiked} = this.state
        const checkVideo = savedVideosList.find(
          video => video.id === videoDetails.id,
        )

        if (checkVideo === undefined) {
          saved = false
        } else {
          saved = true
        }

        const saveOrUnSaveVideo = () => {
          if (checkVideo === undefined) {
            savedVideo = [...savedVideosList, videoDetails]
            console.log(savedVideo)
            updateSavedVideosList(savedVideo)
          } else {
            savedVideo = savedVideosList.filter(
              video => video.id !== videoDetails.id,
            )
            updateSavedVideosList(savedVideo)
          }
        }

        // console.log(savedVideosList)

        return (
          <VideoPlayerAndDetailsContainer>
            <ItemDetails>
              <ReactPlayer
                url={videoDetails.videoUrl}
                controls
                width="100%"
                height="90%"
              />

              <VideosParagraph isDarkMode={isDarkMode}>
                {videoDetails.title}
              </VideosParagraph>
              <ViewsAndLikesContainer>
                <Container>
                  <VideoParagraph>
                    {videoDetails.viewCount} Views
                  </VideoParagraph>
                  <VideoParagraph> . </VideoParagraph>
                  <VideoParagraph>
                    {formatDistanceToNow(new Date(videoDetails.publishedAt))}
                  </VideoParagraph>
                </Container>
                <Container>
                  <LikeButton
                    type="button"
                    onClick={this.changeLikeState}
                    active={liked}
                  >
                    <AiOutlineLike size={20} />
                    Like
                  </LikeButton>
                  <DisLikeButton
                    type="button"
                    active={disLiked}
                    onClick={this.changeDislikeState}
                  >
                    <AiOutlineDislike size={20} />
                    Dislike
                  </DisLikeButton>
                  <SaveButton
                    type="button"
                    active={saved}
                    onClick={saveOrUnSaveVideo}
                  >
                    <MdPlaylistAdd />
                    {saved ? 'Saved' : 'Save'}
                  </SaveButton>
                </Container>
              </ViewsAndLikesContainer>
              <Line />
              <LogoAndChannelDetails>
                <ChannelLogo
                  src={videoDetails.channel.profileImageUrl}
                  alt="channel logo"
                />
                <ChannelDetails>
                  <>
                    <ChannelName isDarkMode={isDarkMode}>
                      {videoDetails.channel.name}
                    </ChannelName>
                    <ChannelSubscribers>
                      {videoDetails.channel.subscriberCount} Subscribers
                    </ChannelSubscribers>
                  </>
                  <ChannelDescription isDarkMode={isDarkMode}>
                    {videoDetails.description}
                  </ChannelDescription>
                </ChannelDetails>
              </LogoAndChannelDetails>
            </ItemDetails>
          </VideoPlayerAndDetailsContainer>
        )
      }}
    </NexWatchContext.Consumer>
  )

  spinnerView = () => (
    <VideosSpinnerContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </VideosSpinnerContainer>
  )

  renderVideos = () => {
    const {display} = this.state
    switch (display) {
      case displayVideoView.inProgress:
        return this.spinnerView()
      case displayVideoView.successView:
        return this.renderVideosView()
      case displayVideoView.failureView:
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
          const bgColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
          return (
            <>
              <Header />
              <VideoDetailBody bgColor={bgColor} data-testid="videoItemDetails">
                <SideNavbar />
                {this.renderVideos()}
              </VideoDetailBody>
            </>
          )
        }}
      </NexWatchContext.Consumer>
    )
  }
}

export default VideoDetails
