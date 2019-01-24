import React from 'react';
import DropdownMenuItem from './DropdownMenuItem';
import './DropdownMenu.css';

export default class DropdownMenu extends React.Component {
  createDropdownMenuItems (menuItems) {
    return menuItems.map(menuItem => <DropdownMenuItem key={menuItem.id} id={menuItem.id} label={menuItem.label} parent={menuItem.parent} />);
  }
  render () {
    return (
      <ul>
        {this.createDropdownMenuItems(this.props.menuItems)}
      </ul>
    );
  }
}