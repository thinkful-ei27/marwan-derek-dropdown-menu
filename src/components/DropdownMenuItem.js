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
    const children = menu.filter(menuItem => menuItem.parent === id);
    if (children.length && !this.state.collapsed ) {
      return (<DropDownMenu menuItems={children} />);
    }
  }
  render () {
    return (
      <li id={this.props.id} onClick={(e) => {
        // Stop the click from propagating up the chain
        e.stopPropagation();
        this.setState({ collapsed: !this.state.collapsed })
        }}>
        {this.props.label}
        {this.handleChildren(menu, this.props.id)}
      </li>
    );
  }
}