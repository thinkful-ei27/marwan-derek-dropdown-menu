import React from 'react';
import DropdownMenuItem from './DropdownMenuItem';

export default function DropdownMenu(props) {
  const createDropdownMenuItems = (menuItems) => {
    return menuItems.map(menuItem => <DropdownMenuItem key={menuItem.id} label={menuItem.label} />);
  };
  return (
    <ul>
      {createDropdownMenuItems(props.menuItems)}
    </ul>
  );
}