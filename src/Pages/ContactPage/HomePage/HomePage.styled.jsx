import styled from '@emotion/styled';

export const HomePageWrapper=styled.div`
max-width:1100px;
margin:0 auto;
display:flex;
margin-top:50px;
justify-content:space-between;
`

export const TitleWrapper=styled.div`
text-align:center;
margin-top:75px;
display:flex;
flex-direction:column;
position:relative;
`

export const HomePageTitle=styled.h1`
font-size:40px;
font-weight:bold;
color:green;`

export const HomePageSlogan=styled.h1`
font-size:40px;
font-weight:bold;
color:grey;`

export const AuthButtons=styled.ul`
font-size:40px;
font-weight:bold;
color:grey;
display:flex;
justify-content:center;
gap:100px;
list-style:none;
bottom:40px;
min-width:500px;
padding:0px;
margin:0;
`
export const AuthButtonsItem=styled.li`
padding:0;
height: 40px;
display:flex;`

export const SingUpButton=styled.button`

 font-size: 15px;
  background-color: white;
  color: green;
  display: inline-block;
  margin-top: 15px;
  border: solid 1px white;
  min-width: 150px;
  height: 40px;
  box-shadow: 10px 5px 5px grey;
  margin: 0;
  font-weight: bold;

  &:hover {
    scale: 1.2;
  }

`

export const LoginButton=styled.button`

 font-size: 15px;
  background-color:  green;
  color:white;
  display: inline-block;
  margin-top: 15px;
  border: solid 1px white;
  min-width: 150px;
  height: 40px;
  box-shadow: 10px 5px 5px grey;
  margin: 0;
  font-weight: bold;

  &:hover {
    scale: 1.2;
  }

`