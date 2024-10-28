import styled from 'styled-components'


export const LoginButton = styled.div`
width: 100px;
height: 40px;
background-color: #007BFF;
color: #fff;


`




export const ButtonHome = styled.button`
  background-color: ${({ primary }) => (primary ? '#007bff' : '#e0e0e0')};
  color: ${({ primary }) => (primary ? '#ffffff' : '#333')};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

