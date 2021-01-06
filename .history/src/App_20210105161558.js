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




  localStorage.setItem('itemsToDo', JSON.stringify(data));
  let getLocalArray = localStorage.getItem('itemsToDo');
  let  transformArrayInJson= JSON.parse(getLocalArray);
  console.log(getLocalArray);
  // console.log(JSON.parse(token));
  console.log(test)

  // token.map( merda => (
  //   console.log(merda)
  // ))


const doubled = test.map((number) => number.item);
console.log(doubled);





  return (
    <>
    <h1>hello world!</h1>
    </>
  );
}

export default App;
