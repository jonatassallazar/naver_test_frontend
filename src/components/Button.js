import styled from 'styled-components';

const Button = styled.button`
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.textContrast};
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2.4rem;
  text-align: center;
  border: none;
  padding: 1.2rem;
  width: 100%;
  font-family: inherit;
`;

Button.Secondary = styled(Button)`
  background: none;
  color: ${({theme}) => theme.colors.text};
`;

export default Button;
