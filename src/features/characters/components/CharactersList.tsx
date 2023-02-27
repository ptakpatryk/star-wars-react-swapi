import { List } from '@chakra-ui/react';
import { type ICharacter } from '../types';
import { CharactersListItem } from './CharactersListItem';

type CharactersListProps = {
  characters: ICharacter[];
}

export const CharactersList = ({ characters }: CharactersListProps) => {
  return (
    <List
      display='grid'
      gridTemplateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(3, 1fr)' 
      }}
      gridGap='3'
    >
      {characters.map(charItem => {
        return (
          <CharactersListItem
            key={charItem.url}
            character={charItem}
          />
        );
      })}
    </List>
  );
};
