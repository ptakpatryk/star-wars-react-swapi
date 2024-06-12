import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { parseApiResponse } from '@/utils';

import type { ICharacter } from '../types';

export const getCharacterDetails = async (
  characterId: number,
): Promise<ICharacter> => {
  return fetch(`https://swapi.dev/api/people/${characterId}`, {
    method: 'GET',
  }).then(parseApiResponse);
};

type useCharacterDetailsOptions = {
  characterId: number;
  config?: UseQueryOptions<ICharacter>;
};

export const useCharacterDetails = ({
  characterId,
  config = {},
}: useCharacterDetailsOptions) => {
  // NOTE: With some additional time I'd use initialData method to check if this character was already fetched
  // on the homepage with key query key ['characters'] to show some data that is already cached
  return useQuery<ICharacter>(
    ['character', characterId],
    () => getCharacterDetails(characterId),
    {
      ...config,
    },
  );
};
