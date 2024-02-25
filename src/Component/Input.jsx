import React, { useState } from 'react';

const Input = ({ todoValue, setTodoValue, addTodo }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const addButtonCall = () => {
        addTodo(title, description)
        setTitle('');
        setDescription('');
    }
    return (
        <div class="container">
      <h1 class="text-center m-3" style={{color: "#198754", textAlign:"center"}}>My Todo</h1>
      <div className="row  justify-content-around text" style={{marginTop:"100px", textAlign:"center"}}>
        <input style={{padding:"10px", marginRight:"100px", borderRadius:"10px"}} class="col-lg-4 col-sm-12 p-2 m-1 border-success border-3"  type="text" placeholder="Todo Title" value={title} onChange={e => setTitle(e.target.value)} /> 
        <input style={{padding:"10px",marginRight:"100px",  borderRadius:"10px"}} class="col-lg-4 col-sm-12 p-2 m-1 border-success border-3" type="text" placeholder="Todo Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button style={{padding:"10px",marginRight:"100px",borderRadius:"15px", backgroundColor:"#198754", border:"none", borderRadius:"10px",color:"white"}} class="col-lg-1 col-sm-3 col-3 p-2 m-1 btn btn-success border-success border-3" onClick={() => { addButtonCall(title, description) }}>Add Todo</button>
      </div>
    </div>
    );
};

    export default Input;