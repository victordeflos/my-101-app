/** @format */

import './App.css';
import Item from './MyItem';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Item name='ContactBook' />
        <Item name='MovieInformant' />
        <Item name='Info Posts' />
      </header>
    </div>
  );
}

export default App;
