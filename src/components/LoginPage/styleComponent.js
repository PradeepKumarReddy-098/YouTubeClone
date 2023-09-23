import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const LoginCardContainers = styled.div`
  padding: 20px;
  width: 100%;
  box-shadow: 1px 1px 12px 12px #e2e8f0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`
export const WebsiteLogo = styled.img`
  width: 100px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
export const Form = styled.form`
  width: 100%;
  margin-top: 10%;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`
export const LabelAndInputContainer = styled.div`
  width: 100%;
  margin-top: 18px;
`

export const LabelText = styled.label`
  color: #64748b;
  font-weight: 500;
`
export const ShowPasswordText = styled(LabelText)`
  color: #181818;
`
export const InputElement = styled.input`
  width: 100%;
  padding: 12px;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const Checkbox = styled.input``

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 12px;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const ErrorMessage = styled.p`
  color: #ff0000;
`
