import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import TodoInput from '../../components/TodoInput/TodoInput';
import TodoList from '../../components/TodoList/TodoList';
import { createTodo, getTodos } from '../../services/todos';
import { getUser } from '../../services/users';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const { id } = getUser();
  const [todo, setTodo] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await getTodos();
        setTodos(resp);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (todo === '') return;
    const data = await createTodo({ user_id: id, todo });
    setTodos((prev) => [...prev, data]);
    setTodo('');
  };
  return (
    <div>
      <Header />
      <TodoInput {...{ todo, id, setTodo, submitHandler }} />
      <TodoList {...{ todos }} />
    </div>
  );
}
