import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/tictactoe">
          Tic Tac Toe
        </a>
        <a className="menu-item" href="/sudoku">
          Sudoku
        </a>
      </Menu>
    );
  }
};

export default Sidebar;