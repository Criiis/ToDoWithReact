import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";


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

const doubled = transformArrayInJson.map((item) => item.item);
console.log(doubled);


function handleClick(e) {
  e.preventDefault();
  console.log(e.target);
}




  return (
  <>
  <h1>hello world!</h1>
  <ul className="to-do-list">
    {
      transformArrayInJson.map((item, index) => (
        <div className="item" onClick={handleClick} key={index}>
          <li className={item.status}>{item.item}</li>
          <span className="fa-edit">

          </span>
          <span className="FaRegTrashAlt"></span>
          <FaRegEdit className="fa-edit"/>
          <FaRegTrashAlt className="trash"/>
          </div>
      ))
    }
  </ul>
  </>
  );
}

export default App;
