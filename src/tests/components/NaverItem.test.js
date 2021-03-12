import NaverItem from '../../components/NaverItem';
import customRender from './customRender';
import navers from '../fixtures/fixtures';
import 'jest-styled-components';

test('should match NaverItem snapshot', () => {

  const { container } = customRender(
    <NaverItem
      id={navers[1].id}
      photo={navers[1].url}
      name={navers[1].name}
      role={navers[1].job_role}
    />,
  );

  expect(container).toMatchSnapshot();
});
