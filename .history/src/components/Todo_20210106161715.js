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
        localStorage.setItem('itemsToDo', JSON.stringify(data));
    } else {
        data = JSON.parse(localStorage.getItem('itemsToDo'));
    }







    return (
        <>
            
        </>
    )
}

export default Todo
