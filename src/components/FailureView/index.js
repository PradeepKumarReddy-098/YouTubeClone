import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureParagraph,
  FailureRetryButton,
} from './styleComponent'
import NexWatchContext from '../../context/NexWatchContext'

const FailureView = props => (
  <NexWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {retry} = props
      const retryRequest = () => {
        retry()
      }
      const image = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      return (
        <FailureViewContainer>
          <FailureImage src={image} alt="failure view" />
          <FailureHeading isDarkMode={isDarkMode}>
            Oops! Something Went Wrong
          </FailureHeading>
          <FailureParagraph>
            We are having some trouble to complete your request. Please try
            again.
          </FailureParagraph>
          <FailureRetryButton onClick={retryRequest}>Retry</FailureRetryButton>
        </FailureViewContainer>
      )
    }}
  </NexWatchContext.Consumer>
)

export default FailureView
