import React, { Component } from 'react';
import './App.css';
import DropdownMenu from './components/DropdownMenu';
import menu from './menu.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dropdown Menu</h1>
          <DropdownMenu menuItems={menu} />
        </header>
      </div>
    );
  }
}

export default App;

// App
// - DropdownMenu
// -- DropdownMenuItem
// --- DropdownMenu
// ---- DropdownMenuItems
// ---- DropdownMenuItems
// -- DropdownMenuItem