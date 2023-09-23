import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 90vh;
  width: 99vw;
  display: flex;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const NotFoundView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NotFoundImg = styled.img`
  width: 100%;
  @media screen and (min-width: 568px) {
    width: 40%;
  }
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
export const NotFoundParagraph = styled.p`
  color: #606060;
  font-size: 20px;
`
