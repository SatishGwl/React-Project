import React, { useState } from 'react'
import './style.css'

export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([])

  /*====Add Items function=====*/
  const addItems = (e) => {
    if(!inputData){
      alert('Please Fill Your Data')
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData
      }
        setItems([...items, myNewInputData]);
        setInputData("");
    }
  };

  //How to delete items
  const deleteItem = (index) =>{
  const updatedItem = items.filter((currentElem)=>{
    return currentElem.id !== index;
  });
  setItems(updatedItem)
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src='./images/todo.svg' alt="todoimg" />
            <figcaption>Add Your List Here✌️</figcaption>
          </figure>
          <div className="addItems">
            <input type="text"
              placeholder="✍️ Add Your Items"
              className="form-control" 
              value = {inputData}
              onChange = {(e)=> setInputData(e.target.value)}/>
              <i className="fa fa-plus add-btn" onClick={addItems}/>
          </div>
          {/*Show our items*/}
          <div className="showItems">
            {
              items.map((currentElem) => {
                return(
                  <div className="eachItem" key={currentElem.id}>
                  <h3>{currentElem.name}</h3>
                  <div className="todo-btn">
                  <i className="far fa-edit add-btn"/>
                  <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(currentElem.id)}/>
                  </div>
                </div>
                )
              })
            }
 
          </div>

{/*======Remove Items=======*/}

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All">
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Todo;