import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from '*.svg';

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string,
  complete: boolean
}

export default function App(): JSX.Element {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e:FormElem):void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text:string):void => {
    const newTodos: ITodo[] = [...todos, {text, complete:false}]
    setTodos(newTodos)
  }

  const completeTodo = (index: number):void => {
    const newTodos: ITodo[] = todos
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  console.log('todos: ',todos)
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required></input>
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo:ITodo, index:number) => 
          <Fragment key={index}>
            <div>{todo.text}</div>
            <button type="button" onClick={() => completeTodo(index)}>
              {todo.complete ? 'Incomplete' : 'Complete'}
            </button>
          </Fragment>
        )}
      </section>
    </Fragment>
  )
}

const root = document.getElementById('root')

ReactDOM.render(<App /> ,root)
