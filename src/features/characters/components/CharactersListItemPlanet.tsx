import { BeatLoader } from 'react-spinners';
import { Text } from '@chakra-ui/react';
import { usePlanet } from '../api/planet';


type CharactersListItemPlanetProps = {
  planetId: number;
}

export const CharactersListItemPlanet = ({ planetId }: CharactersListItemPlanetProps) => {
  const { data: planetData, isLoading, isError } = usePlanet({ planetId });

  if (isError) {
    return (
      <Text fontSize='sm' color='red.300'>
        Sorry, we couldn't fetch the home planet name.
      </Text>
    );
  }

  return (
    <Text>
      <Text as='span' fontWeight='semibold' color='whiteAlpha.700'>Planet: </Text>
      {isLoading && (
        <Text as='span'>
          <BeatLoader color='rgba(255,255,255,.8)' size='6px' />
        </Text>
      )}
      {planetData?.name || ''}
    </Text>
  );
};
