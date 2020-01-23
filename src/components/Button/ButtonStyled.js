import styled from 'styled-components';

const setHover = ({ color }) => {
  switch (color) {
    case 'green':
      return 'linear-gradient(180deg, #58b684 0%, #4b936d 100%)';
    case 'red':
      return 'linear-gradient(180deg, #EB5353 0%, #BD4444 100%)';
    case 'pink':
      return 'linear-gradient(180deg, #D6BBD9 0%, #C8A3CC 100%)';
    default:
      return 'linear-gradient(180deg, #D6BBD9 0%, #C8A3CC 100%)';
  }
};

export const ButtonStyled = styled.button`
  height: 40px;
  padding: 12px 44px;
  border: none;
  border-radius: 6px;
  background: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme, primary }) => (primary ? theme.colors.textPrimary : theme.colors.dark)};
  font-size: 14px;

  &:hover {
    cursor: pointer;
    background: ${setHover};
  }

  &:focus {
    outline: none;
  }
`;
