import React from 'react';
import DropdownMenuItem from './DropdownMenuItem';

export default function DropdownMenu(props) {
  const filterMenuItems = (menuItems, parent) => {
    if (!parent) {
      return menuItems.filter(menuItem => !menuItem.parent );
    } else {
      return menuItems;
    }
  };
  const createDropdownMenuItems = (menuItems) => {
    const filteredMenu = menuItems;
    return filteredMenu.map(menuItem => <DropdownMenuItem key={menuItem.id} id={menuItem.id} label={menuItem.label} parent={menuItem.parent} />);
  };
  return (
    <ul>
      {createDropdownMenuItems(props.menuItems)}
    </ul>
  );
}