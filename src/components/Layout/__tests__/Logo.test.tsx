
import { renderWithRouter, screen } from '@utils';
import { Logo } from '../Logo';

jest.mock('../../../assets/star-wars-logo.svg', () => 'LOGO_SRC_MOCK.png');

const renderComponent = () => {
  return renderWithRouter(
    <Logo />
  );
};

describe('Logo', () => {
  it('should render logo', () => {
    renderComponent();

    const logo = screen.getByAltText(/logo/);
    expect(logo).toBeInTheDocument();
  });

  it('expect logo to be an anchor tag that links to the homepage', () => {
    renderComponent();

    const logoLink = screen.getByRole('link');
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
