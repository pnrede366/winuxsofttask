import React from 'react'

function Task(props) {
    return (
        <div>
               <ol>{props.text} {props.id} <button id={props.id}  className="btn" 
               onClick={()=>{
                   props.selectedFun(props.id)
               }}><i className="fa fa-trash-o text-danger" aria-hidden="true"></i></button></ol>
        </div>
    )
}

export default Task
