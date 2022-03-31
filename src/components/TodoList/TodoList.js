import { useState, useEffect } from 'react';
import { getTodos } from '../../services/todos';

export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <p className="todo" key={item.id}>
          {item.todo}
        </p>
      ))}
    </div>
  );
}
