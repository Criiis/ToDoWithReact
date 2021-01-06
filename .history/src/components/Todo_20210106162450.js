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

function Todo() {
    let listObject = [];

    if (localStorage.getItem("itemsToDo") === null) {
        localStorage.setItem('itemsToDo', JSON.stringify(listObject));
    } else {
        listObject = JSON.parse(localStorage.getItem('itemsToDo'));
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
            
        </>
    )
}

export default Todo
