import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import NexWatchContext from '../../context/NexWatchContext'
import {
  SavedVideosBody,
  SavedVideosItem,
  SavedVideosHeader,
  SavedIconBackground,
  SavedVideosHeading,
  SaveVideos,
  SavedVideoHeadingPara,
  SavedVideoLink,
  SavedVideo,
  DetailsDiv,
  SavedVideoThumbnail,
  SavedVideoDetails,
  SavedChannelImage,
  SavedVideoHeading,
  SavedVideoParagraph,
  ViewsAndPublished,
  SavedVideoDot,
  NoVideosContainer,
  NoSavedImg,
} from './styleComponent'

const SavedVideos = () => (
  <NexWatchContext.Consumer>
    {value => {
      const {isDarkMode, savedVideosList} = value
      return (
        <>
          <Header />
          <SavedVideosBody data-testid="savedVideos" isDarkMode={isDarkMode}>
            <SideNavbar />
            <SavedVideosItem>
              {savedVideosList.length >= 1 && (
                <>
                  <SavedVideosHeader isDarkMode={isDarkMode}>
                    <SavedIconBackground isDarkMode={isDarkMode}>
                      <MdPlaylistAdd color="#ff0000" size={20} />
                    </SavedIconBackground>
                    <SavedVideosHeading isDarkMode={isDarkMode}>
                      Saved Videos
                    </SavedVideosHeading>
                  </SavedVideosHeader>
                  <SaveVideos>
                    {savedVideosList.map(video => (
                      <SaveVideos>
                        <SavedVideoLink to={`videos/${video.id}`}>
                          <SavedVideo>
                            <SavedVideoThumbnail
                              src={video.thumbnailUrl}
                              alt="video thumbnail"
                            />
                            <SavedVideoDetails>
                              <SavedChannelImage
                                src={video.channel.profileImageUrl}
                                alt="channel logo"
                              />
                              <DetailsDiv>
                                <SavedVideoHeadingPara isDarkMode={isDarkMode}>
                                  {video.title}
                                </SavedVideoHeadingPara>
                                <SavedVideoParagraph>
                                  {video.channel.name}
                                </SavedVideoParagraph>
                                <ViewsAndPublished>
                                  <SavedVideoParagraph>
                                    {video.viewCount} Views
                                  </SavedVideoParagraph>
                                  <SavedVideoDot>.</SavedVideoDot>
                                  <SavedVideoParagraph>
                                    {formatDistanceToNow(
                                      new Date(video.publishedAt),
                                    )}
                                  </SavedVideoParagraph>
                                </ViewsAndPublished>
                              </DetailsDiv>
                            </SavedVideoDetails>
                          </SavedVideo>
                        </SavedVideoLink>
                      </SaveVideos>
                    ))}
                  </SaveVideos>
                </>
              )}
              {savedVideosList.length === 0 && (
                <NoVideosContainer>
                  <NoSavedImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <SavedVideoHeading isDarkMode={isDarkMode}>
                    No Saved Videos Found
                  </SavedVideoHeading>
                  <SavedVideoParagraph>
                    You can save videos while watching them
                  </SavedVideoParagraph>
                  <SavedVideoParagraph>
                    Save your videos by clicking a button
                  </SavedVideoParagraph>
                </NoVideosContainer>
              )}
            </SavedVideosItem>
          </SavedVideosBody>
        </>
      )
    }}
  </NexWatchContext.Consumer>
)

export default SavedVideos
