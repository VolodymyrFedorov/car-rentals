import styled from '@emotion/styled';

export const Item = styled.div`
  text-transform: capitalize;

  & > span[data-value] {
    color: ${props => props.theme.colors.blue};
    font-weight: 600;
    font-size: 13px;
  }
`;
