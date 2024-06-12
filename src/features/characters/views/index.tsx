import { RouteObject } from 'react-router-dom';

import { CharactersPage } from './CharactersPage';
import { CharacterDetailsPage } from './CharacterDetailsPage';

export const charactersRoutes: RouteObject[] = [
  {
    path: '/',
    element: <CharactersPage />,
  },
  {
    path: '/character/:characterId',
    element: <CharacterDetailsPage />,
  },
];
