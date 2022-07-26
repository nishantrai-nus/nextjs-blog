import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar'
import TicTacToeGame from './tictactoe'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-home">
          <div className="sidebar-container">
            <Sidebar/>
          </div>
          <div className="App-bar">
            <h1>Welcome!</h1>
            <BrowserRouter>
              <Routes>
                <Route path="/tictactoe" element = {<TicTacToeGame />}>
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;