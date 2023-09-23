import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  height: 90vh;
  width: 100%;
  margin: 0px;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`
export const BannerClosingContainer = styled.div``
export const BannerItemsContainer = styled.div``
export const HomeVideosContainer = styled.div`
  width: 100%;
  background-color: ${props => props.videoBg};
  padding-left: 12px;
  height: 100%;
  overflow-y: auto;
`
export const BannerClosingBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  align-self: flex-end;
  text-align: right;
`
export const WebsiteLogoImage = styled.img`
  width: 100px;
  height: 35px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 45px;
  }
`
export const BannerText = styled.p`
  color: #181818;
  font-size: 20px;
`
export const BannerButton = styled.button`
  background-color: transparent;
  border: 2px solid #181818;
  color: #181818;
  padding: 10px;
  padding-left: 14px;
  padding-right: 14px;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`
export const SearchElement = styled.input`
  padding: 10px;
  width: 300px;
  background-color: ${props => props.bgColor};
  border: 2px solid #313131;
`
export const IconButton = styled.button`
  background-color: ${props => props.bgColor};
  border: none;
  padding: 8px;
  width: 70px;
`
export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const VideosContainer = styled.div`
  width: 100%;
`
export const HomeVideosList = styled.ul`
  padding-left: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 10px;
  @media screen and (min-width: 576px) {
    width: 310px;
    margin-right: 20px;
  }
`
export const VideoThumbnail = styled.img`
  width: 100%;
`
export const ChannelTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
`
export const ChannelLogo = styled.img`
  width: 30px;
  @media screen and (min-width: 768px) {
    width: 45px;
  }
`
export const ChannelTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#f1f1f1' : '#0f0f0f')};
`
export const ViewsContainer = styled.div`
  color: #94a3b8;
  display: flex;
  align-items: center;
  font-weight: 600;
`
export const Text = styled.p`
  color: #94a3b8;
  margin-left: 10px;
`
export const EmptyVideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoResultImg = styled.img`
  width: 30%;
`
export const NoResultHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#f1f1f1' : '#0f0f0f')};
`
export const NoResultPara = styled.p`
  color: #94a3b8;
`
export const RetryBtn = styled.p`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 18px;
  border-radius: 8px;
`
