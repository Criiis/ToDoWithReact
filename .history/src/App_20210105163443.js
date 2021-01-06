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

  console.log(transformArrayInJson)

  // token.map( merda => (
  //   console.log(merda)
  // ))


const doubled = transformArrayInJson.map((item) => item.item);
console.log(doubled);


function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}




  return (
    <>
    <h1>hello world!</h1>
    {
      transformArrayInJson.map((item) => (
        <h5 onClick={handleClick} className={item.status}>{item.item}</h5>
      ))
    }
    </>
  );
}

export default App;
