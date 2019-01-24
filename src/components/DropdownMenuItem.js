import React from 'react';
import DropDownMenu from './DropdownMenu';
import menu from './menu.json'

export default function DropdownMenuItem(props) {

  function handleChildren(menu,id){
    const children = [];
   return (<DropDownMenu menuItems={children}/>)
  }
  return (
    <li id={props.key}>
      {props.label}
      {handleChildren(menu, props.key)}
    </li>
  );
}