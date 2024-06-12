import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  ButtonGroup,
  IconButton,
  useEditableControls,
} from '@chakra-ui/react';

export const CharacterEditableDetailContols = ({ name }: { name: string }) => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup alignItems="center" size="xs">
      <IconButton
        icon={<CheckIcon />}
        {...getSubmitButtonProps()}
        aria-label="save"
        data-testid={`${name}-save`}
      />
      <IconButton
        icon={<CloseIcon />}
        {...getCancelButtonProps()}
        aria-label="cancel"
        data-testid={`${name}-cancel`}
      />
    </ButtonGroup>
  ) : (
    <Box>
      <IconButton
        size="xs"
        icon={<EditIcon />}
        {...getEditButtonProps()}
        aria-label="edit"
        data-testid={`${name}-edit`}
      />
    </Box>
  );
};
