import Header from '../Header'
import SideNavbar from '../SideNavbar'
import NexWatchContext from '../../context/NexWatchContext'
import {
  NotFoundContainer,
  NotFoundView,
  NotFoundImg,
  NotFoundHeading,
  NotFoundParagraph,
} from './styleComponent'

const NotFound = () => (
  <NexWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const image = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NotFoundContainer isDarkMode={isDarkMode}>
            <SideNavbar />
            <NotFoundView>
              <NotFoundImg src={image} alt="not found" />
              <NotFoundHeading isDarkMode={isDarkMode}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundParagraph>
                we are sorry, the page you requested could not be found.
              </NotFoundParagraph>
            </NotFoundView>
          </NotFoundContainer>
        </>
      )
    }}
  </NexWatchContext.Consumer>
)

export default NotFound
