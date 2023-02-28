
import { useParams } from 'react-router-dom';
import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { BeatLoader } from 'react-spinners';

import { useCharacterDetails } from '../api/character';
import { CharacterDetailItem } from '../components/CharacterDetailItem';
import { CharactersListItemPlanet } from '../components/CharactersListItemPlanet';
import { CharactersFilmsList } from '../components/CharactersFilmsList';
import { getIdFromUrl } from '@/utils';
import { CharacterEditableDetail } from '../components/CharacterEditableDetail';

export const CharacterDetailsPage = () => {
  const { characterId } = useParams() as { characterId: string };
  const { data: characterData, isLoading, isError } = useCharacterDetails({ characterId: parseInt(characterId) });

  if (isError) {
    return (
      <Text color="red.300" textAlign='center'>
        Sorry, there was a problem fetching character details. Please try to refresh this page.
      </Text>
    );
  }

  if (isLoading) {
    return (
      <Flex justifyContent='center' my='4'>
        <BeatLoader color='white' />
      </Flex>
    );
  }

  const homePlanetId = getIdFromUrl(characterData.homeworld);
  const characterFilmsIds = characterData.films.map(getIdFromUrl);

  return (
    <Box>
      <Text as='h2' fontWeight='bold' fontSize='3xl'>
        {characterData.name}
      </Text>
      <Divider my='4' />
      <Text as='h3' fontWeight='semibold' fontSize='xl' mb='2'>
        Character information
      </Text>
      <CharacterDetailItem title='hair_color' info={characterData.hair_color} />
      <CharacterDetailItem title='eye_color' info={characterData.eye_color} />
      <CharacterEditableDetail title='gender' defaultInfo={characterData.gender} />
      <CharacterEditableDetail title='height' defaultInfo={characterData.height} inputType='number' />
      <CharacterDetailItem title='mass' info={characterData.mass} />
      <CharactersListItemPlanet planetId={homePlanetId} />
      <CharactersFilmsList
        filmsIds={characterFilmsIds}
      />
    </Box>
  );
};
