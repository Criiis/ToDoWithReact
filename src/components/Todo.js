import {useState, useRef, useEffect} from "react";
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
        &.completed {
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





export default function ToDoComponent({getLocalStorageArray}) {
    const [toDoListLocal, setToDoListLocal] = useState([...getLocalStorageArray]);
    const inputValueRef = useRef();

    //create a unique number for each task
    let d = new Date();
    let n = d.getTime();


    //refresh local storage
    useEffect(() => {
        localStorage.setItem('myData', JSON.stringify(toDoListLocal));
    }, [toDoListLocal])


    //add item to list function
    function addItemToList() {
        const inputValue = inputValueRef.current.value;
        if (inputValue !== '') {
            setToDoListLocal(oldArray => [{item: `${inputValue}`, status: "uncompleted", date: `${n}` }, ...oldArray]);
            inputValueRef.current.value = '';
        }
    }


    //delete Task
    function deleteTask(e) {
        let clickTarget = e.target;
        let parentID = clickTarget.parentNode.id;
        let findTaskNumberID = toDoListLocal.findIndex(x => x.date === parentID);

        //very important use 'set' function to update the array
        let test = [...toDoListLocal]
        test.splice(findTaskNumberID, 1)
        setToDoListLocal(test)

    } 




    return (
        <>

            <Wrap>
                <div className='inner'>
                <form>
                    <input type="text" ref={inputValueRef} name="toDo" placeholder="Add new task"/>
                    <button onClick={addItemToList} className="add-btn btn btn-primary" type="button">+</button>
                </form>

                    <UlContainer className="to-do-list">
                        <span className="error">*Please fill the text box above.</span>
                    {
                        toDoListLocal?.map((item) => (
                            <div className="item" key={item.date} id={item.date}>
                                <li className={item.status}>{item.item}</li>
                                <span className="edit">
                                    <FaRegEdit/>
                                </span>
                                <span onClick={deleteTask} className="trash">
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

