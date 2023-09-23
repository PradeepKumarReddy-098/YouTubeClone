import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideOptions = styled.div`
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#f1f5f9')};
  min-width: 15%;
  width: 250px;
  display: none;
  padding: 12px;
  height: 97%;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const UnorderList = styled.ul`
  padding-left: 0px;
`
export const ListItems = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const TabLink = styled(Link)`
  text-decoration: none;
`
export const TabText = styled.p`
  font-size: 20px;
  margin-left: 15px;
  color: ${props => props.color};
`
export const ContactUsContainer = styled.div`
  color: ${props => (props.isDarkMode ? ' #f1f1f1' : '#00306e')};
`
export const Heading = styled.h1``
export const Paragraph = styled.p`
  font-weight: 600;
`
export const SocialMediaLogosContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SocialMediaLogos = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
`
