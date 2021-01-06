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

  if (localStorage.getItem("itemsToDo") === null) {
    console.log('it does not exist');
    // localStorage.setItem('itemsToDo', JSON.stringify(data));
  } else {
    console.log('it existe');
    data = JSON.parse(localStorage.getItem('listToDo'));
    console.log(JSON.parse(localStorage.getItem('itemsToDo')));
  }


//if local storage array does not exist create one
//if local storage exist pull value from there to code json

  // localStorage.setItem('itemsToDo', JSON.stringify(data));
  let getLocalArray = localStorage.getItem('itemsToDo');
  let  transformArrayInJson= JSON.parse(getLocalArray);

//   console.log(transformArrayInJson)

// const doubled = transformArrayInJson.map((item) => item.item);
// console.log(doubled);


function addValueToObject(e) {
  e.preventDefault();
  // console.log(e.target);
  let inputValue = document.getElementById("to-do").value;
  console.log(input)
// console.log((!inputValue) ? 'empty' : inputValue);
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
