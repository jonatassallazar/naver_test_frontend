import AddNaver from '../../components/AddNaver';
import 'jest-styled-components';
import customRender from './customRender';

test('should match LoginPage snapshot', () => {
  const { container } = customRender(<AddNaver />);

  expect(container).toMatchSnapshot();
});
