// const TodosReducer = (state = [], action) => {
//   console.log(state, 'state at todos reducer first **8', action);
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//       )
//     default:
      
//       const aa = [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//         console.log(aa, 'last last');
//       return aa;

//   }
// }

// export default TodosReducer;