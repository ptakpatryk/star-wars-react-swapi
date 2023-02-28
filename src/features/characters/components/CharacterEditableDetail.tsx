import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import { Box, ButtonGroup, Editable, EditableInput, EditablePreview, Flex, IconButton, Input, Text, useEditableControls } from '@chakra-ui/react';
import { ICharacter } from '../types';

function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup alignItems='center' size='xs'>
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} aria-label='save' />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} aria-label='cancel' />
    </ButtonGroup>
  ) : (
    <Box>
      <IconButton size='xs' icon={<EditIcon />} {...getEditButtonProps()} aria-label='edit' />
    </Box>
  );
}

type CharacterEditableDetailProps = {
  title: keyof ICharacter;
  defaultInfo: string;
  inputType?: 'text' | 'number';
}

export const CharacterEditableDetail = ({ title, defaultInfo, inputType = 'text' }: CharacterEditableDetailProps) => {
  const titleFormatted = title.replace('_', ' ');

  return (
    <Flex alignItems='center' gap={1}>
      <Text as='span' fontWeight='semibold' color='whiteAlpha.700' textTransform='capitalize'>{titleFormatted}: </Text>
      <Editable
        display='flex'
        gap={2}
        defaultValue={defaultInfo}
        isPreviewFocusable={false}
      >
        <EditablePreview />
        {/* NOTE: with a little bit more time I'd allow to pass custom input for example for gender it would make more sense to have dropdown or radio input instead of text field */}
        <Input as={EditableInput} type={inputType} name={`${title} input`} />
        <EditableControls />
      </Editable>
    </Flex>
  );
};

