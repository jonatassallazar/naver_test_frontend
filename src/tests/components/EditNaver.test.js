import EditNaver from '../../components/EditNaver';
import customRender from './customRender';
import 'jest-styled-components';

test('should match LoginPage snapshot', () => {
  const match = {
    params: {
      id: '1',
    },
  };

  const { container } = customRender(<EditNaver id="1" match={match} />);

  expect(container).toMatchSnapshot();
});
