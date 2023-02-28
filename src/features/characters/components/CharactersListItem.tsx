import { getIdFromUrl } from '@/utils';
import { Box, IconButton, ListItem, Text } from '@chakra-ui/react';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { type ICharacter } from '../types';
import { CharactersListItemPlanet } from './CharactersListItemPlanet';

type CharactersListItemProps = {
  character: ICharacter
}

export const CharactersListItem = ({ character }: CharactersListItemProps) => {
  // TODO: parse it the way sounded way
  const characterId = getIdFromUrl(character.url);
  const homePlanetId = getIdFromUrl(character.homeworld);

  return (
    <ListItem
      display='flex'
      alignItems='center'
      bg='gray.800'
      px='4'
      py='2'
      borderRadius='md'
      _hover={{ background: 'gray.900' }}
      data-testid='character-item'
    >
      <Box>
        <Text as='h3' fontSize='lg' fontWeight='bold'>{character.name}</Text>
        <Text>
          <Text as='span' fontWeight='semibold' color='whiteAlpha.700'>Gender: </Text>
          {character.gender}
        </Text>
        <CharactersListItemPlanet planetId={homePlanetId} />
      </Box>
      <Box ml='auto'>
        <IconButton as={Link} to={`character/${characterId}`} colorScheme='orange' aria-label='open character details' icon={<BiChevronRight size='32px' />} />
      </Box>
    </ListItem>
  );
};
