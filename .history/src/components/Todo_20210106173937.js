import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import styled from 'styled-components';


const UlContainer = styled.ul`
  .item {
      li {
          &.complete {
            text-decoration: line-through;
          }
      }
  }
`

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


    function itemFuncionality(e) {
        let clickTarget = e.target;

        if(clickTarget.className === 'trash') {
            console.log('yes!!');
            clickTarget.parentElement.remove();

        } else if (clickTarget.tagName === 'LI'){
            console.log(clickTarget.innerHTML);
            if(clickTarget.className === 'uncomplete') {
                clickTarget.className.remove('uncomplete');
            }
        }
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

            <UlContainer onClick={itemFuncionality} className="to-do-list">
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
            </UlContainer>
        </>
    )
}

export default ToDoComponent
