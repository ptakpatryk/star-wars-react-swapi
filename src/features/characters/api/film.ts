
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { parseApiResponse } from '../../../utils';

import { type IFilm } from '../types';

export const getFilm = async (filmId: number): Promise<IFilm> => {
  return fetch(`https://swapi.dev/api/films/${filmId}`, {
    method: 'GET',
  }).then(parseApiResponse);
};

type useFilmOptions = {
  filmId: number,
  config?: UseQueryOptions<IFilm>;
};

export const useFilm = ({ filmId, config = {} }: useFilmOptions) => {
  return useQuery<IFilm>(['film', filmId], () => getFilm(filmId), {
    ...config,
  });
};
