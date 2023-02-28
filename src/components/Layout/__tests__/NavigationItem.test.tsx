import { TabList, Tabs } from '@chakra-ui/react';
import { renderWithRouter, screen } from '@utils';
import { IconType } from 'react-icons';
import { NavigationItem } from '../NavigationItem';

jest.mock('../../../assets/star-wars-logo.svg', () => 'LOGO_SRC_MOCK.png');

const CUSTOM_ICON_TEXT = 'CUSTOM ICON';
const CUSTOM_ICON_ELEMENT = (() => (<div>{CUSTOM_ICON_TEXT}</div>)) as IconType;
const ITEM_NAME = 'NAV ITEM NAME';
const CUSTOM_PATH = '/custom-path/123';

const renderComponent = ({ disabled = false }) => {
  return renderWithRouter(
    <div>
      <Tabs>
        <TabList>
          <NavigationItem
            icon={CUSTOM_ICON_ELEMENT}
            name={ITEM_NAME}
            path={CUSTOM_PATH}
            disabled={disabled}
          />
        </TabList>
      </Tabs>
    </div>
  );
};

describe('NavigationItem', () => {
  it('should render navigation item with correct name', () => {
    renderComponent({});

    const navItemName = screen.getByText(ITEM_NAME);
    expect(navItemName).toBeInTheDocument();
  });

  it('should render navigation item with correct icon', () => {
    renderComponent({});

    const iconElement = screen.getByText(CUSTOM_ICON_TEXT);
    expect(iconElement).toBeInTheDocument();
  });

  it('should navigation item have a correct path', () => {
    renderComponent({});

    const navItem = screen.getByText(ITEM_NAME);
    expect(navItem).toHaveAttribute('href', CUSTOM_PATH);
  });

  it('should navigation item be enabled by default', () => {
    renderComponent({});

    const navItem = screen.getByText(ITEM_NAME);
    expect(navItem).not.toHaveAttribute('aria-disabled');
  });

  it('should navigation item be disabled according to props', () => {
    renderComponent({ disabled: true });

    const navItem = screen.getByText(ITEM_NAME);
    expect(navItem).toHaveAttribute('aria-disabled', 'true');
  });
});
