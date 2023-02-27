import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { parseApiResponse } from '../../../utils';

import { type IPlanet } from '../types';

export const getPlanet = async (planetId: number): Promise<IPlanet> => {
  return fetch(`https://swapi.dev/api/planets/${planetId}`, {
    method: 'GET',
  }).then(parseApiResponse);
};

type usePlanetOptions = {
  planetId: number,
  config?: UseQueryOptions<IPlanet>;
};

export const usePlanet = ({ planetId, config = {} }: usePlanetOptions) => {
  return useQuery<IPlanet>(['planet', planetId], () => getPlanet(planetId), {
    ...config,
  });
};
