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
  <form>
    <input type="text" id="to-do" name="toDo" placeholder="Add new task">
    <button class="add-btn btn btn-primary" type="button">+</button>
  </form>
    {
      transformArrayInJson.map((item, index) => (
        <Container className="item" onClick={handleClick} key={index}>
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
