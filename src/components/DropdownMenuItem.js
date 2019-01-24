import React from 'react';
import DropDownMenu from './DropdownMenu';
import menu from '../menu.json'

export default class DropdownMenuItem  extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }
  handleChildren(menu,id){
    console.log(id);
    const children = menu.filter(menuItem => menuItem.parent === id);
    console.log(children);
   return (<DropDownMenu menuItems={children} isCollapsed={this.state.collapsed} />);
  }
  render () {
    return (
      <li id={this.props.id} onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
        {this.props.label}
        {this.handleChildren(menu, this.props.id)}
      </li>
    );
  }
}