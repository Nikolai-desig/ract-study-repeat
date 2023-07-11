import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
`;

export const BudgedSpot = styled.span`
  padding: 4px 15px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: ${props => {
    if (!props.isActive) {
      return 'white';
    }
    switch (props.value) {
      case 'easy':
        return 'green';
      case 'hard':
        return 'red';
      case 'mid':
        return 'orange';
      default:
        return 'white';
    }
  }};
  color: ${props => {
    return props.isActive ? 'white' : 'black';
  }};
`;
