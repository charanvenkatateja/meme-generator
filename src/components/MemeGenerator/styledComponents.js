// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  min-height: 100vh;
  @media screen and (max-width: 567px) {
    flex-direction: column;
  }
`
export const Label = styled.label`
  font-size: 13px;
`
export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  height: auto;
  width: auto;
  border: 1px solid #000000;
  box-shadow: 5px 0px 5px 0px grey;
  border-radius: 12px;
  background-color: transparent;
  @media screen and (max-width: 567px) {
    flex-direction: column;
    order: 1;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const MainHeading = styled.h1`
  color: #0070c1;
  font-family: 'Roboto';
  font-size: 25px;
`
export const Button = styled.button`
  padding: 4px 12px 4px 12px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: 10px;
  background-color: blue;
  color: #ffffff;
  align-self: flex-start;
  margin-top: 15px;
`
export const Heading = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
`

export const OutputContainer = styled.div`
  background-image: url(${props => props.bgImg});
  background-size: cover;
  height: 300px;
  width: 300px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  @media screen and (max-width: 567px) {
    margin-bottom: 25px;

    margin-left: 0px;
  }
`
