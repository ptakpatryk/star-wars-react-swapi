import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Input,
  Text,
} from '@chakra-ui/react';
import { ICharacter } from '../types';
import { CharacterEditableDetailContols } from './CharacterEditableDetailContols';

type CharacterEditableDetailProps = {
  title: keyof ICharacter;
  defaultInfo: string;
  inputType?: 'text' | 'number';
};

export const CharacterEditableDetail = ({
  title,
  defaultInfo,
  inputType = 'text',
}: CharacterEditableDetailProps) => {
  const titleFormatted = title.replace('_', ' ');

  return (
    <Flex alignItems="center" gap={1}>
      <Text
        as="span"
        fontWeight="semibold"
        color="whiteAlpha.700"
        textTransform="capitalize"
      >
        {titleFormatted}:{' '}
      </Text>
      <Editable
        display="flex"
        gap={2}
        defaultValue={defaultInfo}
        isPreviewFocusable={false}
      >
        <EditablePreview data-testid={`${title}-value`} />
        {/* NOTE: with a little bit more time I'd allow to pass custom input for example for gender it would make more sense to have dropdown or radio input instead of text field */}
        <Input as={EditableInput} type={inputType} name={`${title} input`} />
        <CharacterEditableDetailContols name={title} />
      </Editable>
    </Flex>
  );
};
