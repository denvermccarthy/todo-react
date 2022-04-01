import ListItem from '../ListItem/ListItem';

export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <ListItem key={item.id} todoObj={item} />
      ))}
    </div>
  );
}
//
