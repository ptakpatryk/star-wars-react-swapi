import { Layout } from '../components/Layout';
import { createBrowserRouter } from 'react-router-dom';

import { charactersRoutes } from '@/features/characters';
import { ErrorFallback } from '@/components/ErrorFallback';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorFallback />,
    children: [
      ...charactersRoutes,
      {
        path: '/planets',
        element: <div>{/* TODO: get planets routes when working on planets page */}</div>
      },
    ]
  },
]);
