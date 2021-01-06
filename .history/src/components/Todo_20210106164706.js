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

function ToDoComponent() {
    let listObject = [];


    if (localStorage.getItem("itemsToDo") === null) {
        localStorage.setItem('itemsToDo', JSON.stringify(listObject));
    } else {
        listObject = JSON.parse(localStorage.getItem('itemsToDo'));
    }


    function addValueToObject(e) {
        e.preventDefault();
        let input = document.getElementById("to-do");
        let inputValue = input.value;
        
        
        listObject.push({item: `${inputValue}`, status: "uncomplete" });
        console.log(listObject);
        localStorage.setItem('itemsToDo', JSON.stringify(listObject));
        input.value = '';
    }


    function editItem(e) {
        let clickTarget = e.targert;
        console.log(e.target.className);
    }


    let getLocalArray = localStorage.getItem('itemsToDo');
    let  transformArrayInJson= JSON.parse(getLocalArray);


    return (
        <>
            <h1>hello world!</h1>
            <form>
                <input type="text" id="to-do" name="toDo" placeholder="Add new task"/>
                <button onClick={addValueToObject} className="add-btn btn btn-primary" type="button">+</button>
            </form>

            <ul onClick={editItem} className="to-do-list">
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
    )
}

export default ToDoComponent
