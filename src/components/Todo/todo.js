import React, { useState,useEffect } from 'react'
import "./style.css"

// get the localStorage data back
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolish")

    if(lists){
        return JSON.parse(lists)
    } else {
        return []
    }
}


const TodoList = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData())
    const [isEditItem,setIsEditItem]= useState("")
    const [toggleBtn,setToggleBtn]= useState(false)

    const addItems = () => {
        if(!inputData){
            alert('Fill the field')
        } else if(inputData && toggleBtn){
            setItems(
                items.map((curElem) => {
                    if(curElem.id === isEditItem){
                        return {...curElem, name: inputData}
                    }
                    return curElem
                })
            )
            setInputData("")
            setIsEditItem(null)
            setToggleBtn(false)
        } else {            
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems( [...items, myNewInputData] )
            setInputData("")
        }
    }

// Edit item
const editItem = (index) => {
    const itemTodoEdited = items.find((curElem) => {
        return curElem.id === index
    })

    setInputData(itemTodoEdited.name)
    setIsEditItem(index)
    setToggleBtn(true)
}    

 // how to delete items section
    const deleteItem = (index) => {
        const updateItems = items.filter((curElem) => {
            return curElem.id !== index
        })
        setItems(updateItems)
    }

    const removeAll = () => {
        setItems([]);
    }

useEffect(() => {
    localStorage.setItem("mytodolish", JSON.stringify(items))
}, [items])
    

  return (
    <>
      <div className="container py-5 my-3">
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
          <h3 className='mb-3'>Add Your List Here</h3>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Edit here" 
                     value={inputData}
                     onChange={(event) => setInputData(event.target.value)}
                />
{toggleBtn ? (
    <span className="input-group-text" 
                onClick={addItems}><i class="far fa-edit"></i></span>
) : (
    <span className="input-group-text" 
                onClick={addItems}><i class="fa fa-plus"></i></span>
)}                

            </div>
<div className="listbox">
{items.map((curElem) => {
    return (
    <div className="alert alert-success  alert-dismissible" key={curElem.id}>
    {curElem.name}
<i class="far fa-edit" onClick={() => editItem(curElem.id)}></i>

<i class="far fa-trash-alt" onClick={() => deleteItem(curElem.id)}></i>
    </div> 
    )
})}
   
</div>  
<div className="buttonbox">
<button type="button" className="btn btn-primary" 
onClick={removeAll}>Clear List</button>
</div>          
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList