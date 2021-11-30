import { ADD_TO_TODO, EDIT_TASK, DELETE_TASK } from "../Constants/action-types";

const initialState = {
  todos: [
    {
      id: {
        $oid: "61a038c7fc13ae07060001f4",
      },
      description: "todo 1",
      isDone: true,
    },
    {
      id: {
        $oid: "61a038c7fc13ae07060001f5",
      },
      description: "todo 2",
      isDone: true,
    },
    {
      id: {
        $oid: "61a038c7fc13ae07060001f6",
      },
      description: " 3",
      isDone: false,
    },
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case EDIT_TASK:
      state.todos.forEach((todo) => {
        if (todo.id.$oid === action.payload.id.$oid) {
          todo.description = action.payload.description;
          todo.isDone = action.payload.isDone;
        }
      });
      return { ...state, todos: [...state.todos] };
    case DELETE_TASK:
      let arr = state.todos.filter((todo) => {return todo.id.$oid !== action.payload.id.$oid})
      return {...state, todos: [...arr]} 
    default:
      return state;
  }
}

export default rootReducer;
