import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`
export const FailureImage = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#f1f1f1' : '#212121')};
`
export const FailureParagraph = styled.p`
  color: #94a3b8;
  font-size: 20px;
`
export const FailureRetryButton = styled.button`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 18px;
  border-radius: 8px;
`
