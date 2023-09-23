import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVideosBody = styled.div`
  display: flex;
  height: 90vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  overflow-y: auto;
`
export const SavedVideosItem = styled.div`
  width: 100%;
`
export const SavedVideosHeader = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#ebebeb')};
`
export const SavedIconBackground = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#000000' : '#cbd5e1')};
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const SavedVideosHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
`
export const SaveVideos = styled.ul`
  padding-left: 0px;
  @media screen and (min-width: 576px) {
    overflow-y: auto;
    height: 80vh;
    padding-left: 12px;
  }
`
export const SavedVideoLink = styled(Link)`
  text-decoration: none;
`
export const SavedVideo = styled.li`
  margin: 10px;
  @media screen and (min-width: 576px) {
    display: flex;
    margin: 18px;
  }
`
export const SavedVideoThumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 350px;
  }
`

export const SavedVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
  }
`

export const SavedChannelImage = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const DetailsDiv = styled.div``
export const SavedVideoHeadingPara = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
`
export const SavedVideoHeading = styled.h2`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
`

export const SavedVideoParagraph = styled.p`
  color: #94a3b8;
  margin: 0px;
`
export const ViewsAndPublished = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
`
export const SavedVideoDot = styled.p`
  font-weight: 600;
  color: #94a3b8;
  font-size: 30px;
  margin-left: 10px;
  margin-right: 10px;
`

export const NoVideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NoSavedImg = styled.img`
  width: 100%;
  @media screen and (min-width: 560px) {
    width: 50%;
  }
`
