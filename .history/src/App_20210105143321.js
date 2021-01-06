import React from 'react';



function App() {
  let data = [
    {
      "item": "item1",
      "status": "uncomplete",
      "registration": new Date('2021-03-03'),
    },
    {
      "item": "item2",
      "status": "complete",
      "registration": new Date('2021-06-03')
    }
  ];



  localStorage.setItem('itemsToDo', data);
  let token = localStorage.getItem('itemsToDo');
  console.log(token);




  return (
    <>
    <h1>hello world!</h1>

    {Object.keys(token).map(function(key) {
      return <div>Key: {key}, Value: {token[key]}</div>;
    })}
    </>
  );
}

export default App;
