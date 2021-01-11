import {useState} from "react";
import styled from 'styled-components';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';


const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	align-content: center;
	margin-top: 50px;
	margin-bottom: 50px;
	padding: 0 10px;
	.inner {
		backdrop-filter: blur(5px);
		max-width: 450px;
		width: 100%;
		padding: 15px;
		background-color: rgba(0,0,0,0.5);;
		border: 1px solid rgba(0,0,0,0.5);;
		box-shadow: 0px 0px 10px 0px #000000;
        border-radius: 10px;
        
        form {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-content: flex-end;

            input[type=text] {
                width: calc(100% - 33px);
                appearance: none;
                border: none;
                background-color: transparent;
                border-bottom: 1px solid white;
                margin: 0;
                font-size: 23px;
                border-radius: 0;
                outline: none;
                padding: 5px 5px 0px 5px;
                color: white;
                &::placeholder {
                    color: white;
                }
                &:-webkit-autofill,
                &:-webkit-autofill:hover,
                &:-webkit-autofill:focus,
                &:-webkit-autofill:active {
                    transition: background-color 5000s ease-in-out 0s;
                    -webkit-text-fill-color: #fff !important;
                }
                &:-webkit-autofill::first-line {
                    font-size: 23px !important;
                }

                &:focus {
                    outline: none;
                }
            }


            .btn {
                appearance: none;
                font-size: 23px;
                margin: 0;
                padding: 0;
                border: none;
                cursor: pointer;
                text-align: center;
                &.btn-primary {
                    background-color: white;
                    color: #5d5d5d;
                    width: 33px;
                    transition: color 0.2s ease-in-out;
                    &:hover {
                        color:#333333;
                    }
                }
                &:focus {
                    outline: none;
                }
            }
        }
	}
`


const UlContainer = styled.ul`
    padding: 10px 5px;
    margin: 0;
    list-style: none;
    position: relative;
    .error {
        font-size: 11px;
        position: absolute;
        top: 5px;
        left: 5px;
        display: none;
        &.open {
            display: block;
        }
    }
  .item {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 5px -1px #000000;
    padding: 10px;
    border-radius: 5px;
    li {
        width: 78%;
        font-size: 16px;
        word-break: break-all;
        transition: all 0.3s ease-in-out;
        &.editable {
            border-bottom: 1px solid white;
        }
        &:focus {
            outline: 0;
            border-bottom: 1px solid white;
        }
        &.complete {
            text-decoration: line-through;
            opacity: 0.5;
            + .edit {
                pointer-events: none;
                opacity: 0.5;
                
            }
          }
    }
    .edit,
    .trash {
        transition: all 0.3s ease-in-out;
        svg {
            pointer-events: none;
        }
    }
  }
`





export default function ToDoComponent() {
    let listObject = [];

    let getLocalArray = JSON.parse(localStorage.getItem('itemsToDo'));
    const [transformArrayInJson, setTransformArrayInJson] = useState(getLocalArray);


    //general functions
    function updateLocalStorage(item) {
        localStorage.setItem('itemsToDo', JSON.stringify(item));
    }

    //add item to list function
    function addItemToList(value) {
        let input = document.getElementById(value);
        let inputValue = input.value;
        if( inputValue !== '' ) {
            listObject = [{item: `${inputValue}`, status: "uncomplete" }, ...listObject]
            updateLocalStorage(listObject);
            setTransformArrayInJson(listObject);
            input.value = '';
            document.body.querySelector('.error').classList.remove('open');
        } else {
            document.body.querySelector('.error').classList.add('open');
        }
    }



    if (localStorage.getItem("itemsToDo") === null) {
        localStorage.setItem('itemsToDo', JSON.stringify(listObject));
    } else {
        listObject = JSON.parse(localStorage.getItem('itemsToDo'));
    }


    // add value to array and DOM by clicking
    function addValueToObject(e) {
        e.preventDefault();
        addItemToList("to-do");
    }

    function itemFuncionality(e) {
        let clickTarget = e.target;

        //create an array with the div with class item
        let itemContainer = clickTarget.closest('.item');
        let nodes = Array.from( itemContainer.closest('ul').querySelectorAll('div.item') );
        let index = nodes.indexOf( itemContainer );



        if(clickTarget.className === 'trash') {
            //delete the item
            listObject.splice(index, 1);
            updateLocalStorage(listObject);
            setTransformArrayInJson(listObject);

        } else if (clickTarget.tagName === 'LI'){
            //change status to complete or uncompleted
            if(clickTarget.className === 'uncomplete' && clickTarget.getAttribute('contentEditable') !== 'true') {
                clickTarget.classList.remove('uncomplete');
                clickTarget.classList.add('complete');
                listObject[index].status = 'complete';
                updateLocalStorage(listObject);
            } else if (clickTarget.className === 'complete' && clickTarget.getAttribute('contentEditable') !== 'true') {
                clickTarget.classList.remove('complete');
                clickTarget.classList.add('uncomplete');
                listObject[index].status = 'uncomplete';
                updateLocalStorage(listObject);
            }

        } else if (clickTarget.className === 'edit'){
            //edit the item
            if (clickTarget.id !== 'editable') {
                clickTarget.setAttribute("id", "editable");
                clickTarget.previousSibling.contentEditable = "true";
                clickTarget.previousSibling.classList.add('editable');
                clickTarget.previousSibling.focus();
            } else if ( clickTarget.id === 'editable' ) {
                clickTarget.removeAttribute("id");
                clickTarget.previousSibling.contentEditable = "false";
                clickTarget.previousSibling.classList.remove('editable');
                listObject[index].item = clickTarget.previousSibling.innerHTML;
                updateLocalStorage(listObject);
            }
        }
    }


    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
        } 
    });


    return (
        <>
            <Wrap>
                <div className='inner'>
                    <form>
                        <input type="text" id="to-do" name="toDo" placeholder="Add new task"/>
                        <button onClick={addValueToObject} className="add-btn btn btn-primary" type="button">+</button>
                    </form>

                    <UlContainer className="to-do-list">
                        <span className="error">*Please fill the text box above.</span>
                    {
                        transformArrayInJson?.map((item, index) => (
                            <div onClick={itemFuncionality} className="item" key={index}>
                                <li className={item.status}>{item.item}</li>
                                <span className="edit">
                                    <FaRegEdit/>
                                </span>
                                <span className="trash">
                                    <FaRegTrashAlt/>
                                </span>
                            </div>
                        ))
                    }
                    </UlContainer>
                </div>
            </Wrap>

        </>
    )
}

