import { Button, Card, CardBody, Center, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const handleRefreshClick = () => window.location.assign(window.location.origin);

export const ErrorFallback = () => {
  const error = useRouteError();
  let errorMessage = 'Please try to refresh the page.';

  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} | ${error.statusText}`;
  }

  return (
    <Center minH='100vh' p='4'>
      <Card px='4' maxW='xl' textAlign='center' data-testid='error-card'>
        <CardBody>
          <Text as='h2' fontSize='xl' fontWeight='bold'>Sorry... an unexpected error has occurred.</Text>
          <Text as='h4' mt='2'>{errorMessage}</Text>
          <Button mt='5' onClick={handleRefreshClick} data-testid='refresh-btn'>
            Refresh
          </Button>
        </CardBody>
      </Card>
    </Center>
  );
};


