import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const Layout = () => {
  return (
    <Box borderLeft="4px" borderColor="yellow.600" minH="100vh">
      <Box maxW="container.xl" mx="auto" px="4">
        <Box mb="4">
          <Logo />
        </Box>

        <Navigation />
      </Box>

      <Box bg="whiteAlpha.100" py="8" mt="8">
        <Box maxW="container.xl" mx="auto" px="8">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
