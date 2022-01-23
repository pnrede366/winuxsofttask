import React, { useState } from 'react'
import Task from './Task';

function Home() {
    const [taskName, setTaskName] = useState("")
    const [newTask, setnewTask] = useState([])
    let newArr;
   const OnChangeHandler=(e)=>{
                setTaskName( e.target.value)
    }
   const addTask=()=>{
            setnewTask((old)=>{
                return [...old,taskName];
            })
        }
        const deleteTask=(id)=>{
            console.log("ok");
            setnewTask((old)=>{

               return  old.filter((data,index)=>{
                   
                    return index!==id
   
                })
            })
        }

       
    return (
        <div>
            <div className="card w-25 m-auto">
                <div className="card-header">
                    Add Task
                </div>
                <div className="card-body">
                <input type="text"  className="form-control" onChange={OnChangeHandler} value={taskName}/>
                <br />
            <button className="btn btn-success form-control" onClick={addTask}>Add +</button>
                </div>
            </div>

            <div className="card w-25 m-auto">
                {taskName}
            </div>
            {/* {newTask} */}

            {
            newTask.map((dd,i)=>{
                    // return <ol key={i}>{dd}  {i} <button id={i}  className="btn" onClick={deleteTask}><i className="fa fa-trash-o text-danger" aria-hidden="true"></i></button> </ol>
                    return <Task text={dd} key={i} id={i}  selectedFun={deleteTask}/>
            })
            }
            {newArr}
        </div>
    )
}

export default Home
