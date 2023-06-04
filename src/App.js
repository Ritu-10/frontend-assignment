import { useEffect, useState } from "react";
import TodoList from "./component/todo-list/TodoList";
import style from "./App.module.css";
import { BsFillShareFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlinePoll } from "react-icons/md";
import menu from "./assets/menu.svg";

export default function App() {
  const [todoListName, setTodoListName] = useState("");
  const [todoListCount, setTodoListCount] = useState([]);
  const [todoList, setTodoList] = useState([]);

  const handleAddTodoList = () => {
    const todoLists = {
      id: Math.random(),
      name: todoListName,
      subTodo: []
    };
    todoListCount.push(todoLists);
    setTodoListCount([...todoListCount]);
    localStorage.setItem("todo-list", JSON.stringify(todoListCount));
    setTodoListName("");
  };

  useEffect(() => {
    let todosCount = JSON.parse(localStorage.getItem("todo-list"));
    setTodoList(todosCount);
  }, [todoListCount]);
  return (
    <div className={style.main}>
      <div className={style.left}>
        <div className={style.leftTop}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem"
            }}
          >
            <span className={style.name_Logo}>N</span>
            <h3>Name</h3>
          </div>
          <p>
            <AiOutlineAppstore
              style={{ fontSize: "0.9rem", color: "#808191" }}
            />
            <span>Home</span>
          </p>
          <p>
            <MdOutlinePoll style={{ fontSize: "0.9rem" }} />
            <span>Section 1</span>
          </p>
          <p>
            <MdOutlinePoll style={{ fontSize: "0.9rem" }} />
            <span>Section 2</span>
          </p>
          <p>
            <BsFillShareFill style={{ fontSize: "0.9rem" }} />
            <span> Section 8</span>
          </p>
          <p>
            <BsFillShareFill style={{ fontSize: "0.9rem" }} />
            <span> Section 8</span>
          </p>
        </div>
        <div className={style.leftBottom}>
          <div className={style.dollor_Container}>
            <span className={style.dollor}>N</span>
            <p>$0.90</p>
          </div>
          <div className={style.xyz}>Buy $XYZ</div>
        </div>
      </div>
      <div className={style.todo_Container}>
        <div className={style.section_Div}>
          <h3 className={style.section}>Section</h3>
          <img src={menu} alt="menu" />
        </div>
        <div className={style.sectionContainer}>
          <div className={style.todo_Container_Left}>
            {todoList?.map((item, index) => {
              return (
                <div key={index} style={{ display: "flex" }}>
                  <TodoList todoListName={item.name} />
                </div>
              );
            })}

            <div className={style.input_Container}>
              <input
                placeholder="Add Todo-List"
                value={todoListName}
                onChange={(e) => setTodoListName(e.target.value)}
              />
              <button onClick={handleAddTodoList}>{"➕"}</button>
            </div>
          </div>
          <div className={style.todo_Container_Right}>
            <p>
              <BiArrowBack />
              Edit Todo
            </p>
            <div className={style.edit_Heading}>
              <h3>Carrot</h3>
            </div>
            <div className={style.edit_Description}>Carrot description</div>
            <button className={style.btn}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
