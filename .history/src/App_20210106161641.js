import React from 'react';






function App() {




  Container





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
