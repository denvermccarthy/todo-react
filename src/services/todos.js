import { checkError, client } from './client';

export const getTodos = async () => {
  const resp = await client.from('todos').select();
  return checkError(resp);
};

export const createTodo = async (todo) => {
  const resp = await client.from('todos').insert(todo).single();
  return checkError(resp);
};
