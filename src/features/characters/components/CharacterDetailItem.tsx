import { Text } from '@chakra-ui/react';
import { ICharacter } from '../types';

type CharacterDetailItemProps = {
  title: keyof ICharacter;
  info: string;
}

export const CharacterDetailItem = ({ title, info }: CharacterDetailItemProps) => {
  const titleFormatted = title.replace('_', ' ');

  return (
    <Text>
      <Text as='span' fontWeight='semibold' color='whiteAlpha.700' textTransform='capitalize'>{titleFormatted}: </Text>
      {info}
    </Text>
  );
};
