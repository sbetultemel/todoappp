/*import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';*/
import "./App.css"
import React,{useState,useEffect} from 'react';
import {FormControl,Button,Form} from 'react-bootstrap'


function App() {

  const [todo, settodo] =useState("");
  const [todolist,settodolist] = useState([]);

  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  const addtodo = ()=> {
    settodolist(prevtodolist => ([...prevtodolist, todo])) // eski todolisti yazsın ve sonrasında eklenen todo yu da yazdırsın istiyorum.
    settodo("") //yazdıktan sonra istiyorum ki temizlesin text
  }
  return(
   <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
    <h1 className='mt-5 w-60'> TO DO LİST APP</h1>
   <div className='d-flex w-50 mt-3'>
    <FormControl 
    className='w-75'
    placeholder="görev"
    value={todo} //todo nun değeri neyse senin de değerin o.
    onChange={(event) => settodo(event.target.value) }
    />
    <button className='ms-5' onClick={addtodo}>ekle</button>
    </div> 
    <div>
      {
       todolist.map[
        (todoitem,index) => 
        <div key={index} className='d-flex'> 
         <Form.Check 
            type="checkbox"
         /> 
          <label> {todoitem} </label>
          </div>
       ]
       
      }

    </div>
     
    </div>

   
  );
 
}

export default App;



