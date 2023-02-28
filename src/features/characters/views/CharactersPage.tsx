
import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BeatLoader } from 'react-spinners';

import { Pagination } from '@/components/Pagination';
import { useCharacters } from '../api/characters';
import { CharactersList } from '../components/CharactersList';

export const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const { data: charactersData, isLoading, isError } = useCharacters({ page });

  if (isError) {
    return (
      <Text fontSize='xg'>Whoops... Error fetching characters. Please try to refresh this page.</Text>
    );
  }

  const isPrevPageDisabled = !charactersData?.previous || isLoading;
  const isNextPageDisabled = !charactersData?.next || isLoading;

  const handleNextPage = () => setPage(p => p + 1);
  const handlePreviousPage = () => setPage(p => p - 1);

  return (
    <div>
      {isLoading && (
        <Flex justifyContent='center' my='4'>
          <BeatLoader color='white' data-testid='page-loader' />
        </Flex>
      )}
      <CharactersList characters={charactersData?.results || []} />
      <Box mt='4'>
        <Pagination
          isNextDisabled={isNextPageDisabled}
          isPrevDisabled={isPrevPageDisabled}
          onNext={handleNextPage}
          onPrev={handlePreviousPage}
        />
      </Box>
    </div>
  );
};
