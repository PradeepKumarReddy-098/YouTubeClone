import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import NexWatchContext from '../../context/NexWatchContext'
import {
  SideOptions,
  TabText,
  UnorderList,
  ListItems,
  TabLink,
  ContactUsContainer,
  Heading,
  Paragraph,
  SocialMediaLogos,
  SocialMediaLogosContainer,
} from './styleComponent'

const SideNavbar = () => (
  <NexWatchContext.Consumer>
    {value => {
      const {isDarkMode, activeTab, changeActiveTab} = value
      const changeSidebarToHome = () => {
        changeActiveTab('HOME')
      }

      const changeSidebarToTrending = () => {
        changeActiveTab('TRENDING')
      }

      const changeSidebarToGaming = () => {
        changeActiveTab('GAMING')
      }

      const changeSidebarToSavedVideos = () => {
        changeActiveTab('SAVED VIDEOS')
      }

      const activeTabBgColor = isDarkMode ? '#231f20' : '#e2e8f0'

      return (
        <>
          <SideOptions isDarkMode={isDarkMode}>
            <UnorderList>
              <TabLink to="/">
                <ListItems
                  key="HOME"
                  bgColor={
                    activeTab === 'HOME' ? activeTabBgColor : 'transparent'
                  }
                  onClick={changeSidebarToHome}
                >
                  <AiFillHome
                    size={30}
                    color={activeTab === 'HOME' ? '#ff0b37' : '#64748b'}
                  />
                  <TabText color={isDarkMode ? '#f1f1f1' : '#000000'}>
                    Home
                  </TabText>
                </ListItems>
              </TabLink>
              <TabLink to="/trending">
                <ListItems
                  key="TRENDING"
                  bgColor={
                    activeTab === 'TRENDING' ? activeTabBgColor : 'transparent'
                  }
                  onClick={changeSidebarToTrending}
                >
                  <FaFire
                    size={30}
                    color={activeTab === 'TRENDING' ? '#ff0b37' : '#64748b'}
                  />
                  <TabText color={isDarkMode ? '#f1f1f1' : '#000000'}>
                    Trending
                  </TabText>
                </ListItems>
              </TabLink>
              <TabLink to="/gaming">
                <ListItems
                  key="GAMING"
                  bgColor={
                    activeTab === 'GAMING' ? activeTabBgColor : 'transparent'
                  }
                  onClick={changeSidebarToGaming}
                >
                  <SiYoutubegaming
                    size={30}
                    color={activeTab === 'GAMING' ? '#ff0b37' : '#64748b'}
                  />
                  <TabText color={isDarkMode ? '#f1f1f1' : '#000000'}>
                    Gaming
                  </TabText>
                </ListItems>
              </TabLink>
              <TabLink to="/saved-videos">
                <ListItems
                  key="SAVED VIDEOS"
                  bgColor={
                    activeTab === 'SAVED VIDEOS'
                      ? activeTabBgColor
                      : 'transparent'
                  }
                  onClick={changeSidebarToSavedVideos}
                >
                  <MdPlaylistAdd
                    size={30}
                    color={activeTab === 'SAVED VIDEOS' ? '#ff0b37' : '#64748b'}
                  />
                  <TabText color={isDarkMode ? '#f1f1f1' : '#000000'}>
                    Saved Videos
                  </TabText>
                </ListItems>
              </TabLink>
            </UnorderList>
            <ContactUsContainer isDarkMode={isDarkMode}>
              <Heading>CONTACT US</Heading>
              <SocialMediaLogosContainer>
                <SocialMediaLogos
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialMediaLogos
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialMediaLogos
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaLogosContainer>
              <Paragraph>
                Enjoy! Now to see your channels and recommendations!
              </Paragraph>
            </ContactUsContainer>
          </SideOptions>
        </>
      )
    }}
  </NexWatchContext.Consumer>
)
export default SideNavbar
