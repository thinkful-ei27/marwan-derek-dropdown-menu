import React from 'react';
import DropDownMenu from './DropdownMenu';
import menu from '../menu.json'

export default class DropdownMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }
  handleChildren(menu, id) {
    const children = menu.filter(menuItem => menuItem.parent === id);
    if (children.length && !this.state.collapsed) {
      return (<DropDownMenu menuItems={children} />);
    }
  }
  handleClick(e) {
    // Stop the click from propagating up the chain
    e.preventDefault();
    this.setState({ collapsed: !this.state.collapsed })
  }
  render() {
    return (
      <li id={this.props.id} className={!this.state.collapsed ? "active" : ""}>
        <a href="#" onClick={(e) => this.handleClick(e)}>{this.props.label}</a>
        {this.handleChildren(menu, this.props.id)}
      </li>
    );
  }
}