import React from 'react';
import DropDownMenu from './DropdownMenu';
import menu from '../menu.json'

export default function DropdownMenuItem(props) {
  function handleChildren(menu,id){
    console.log(id);
    const children = menu.filter(menuItem => menuItem.parent === id);
    console.log(children);
   return (<DropDownMenu menuItems={children}/>);
  }
  return (
    <li id={props.id}>
      {props.label}
      {handleChildren(menu, props.id)}
    </li>
  );
}