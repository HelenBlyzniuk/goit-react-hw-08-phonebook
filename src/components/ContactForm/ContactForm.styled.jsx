import styled from '@emotion/styled';

export const FormContainer = styled.form`
  width: 600px;
  border: solid 1px green;
  padding: 20px;
  box-shadow: 10px 5px 5px grey;
  // margin:0 auto;
  margin-top:30px;
  margin-bottom:0;
  margin-left:auto;
  margin-right:auto;
`;

export const FormLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  color: green;
  
`;

export const FormInput = styled.input`
  font-size: 15px;
  color: green;
  display: block;
  border: solid 1px green;
  outline: green;
  width:500px;
  height: 40px;
  margin-bottom:20px;
  margin-top:10px;
`;

export const FormButton = styled.button`
  font-size: 15px;
  background-color: green;
  color: white;
  display: block;
  margin-top: 15px;
  border: solid 1px white;
  min-width: 100px;
  height: 40px;
  box-shadow: 10px 5px 5px grey;
  &:hover {
    scale: 1.2;
  }
`;
