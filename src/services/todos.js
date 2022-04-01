import { checkError, client } from './client';

export const getTodos = async () => {
  const resp = await client.from('todos').select();
  return checkError(resp);
};

export const createTodo = async (todo) => {
  const resp = await client.from('todos').insert(todo).single();
  return checkError(resp);
};

export const updateCompleted = async (complete, id) => {
  const resp = await client.from('todos').update({ complete }).match({ id });
  return checkError(resp);
};

export const updateText = async (todo, id) => {
  const resp = await client.from('todos').update({ todo }).match({ id }).single();
  return checkError(resp);
};

export const deleteTodo = async (id) => {
  const resp = await client.from('todos').delete().match({ id });
  return checkError(resp);
};
