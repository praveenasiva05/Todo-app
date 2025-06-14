import React, { useState, useEffect, useRef } from 'react';

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input type="text" placeholder={edit ? 'Update item' : 'Add a todo'}
        value={input}
        onChange={handleChange}
        name="text"
        ref={inputRef}
        className={`todo-input ${edit ? 'edit' : ''}`}
      />
      <button className={`todo-button ${edit ? 'edit' : ''}`}>
        {edit ? 'Update' : 'Add todo'}
      </button>
    </form>
  );
}

export default TodoForm;
