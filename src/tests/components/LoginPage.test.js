import LoginPage from '../../components/LoginPage';
import customRender from './customRender';
import 'jest-styled-components';

test('should match LoginPage snapshot', () => {
  const { container } = customRender(<LoginPage />);

  expect(container).toMatchSnapshot();
});
