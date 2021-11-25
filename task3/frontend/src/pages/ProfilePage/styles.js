import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`  
  max-width: 1024px;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 20px;
`;

export const Profile = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: lightblue;
`;

export const Line = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`

export const Avatar = styled.img`
  width: 200px;
`

export const Text  = styled.div`
  @media (min-width: 768px) {
    padding-left: 10px;
  }
`

export const BackLink = styled(Link)`
  margin: 20px 0;
` 