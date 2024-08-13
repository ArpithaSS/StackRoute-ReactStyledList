import { useState } from 'react';
import './App.css';
import ItemList from './ItemList';


function App() {
  // const movies=['Interstellar', 'Tangled', 'Alice in Wonderland', 'Maleficent'];
  const [listItem, setListItem]=useState(['Interstellar', 'Tangled', 'Alice in Wonderland', 'Maleficent', 'The Social Dilemma','Elephant Whisperers', 'Breaking Boundaries', 'Despicable Me', 'Snow White', 'Aladin']);
  const deleteItem=(index)=>{
    let removeItem=listItem.filter((item,i)=>i!==index);
    setListItem(removeItem);
  }
  return (
    <div className="App">
      <div className='movies-app'>Movies</div>
      <ItemList movies={listItem} onDelete={deleteItem}/>
    </div>
  );
}

export default App;
