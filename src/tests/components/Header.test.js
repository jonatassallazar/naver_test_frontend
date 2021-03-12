import Header from '../../components/Header';
import customRender from './customRender';
import 'jest-styled-components';

test('should match Header snapshot', () => {
  const { container } = customRender(<Header />);

  expect(container).toMatchSnapshot();
});
