import styled from '@emotion/styled';

export const ListBase = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  line-height: 1.5;

  & > li {
    text-transform: capitalize;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const ListPrimary = styled(ListBase)`
  color: ${props => props.theme.colors.gray};

  & > li {
    height: 18px;
    padding-right: 8px;
    &:not(:last-child) {
      border-right: 1px solid #d1d1d1;
    }
  }
`;

export const ListSecondary = styled(ListBase)`
  & > li {
    height: 32px;
    padding: 7px 14px;
    letter-spacing: -0.24px;
    border-radius: 35px;
    background-color: ${props => props.theme.colors.grayLighter};
  }
`;
