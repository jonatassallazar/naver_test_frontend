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
  padding: 1rem 5rem;
  width: 100%;
  font-family: inherit;
  cursor: pointer;  
`;

Button.Secondary = styled(Button)`
  background: none;
  color: ${({theme}) => theme.colors.text};
  padding: 0;
`;

Button.Outlined = styled(Button)`
  background: none;
  color: ${({theme}) => theme.colors.text};
  border: 1px solid ${({theme}) => theme.colors.text};
`;

export default Button;
