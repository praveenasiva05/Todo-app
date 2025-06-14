import React, { useState } from 'react';
import TodoForm from './TodoForm';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({ id: null, value: '' });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: '' });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-row ${todo.isComplete ? 'complete' : ''}`}
        >
          <div onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className='icons'>
            <button onClick={() => removeTodo(todo.id)} className='delete-button'> Delete </button>
            <button onClick={() => setEdit({ id: todo.id, value: todo.text })} className='update-button'> Update </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
