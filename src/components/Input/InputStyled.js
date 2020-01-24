import styled from 'styled-components';

export const InputStyled = styled.input`
  box-sizing: border-box;
  height: 50px;
  width: 400px;
  padding: 10px 35px 10px 15px;
  background: ${({ theme }) => theme.colors.dark};
  border: 1px solid #292a2c;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 6px;
  font-size: 14px;
  line-height: 16px;
  overflow: hidden;

  &:focus {
    outline: none;
    box-shadow: inset -2px 18px 21px -20px rgba(0, 0, 0, 0.64);
  }
`;

export const InputBox = styled.div`
  display: inline-block;
  position: relative;
  margin-bottom: 3rem;
  border-radius: 6px;
  overflow: hidden;
`;

export const SearchIcon = styled.svg`
  position: absolute;
  right: 15px;
  top: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const Stripe = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pink};
`;
