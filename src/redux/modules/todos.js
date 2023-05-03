// 액션 타입
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// 액션 크리에이터
export const addTodo = (payload) => {
    return { type : ADD_TODO, payload}
}
export const deleteTodo = (payload) => {
    return { type : DELETE_TODO ,payload}
}
// 초기값
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트는 재밌어요.",
    },
  ],
};

// 리듀서 = 함수다.
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      };
    case DELETE_TODO:
        return {
            ...state,
            todos: state.todos.filter((todo)=> todo.id != action.payload )
        }

    default:
      return state;
  }
};

export default todosReducer;