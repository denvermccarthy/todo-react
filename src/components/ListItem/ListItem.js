import { useState, useEffect } from 'react';
import { deleteTodo, updateCompleted, updateText } from '../../services/todos';
import './ListItem.css';

export default function ListItem({ todoObj }) {
  const [todo, setTodo] = useState(todoObj);
  const [complete, setComplete] = useState(todo.complete);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.todo);
  const id = todo.id;

  useEffect(() => {
    const update = async () => {
      await updateCompleted(complete, id);
    };
    update();
  }, [complete, id]);

  const submitEdit = async () => {
    const update = await updateText(editedText, id);
    setTodo(update);
    setIsEditing(false);
  };
  const deleteTodoHandler = async () => {
    await deleteTodo(id);
    setIsEditing(false);
  };
  return (
    <div className="list-item">
      <input type="checkbox" onChange={(e) => setComplete(e.target.checked)} checked={complete} />
      {isEditing ? (
        <>
          <input
            type={'text'}
            defaultValue={todo.todo}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button type="submit" onClick={submitEdit}>
            ✅
          </button>
          <button type="submit" onClick={deleteTodoHandler}>
            ❌
          </button>
        </>
      ) : (
        <p onClick={() => setIsEditing(true)}>{todo.todo}</p>
      )}
    </div>
  );
}
