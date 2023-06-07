import { render, fireEvent } from '@testing-library/react';
import Logout from './Logout';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    replace: jest.fn(),
  }),
}));

describe('Logout', () => {
  let useDispatchMock;
  let replaceMock;

  beforeEach(() => {
    useDispatchMock = jest.spyOn(require('react-redux'), 'useDispatch');
    replaceMock = jest.fn();
    useDispatchMock.mockReturnValue(jest.fn());
    jest.clearAllMocks();
  });

  afterEach(() => {
    useDispatchMock.mockRestore();
  });

  test('should dispatch logout action and redirect to signup page on logout button click', () => {
    const dispatchMock = jest.fn();
    useDispatchMock.mockReturnValue(dispatchMock);

    const { getByRole } = render(<Logout />);

    fireEvent.click(getByRole('button'));

    expect(dispatchMock).toHaveBeenCalledWith(expect.any(Function));
    expect(replaceMock).toHaveBeenCalledWith('/signup');
  });
});
