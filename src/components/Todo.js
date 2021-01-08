import {useState} from "react";
import styled from 'styled-components';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

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


export default function ToDoComponent() {
    let listObject = [];

    let getLocalArray = JSON.parse(localStorage.getItem('itemsToDo'));
    const [transformArrayInJson, setTransformArrayInJson] = useState(getLocalArray);
    console.log(transformArrayInJson);


    if (localStorage.getItem("itemsToDo") === null) {
        localStorage.setItem('itemsToDo', JSON.stringify(listObject));
    } else {
        listObject = JSON.parse(localStorage.getItem('itemsToDo'));
    }



// add value to array and DOM
    function addValueToObject(e) {
        e.preventDefault();
        let input = document.getElementById("to-do");
        let inputValue = input.value;
        listObject = [{item: `${inputValue}`, status: "uncomplete" }, ...listObject]
        console.log(listObject);
        localStorage.setItem('itemsToDo', JSON.stringify(listObject));
        setTransformArrayInJson(listObject);
        input.value = '';
    }


    function itemFuncionality(e) {
        let clickTarget = e.target;
        console.log(clickTarget);

        //create an array with the div with class item
        let itemContainer = clickTarget.closest('.item');
        let nodes = Array.from( itemContainer.closest('ul').querySelectorAll('div.item') );
        let index = nodes.indexOf( itemContainer );
        console.log(index);


        if(clickTarget.className === 'trash') {
            // clickTarget.parentElement.remove();
            listObject.splice(index, 1);
            setTransformArrayInJson(listObject);
            localStorage.setItem('itemsToDo', JSON.stringify(listObject));

        } else if (clickTarget.tagName === 'LI'){
    //         //change status and class
            if(clickTarget.className === 'uncomplete') {
                clickTarget.classList.remove('uncomplete');
                clickTarget.classList.add('complete');
                listObject[index].status = 'complete';
                localStorage.setItem('itemsToDo', JSON.stringify(listObject));

            } else if (clickTarget.className === 'complete') {
                clickTarget.classList.remove('complete');
                clickTarget.classList.add('uncomplete');
                listObject[index].status = 'uncomplete';
                localStorage.setItem('itemsToDo', JSON.stringify(listObject));
            }
        } else if (clickTarget.className === 'edit'){
            console.log('hello world!')
        }
    }



    return (
        <>
            <h1>hello world!</h1>
            <form>
                <input type="text" id="to-do" name="toDo" placeholder="Add new task"/>
                <button onClick={addValueToObject} className="add-btn btn btn-primary" type="button">+</button>
            </form>

            <UlContainer onClick={itemFuncionality} className="to-do-list">
            {
                //can not do map if the local array does not exist!
                transformArrayInJson?.map((item, index) => (
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

