import { Tabs, TabList } from '@chakra-ui/react';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { IoIosPlanet } from 'react-icons/io';
import { IconType } from 'react-icons';

import { NavigationItem } from './NavigationItem';

export type IMenuItem = {
  id: number;
  name: string;
  path: string;
  icon: IconType;
  disabled?: boolean;
}

const navigationItems: IMenuItem[] = [
  {
    id: 0,
    name: 'Characters',
    path: '/',
    icon: MdOutlinePeopleAlt
  },
  {
    id: 1,
    name: 'Planets',
    path: '/planets',
    icon: IoIosPlanet,
    disabled: true
  }
];

export const Navigation = () => {
  return (
    <Tabs colorScheme='yellow'>
      <TabList>
        {
          navigationItems.map(navItem => (
            <NavigationItem key={navItem.id} name={navItem.name} path={navItem.path} icon={navItem.icon} disabled={navItem?.disabled}/>
          ))
        }
      </TabList>
    </Tabs>
  );
};
