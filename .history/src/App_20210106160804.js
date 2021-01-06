import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import styled from 'styled-components';



const Container = styled.div`
  .edit,
  .trash {
    svg {
      pointer-events: none;
    }
  }
`


function App() {


  let data = [
    // {
    //   "item": "item1",
    //   "status": "uncomplete",
    //   "deadLine": new Date('2021-03-03'),
    // },
    // {
    //   "item": "item2",
    //   "status": "complete",
    //   "deadLine": new Date('2021-06-03')
    // }
  ];


  let p = document.createElement('div');
console.log(p);


  if (localStorage.getItem("itemsToDo") === null) {
    localStorage.setItem('itemsToDo', JSON.stringify(data));
  } else {
    data = JSON.parse(localStorage.getItem('itemsToDo'));
  }


  let getLocalArray = localStorage.getItem('itemsToDo');
  let  transformArrayInJson= JSON.parse(getLocalArray);



function addValueToObject(e) {
  e.preventDefault();
  let input = document.getElementById("to-do");
  let inputValue = input.value;


  data.push({item: `${inputValue}`, status: "uncomplete" });
  console.log(data);
  localStorage.setItem('itemsToDo', JSON.stringify(data));
  input.value = '';
}




  return (
  <>
  <h1>hello world!</h1>
  <form>
    <input type="text" id="to-do" name="toDo" placeholder="Add new task"/>
    <button onClick={addValueToObject} className="add-btn btn btn-primary" type="button">+</button>
  </form>

  <ul className="to-do-list">
    {
      transformArrayInJson.map((item, index) => (
        <Container className="item" key={index}>
          <li className={item.status}>{item.item}</li>
          <span className="edit">
            <FaRegEdit/>
          </span>
          <span className="trash">
            <FaRegTrashAlt/>
          </span>
          </Container>
      ))
    }
  </ul>
  </>
  );
}

export default App;
