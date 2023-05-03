import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo ,deleteTodo} from "./redux/modules/todos";
const App = () => {
  const dispatch = useDispatch();

  const todos = useSelector(({todos}) => todos.todos)

  // const [todos, setTodos] = useState([
  //   {
  //   id :1,
  //   title: "리액트 너무 재밌어요"
  //   } 
  // ])
  const [todo, setTodo] = useState({
    id: "",
    title: "",
  });

  return (
    <div>
      <label>제목</label>
      <input
        type="text"
        value={todo.title}
        onChange={({ target: { value: title } }) => {
          setTodo((pre) => ({
            ...pre,
            id : new Date().toString(),
            title
          }))
        }} />
      <button
        onClick={() => {
          dispatch(addTodo(todo))
        }}
      > 
      todo 추가하기
      </button>
      <br />
      <h1>Todos!</h1>
      {todos.map((todo) => (
        <div key={todo.id} style ={{display : "flex", gap: "15px"}}>
        <div key={todo.id}>{todo.title}</div>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>삭제</button>
        </div>
      ))}
    </div>
  )
};

export default App;
