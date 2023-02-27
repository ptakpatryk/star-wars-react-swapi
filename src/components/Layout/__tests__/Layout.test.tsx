import { createMemoryRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { render, screen } from '@utils';
import { Layout } from '../Layout';

const ROUTER_OUTLET_COMPONENT_TEXT = 'ROUTER OUTLET COMPONENT TEXT';
const LOGO_COMPONENT_TEXT = 'LOGO COMPONENT TEXT';
const NAVIGATION_COMPONENT_TEXT = 'NAVIGATION COMPONENT TEXT';

jest.mock('../Logo.tsx', () => ({
  Logo: () => (<div>{LOGO_COMPONENT_TEXT}</div>)
}));

jest.mock('../Navigation.tsx', () => ({
  Navigation: () => (<div>{NAVIGATION_COMPONENT_TEXT}</div>)
}));

const RouteOutletComponent = () => {
  return <div>{ROUTER_OUTLET_COMPONENT_TEXT}</div>;
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <RouteOutletComponent />
      },
    ]
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ['/']
});

const renderComponent = () => {
  return render(
    <RouterProvider router={router} />
  );
};

describe('Layout', () => {
  test('should render with route outlet', () => {
    renderComponent();

    const childrenText = screen.getByText(ROUTER_OUTLET_COMPONENT_TEXT);

    expect(childrenText).toBeInTheDocument();
  });

  test('should render with navigation', () => {
    renderComponent();

    const childrenText = screen.getByText(NAVIGATION_COMPONENT_TEXT);

    expect(childrenText).toBeInTheDocument();
  });

  test('should render with Logo', () => {
    renderComponent();

    const childrenText = screen.getByText(LOGO_COMPONENT_TEXT);

    expect(childrenText).toBeInTheDocument();
  });
});

