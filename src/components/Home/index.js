import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {GrFormClose, GrSearch} from 'react-icons/gr'
import SideNavbar from '../SideNavbar'
import Header from '../Header'
import FailureView from '../FailureView'
// import SpinnerView from '../ReusableCode'
import NexWatchContext from '../../context/NexWatchContext'
import {
  HomeContainer,
  HomeVideosContainer,
  BannerContainer,
  BannerItemsContainer,
  BannerClosingContainer,
  BannerClosingBtn,
  WebsiteLogoImage,
  BannerText,
  BannerButton,
  SearchElement,
  SearchContainer,
  SpinnerContainer,
  IconButton,
  VideosContainer,
  HomeVideosList,
  VideoLink,
  VideoItem,
  VideoThumbnail,
  ChannelTitleContainer,
  ChannelLogo,
  ChannelTitle,
  Text,
  ViewsContainer,
  EmptyVideosContainer,
  NoResultImg,
  NoResultHeading,
  NoResultPara,
  RetryBtn,
} from './styleComponent'

const displayHomeView = {
  initial: 'Initial',
  inProgress: 'In Progress',
  successView: 'SUCCESS',
  failureView: 'FAILURE',
}

class Home extends Component {
  state = {
    showBanner: true,
    display: displayHomeView.initial,
    searchValue: '',
    videosList: [],
  }

  componentDidMount() {
    this.getHomeData()
  }

  getHomeData = async () => {
    const {searchValue} = this.state
    this.setState({
      display: displayHomeView.inProgress,
    })
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchValue}`,
      options,
    )
    const data = await response.json()
    if (response.ok) {
      const newData = data.videos.map(video => ({
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      // console.log(newData)
      this.setState({
        display: displayHomeView.successView,
        videosList: newData,
      })
    } else {
      this.setState({display: displayHomeView.failureView})
    }
  }

  changeSearchValue = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  retry = () => {
    this.getHomeData()
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  search = () => {
    this.getHomeData()
  }

  spinnerView = () => (
    <SpinnerContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </SpinnerContainer>
  )

  banner = () => {
    const {showBanner} = this.state
    if (showBanner) {
      return (
        <BannerContainer data-testid="banner">
          <BannerClosingContainer>
            <BannerClosingBtn
              data-testid="close"
              type="button"
              onClick={this.closeBanner}
            >
              <GrFormClose size={25} />
            </BannerClosingBtn>
          </BannerClosingContainer>
          <BannerItemsContainer>
            <WebsiteLogoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <BannerText>Buy Nxt Watch Premium prepaid plan with UPI</BannerText>
            <BannerButton>GET IT NOW</BannerButton>
          </BannerItemsContainer>
        </BannerContainer>
      )
    }
    return null
  }

  homeView = () => (
    <NexWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const {videosList} = this.state
        if (videosList.length > 0) {
          return (
            <VideosContainer>
              <HomeVideosList>
                {videosList.map(eachItem => (
                  <VideoLink key={eachItem.id} to={`videos/${eachItem.id}`}>
                    <VideoItem key={eachItem.id}>
                      <VideoThumbnail
                        src={eachItem.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <ChannelTitleContainer>
                        <ChannelLogo
                          src={eachItem.channel.profileImageUrl}
                          alt="channel logo"
                        />
                        <BannerItemsContainer>
                          <ChannelTitle isDarkMode={isDarkMode}>
                            {eachItem.title}
                          </ChannelTitle>

                          <Text>{eachItem.channel.name}</Text>
                          <ViewsContainer>
                            <Text>{eachItem.viewCount} Views </Text>
                            <Text> . </Text>
                            <Text>
                              {formatDistanceToNow(
                                new Date(eachItem.publishedAt),
                              )}
                            </Text>
                          </ViewsContainer>
                        </BannerItemsContainer>
                      </ChannelTitleContainer>
                    </VideoItem>
                  </VideoLink>
                ))}
              </HomeVideosList>
            </VideosContainer>
          )
        }
        return (
          <EmptyVideosContainer>
            <NoResultImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultHeading isDarkMode={isDarkMode}>
              No Search results found
            </NoResultHeading>
            <NoResultPara>
              Try different key words or remove search filter
            </NoResultPara>
            <RetryBtn type="button" onClick={this.retry}>
              Retry
            </RetryBtn>
          </EmptyVideosContainer>
        )
      }}
    </NexWatchContext.Consumer>
  )

  renderView = () => {
    const {display} = this.state
    switch (display) {
      case displayHomeView.inProgress:
        return this.spinnerView()
      case displayHomeView.successView:
        return this.homeView()
      case displayHomeView.failureView:
        return <FailureView retry={this.retry} />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <NexWatchContext.Consumer>
          {value => {
            const {isDarkMode} = value
            const {searchValue} = this.state
            const videoBg = isDarkMode ? '#000000' : '#ffffff'
            const bgColor = isDarkMode ? '#181818' : '#f9f9f9'
            return (
              <>
                <Header />
                <HomeContainer data-testid="home" bgColor={bgColor}>
                  <SideNavbar />
                  <HomeVideosContainer videoBg={videoBg}>
                    {this.banner()}
                    <SearchContainer>
                      <SearchElement
                        type="search"
                        onChange={this.changeSearchValue}
                        value={searchValue}
                        placeholder="Search"
                        bgColor={bgColor}
                      />
                      <IconButton
                        type="button"
                        bgColor={isDarkMode ? '#231f20' : '#cbd5e1'}
                        onClick={this.search}
                        data-testid="searchButton"
                      >
                        <GrSearch size={20} />
                      </IconButton>
                    </SearchContainer>
                    {this.renderView()}
                  </HomeVideosContainer>
                </HomeContainer>
              </>
            )
          }}
        </NexWatchContext.Consumer>
      </>
    )
  }
}

export default Home
