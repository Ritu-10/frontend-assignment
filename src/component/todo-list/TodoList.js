import { useEffect, useState } from "react";
import style from "./TodoList.module.css";

export default function TodoList({ todoListName }) {
  const [todoList, setTodoList] = useState(todoListName);
  const [todo, setTodo] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [todos, setTodos] = useState([]);
  const handleAddTodo = () => {
    const newTodo = {
      id: Math.random(),
      name: todo,
      description: todoDescription
    };
    const findTodoList = JSON.parse(localStorage.getItem("todo-list"));
    setTodoItems([...todoItems, newTodo]);
    setTodo("");
    setTodoDescription("");
  };
  // useEffect(() => {
  //   let todosCount = JSON.parse(localStorage.getItem("todo-list"));
  //   setTodos(todosCount);
  // }, []);
  return (
    <div className={style.todo}>
      <h5>{todoList}</h5>
      <div style={{ display: "flex" }}>
        <div className={style.input_Container}>
          <input
            placeholder="Add Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <input
            placeholder="Add todo description"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
          />
        </div>
        <button onClick={handleAddTodo} className={style.btn}>
          {"➕"}
        </button>
      </div>
      {todoItems.map((el) => {
        return (
          <div className={style.subTodo} key={el.id}>
            <p className={style.heading}>{el.name}</p>
            <p className={style.description}>{el.description}</p>
          </div>
        );
      })}
    </div>
  );
}
