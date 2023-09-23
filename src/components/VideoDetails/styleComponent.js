import styled from 'styled-components'

export const VideoDetailBody = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const VideoPlayerAndDetailsContainer = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`
export const VideosSpinnerContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ItemDetails = styled.div`
  width: 90%;
`
export const VideosParagraph = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  font-size: 25px;
`
export const ViewsAndLikesContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const VideoParagraph = styled.p`
  color: #94a3b8;
  margin-right: 10px;
  font-size: 20px;
`
export const LikeButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 20px;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: center;
  font-weight: 600;
`
export const DisLikeButton = styled(LikeButton)`
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`
export const SaveButton = styled(LikeButton)`
  color: ${props => (props.active ? '#2563eb' : '#64748b')}; ;
`
export const Line = styled.hr`
  color: #64748b;
`
export const LogoAndChannelDetails = styled.div`
  display: flex;
`
export const ChannelLogo = styled.img`
  width: 65px;
  height: 50px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 80px;
  }
`
export const ChannelDetails = styled.div`
  margin-left: 10px;
`
export const ChannelName = styled.h2`
  color: ${props => (props.active ? '#f4f4f4' : '#0f0f0f')};
`
export const ChannelSubscribers = styled.p`
  color: #64748b;
`
export const ChannelDescription = styled.p`
  color: ${props => (props.active ? '#f4f4f4' : '#0f0f0f')};
`
