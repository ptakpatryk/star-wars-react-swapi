import { render, screen } from '../../../utils';
import userEvent from '@testing-library/user-event';
import { NEXT_LABEL, Pagination, PREV_LABEL, type PaginationProps } from '../Pagination';

const onNextMock = jest.fn();
const onPrevMock = jest.fn();

const renderComponent = ({ onNext = onNextMock, onPrev = onPrevMock, isNextDisabled= false, isPrevDisabled = false }: Partial<PaginationProps>) => {
  return render(<Pagination onNext={onNext} onPrev={onPrev} isNextDisabled={isNextDisabled} isPrevDisabled={isPrevDisabled} />);
};

beforeEach(() => {
  onNextMock.mockReset();
  onPrevMock.mockReset();
});

describe('Pagination', () => {
  test('should render correctly', () => {
    renderComponent({});
    const nextBtn = screen.getByRole('button', { name: NEXT_LABEL });
    const prevBtn = screen.getByRole('button', { name: PREV_LABEL });

    expect(nextBtn).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();
  });

  test('should prev button be disabled according to props', () => {
    renderComponent({ isPrevDisabled: true });

    const prevBtn = screen.getByRole('button', { name: PREV_LABEL });

    expect(prevBtn).toBeDisabled();
  });

  test('should next button be disabled according to props', () => {
    renderComponent({ isNextDisabled: true });

    const nextBtn = screen.getByRole('button', { name: NEXT_LABEL });

    expect(nextBtn).toBeDisabled();
  });

  describe('events', () => {
    test('should prev button click emit click event up', async () => {
      renderComponent({});

      const prevBtn = screen.getByRole('button', { name: PREV_LABEL });

      await userEvent.click(prevBtn);

      expect(onPrevMock).toBeCalledTimes(1);
    });

    test('should next button click emit click event up', async () => {
      renderComponent({});

      const nextBtn = screen.getByRole('button', { name: NEXT_LABEL });

      await userEvent.click(nextBtn);

      expect(onNextMock).toBeCalledTimes(1);
    });
  });
});
