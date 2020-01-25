import styled from 'styled-components';

export const SongListItemStyled = styled.li`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0 0 0;
  padding: 15px;
  width: calc(100% - 2px);
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.dark};
    border: 1px solid #292a2c;
    border-radius: 6px;
  }
`;

export const Image = styled.img`
  box-shadow: 30px 34px 134px rgba(0, 0, 0, 0.35);
  border-radius: 3px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
`;

export const ColumeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: '100%';
  aling-item: 'center';
`;
