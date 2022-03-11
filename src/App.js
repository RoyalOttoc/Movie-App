import React, {useState} from 'react'


function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    if(toDo === ""){
      return;
    }
    console.log("submited")
    setTodos(currentArray => [toDo, ...currentArray])
    setTodo("")
  }
  const handleClear = () =>{
    setTodos([])
  }
  const handleRemove = (index) => {
    console.log("remove clicked")
    setTodos(toDos.filter((item,toDoindex) => toDoindex !== index))
    
  }

  return(
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit} >
        <input value={toDo} onChange={onChange} type="text" placeholder='Wirte your to do...' />
        <button type='submit'>Add To Do</button>
        <button onClick={handleClear}>Clear</button>
      </form>
      <ul>
        {toDos.map((item, index)=>{
          return (<li key={index}>
            {item} 
            <button onClick={() => handleRemove(index)}>❌</button>
            </li>
          )
      })}
      </ul>
      

    </div>
  )
}

export default App;
