import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../../images/misc/${src}.jpg` : "../../images/misc/home-bg.jpg"})
    top left / cover no-repeat;
`;

export const Frame = styled.div``;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
height: 32px;
width: 108px;
margin-right: 40px;

@media(min-width: 1449px){
    height: 45px;
    width; 167px;
}
`;

export const ButtonLink = styled(ReactRouterLink)`
display: flex;
background-color: #e50914;
width: 84px;
height: fit-content;
color: white;
border: 0;
font-size: 15px;
border-radius: 3px;
padding: 17px;
cursor: pointer;
text-decoration: none
box-sizing: border-box;

&:hover{
    background-color: #f40612;
}
`;

export const Feature = styled(Container)`
  padding: 150px 0 150px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 20px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const FeatureCallout = styled.h2`
  color: white;
  font-size: 30px;
  font-weight: bold;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 20px;
`;
