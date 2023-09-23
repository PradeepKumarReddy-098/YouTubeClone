import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingBodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const TrendingVideosContainer = styled.div`
  width: 100%;
  height: 90vh;
  overflow-y: auto;
`
export const TrendingHeadingContainer = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#ebebeb')};
`
export const IconBackground = styled.div`
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
export const TrendingMainHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
`
export const LoaderContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TrendingVideos = styled.ul`
  padding-left: 0px;
  width: 90%;
  list-style: none;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const TrendingVideo = styled.li`
  width: 100%;
  margin: 10px;
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const TrendingThumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 46%;
  }
`
export const VideosDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
  }
`
export const ChannelImg = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoHeading = styled.h2`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
`
export const VideoParagraph = styled.p`
  color: #94a3b8;
  margin: 0px;
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
`
export const TrendingDot = styled.p`
  font-weight: 600;
  color: #94a3b8;
  font-size: 30px;
  margin-left: 10px;
  margin-right: 10px;
`
