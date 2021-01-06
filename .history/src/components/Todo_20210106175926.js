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

        //create an array with the div with
        let itemContainer = clickTarget.closest('.item');
        let nodes = Array.from( itemContainer.closest('ul').querySelectorAll('div.item') );
        let index = nodes.indexOf( itemContainer );

        console.log(index);

        if(clickTarget.className === 'trash') {
            clickTarget.parentElement.remove();
        } else if (clickTarget.tagName === 'LI'){
            //change class
            if(clickTarget.className === 'uncomplete') {
                clickTarget.classList.remove('uncomplete');
                clickTarget.classList.add('complete');
            } else if (clickTarget.className === 'complete') {
                clickTarget.classList.remove('complete');
                clickTarget.classList.add('uncomplete');
            }
        }
        console.log(listObject);
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
