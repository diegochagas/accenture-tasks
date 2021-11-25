import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`  
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 20px;
`;

export const Profiles = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled(Link)`
  max-width: 200px;
  margin: 10px;
  color: initial;
  padding: 10px;

  &:hover {
    background-color: lightgray;
    color: initial;
  }
`