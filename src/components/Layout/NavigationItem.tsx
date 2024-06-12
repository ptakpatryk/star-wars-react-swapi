import { Tab, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { type IMenuItem } from './Navigation';

type NavigationItemProps = Omit<IMenuItem, 'id'>;

export const NavigationItem = ({
  name,
  path,
  icon,
  disabled = false,
}: NavigationItemProps) => {
  const IconComponent = icon;

  return (
    <Tab as={Link} to={path} isDisabled={disabled} role="link">
      <Text as="span" mr="2">
        <IconComponent />
      </Text>
      {name}
    </Tab>
  );
};
