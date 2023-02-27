import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import starWarsLogo from '../../assets/star-wars-logo.svg';

export const Logo = () => {
  return (
    <Box maxW='28'>
      <Link to='/'>
        <img src={starWarsLogo} alt="StarWars logo" />
      </Link>
    </Box>
  );
};
