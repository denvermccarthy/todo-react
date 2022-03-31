import { useState } from 'react';
import { createTodo } from '../../services/todos';
import { getUser } from '../../services/users';

export default function TodoInput({ todo, setTodo, submitHandler }) {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
        <button>click me</button>
      </form>
    </div>
  );
}
