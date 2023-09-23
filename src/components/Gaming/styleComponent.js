import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingBodyContainer = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const GamingVideosContainer = styled.div`
  width: 100%;
  height: 90vh;
  overflow-y: auto;
`
export const GamingHeadingContainer = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#ebebeb')};
`
export const GamingIconBackground = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#000000' : '#cccccc')};
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const GamingMainHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
`
export const LoaderContainers = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const GamingVideos = styled.ul`
  padding-left: 0px;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`
export const GamingVideoLink = styled(Link)`
  text-decoration: none;
`
export const GamingVideoItem = styled.li`
  width: 120px;
  margin: 10px;
  @media screen and (min-width: 768px) {
    width: 270px;
  }
`
export const GamingThumbnail = styled.img`
  width: 100%;
`
export const GamingVideoTitle = styled.h2`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
`
export const GamingParagraph = styled.p`
  color: #94a3b8;
`
