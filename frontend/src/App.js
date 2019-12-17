import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import EditorExample from './components/page/EditorExample.js'


function App() {
  return (
    <div className="App">
         <EditorExample />
    </div>
  );
}

export default App;
