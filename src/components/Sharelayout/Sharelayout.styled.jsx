import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header=styled.header`
display: flex;
align-items: center;
justify-content: space-between;

padding: 15px 0;
margin-bottom: 16px;
border-bottom: 1px solid green;
box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.15);`


export const StyledLink = styled(NavLink)`

font-size: 25px;
  background-color: white;
  color: grey;
  display: inline-block;
  margin-top: 15px;
  border: solid 1px white;
  min-width: 150px;
  height: 40px;
  text-decoration:none;
  margin: 0;
  font-weight: bold;
  text-align:center;

  &.active {
    color:green;
  }

`