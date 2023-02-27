import { Box, Text, UnorderedList } from '@chakra-ui/react';

import { CharactersFilmsListItem } from './CharactersFilmsListItem';

type CharactersFilmsListProps = {
  filmsIds: number[];
};

export const CharactersFilmsList = ({ filmsIds }: CharactersFilmsListProps) => {
  return (
    <div>
      <Text as='span' fontWeight='semibold' color='whiteAlpha.700'>Films: </Text>
      <Box pl={2}>
        <UnorderedList>
          {filmsIds.map(filmId => (
            <CharactersFilmsListItem key={`film-${filmId}`} filmId={filmId} />
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
};
