import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { parseApiResponse } from '../../../utils';

import { type ICharactersResponse } from '../types';

export const getCharacters = async (page: number): Promise<ICharactersResponse> => {
  return fetch(`https://swapi.dev/api/people/?page=${page}`, {
    method: 'GET',
  }).then(parseApiResponse);
};

type useCharactersOptions = {
  page: number,
  config?: UseQueryOptions<ICharactersResponse>;
};

export const useCharacters = ({ page, config = {} }: useCharactersOptions) => {
  return useQuery<ICharactersResponse>(['characters', page], () => getCharacters(page), {
    ...config,
  });
};

