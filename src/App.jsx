
import {useState} from 'react';
import './components/styles.scss';
import Board from './components/Board';


function App() {

  

 return (

      <div className ="app">
        <div>
          <button onClick={onBtnClick}> Click here! </button>
          
        </div>
        <Board />
      </div>
 );
}

export default App;  