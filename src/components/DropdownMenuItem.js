import React from 'react';

export default function DropdownMenuItem(props) {
  return (
    <li id={props.key}>
      {props.label}
    </li>
  );
}