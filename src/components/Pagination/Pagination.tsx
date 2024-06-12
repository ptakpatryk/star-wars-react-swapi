import { Button, Flex } from '@chakra-ui/react';

export type PaginationProps = {
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
  onNext: () => void;
  onPrev: () => void;
};

export const PREV_LABEL = 'Previous';
export const NEXT_LABEL = 'Next';

export const Pagination = ({
  isNextDisabled,
  isPrevDisabled,
  onNext,
  onPrev,
}: PaginationProps) => {
  return (
    <Flex justifyContent="space-between">
      <Button onClick={onPrev} isDisabled={isPrevDisabled}>
        {PREV_LABEL}
      </Button>
      <Button onClick={onNext} isDisabled={isNextDisabled}>
        {NEXT_LABEL}
      </Button>
    </Flex>
  );
};
