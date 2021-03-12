import NaverSelected from '../../components/NaverSelected';
import customRender from './customRender';
import navers from '../fixtures/fixtures';
import 'jest-styled-components';

test('should match LoginPage snapshot', () => {
  const setShowNaverModalSelected = jest.fn();

  const { container } = customRender(
    <NaverSelected
      naverSelected={navers[2]}
      setShowNaverModalSelected={setShowNaverModalSelected}
    />,
  );

  expect(container).toMatchSnapshot();
});
