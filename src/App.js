import React from 'react';
import './App.css';
import ToDoComponent from './components/Todo';


function App() {



  let getLocalArray;

  if (localStorage.getItem("myData") === null) {
    getLocalArray = []
  } else {
    getLocalArray = JSON.parse(localStorage.getItem('myData'));
  }


  return (
  <>
    <ToDoComponent getLocalStorageArray={getLocalArray}/>
  </>
  );
}

export default App;
