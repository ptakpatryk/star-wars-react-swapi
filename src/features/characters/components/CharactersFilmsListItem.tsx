import { BeatLoader } from 'react-spinners';
import { ListItem, Text } from '@chakra-ui/react';

import { useFilm } from '../api/film';

type CharactersFilmsListItemProps = {
  filmId: number;
}

export const CharactersFilmsListItem = ({ filmId }: CharactersFilmsListItemProps) => {
  const { data: filmData, isLoading, isError } = useFilm({ filmId });

  if (isError) {
    return (
      <Text fontSize='sm' color='red.300'>
        Sorry, we couldn't fetch the film name.
      </Text>
    );
  }

  return (
    <>
      {isLoading && (
        <Text as='span'>
          <BeatLoader color='rgba(255,255,255,.8)' size='6px' />
        </Text>
      )}
      {filmData && (
        <ListItem>
          {filmData.title}
        </ListItem>
      )}
    </>
  );
};
