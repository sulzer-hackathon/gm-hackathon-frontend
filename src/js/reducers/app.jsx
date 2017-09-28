var UPDATE_SESSION = 'UPDATE_SESSION';
var app = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SESSION:
      return Object.assign({}, action.payload);
    // case 'TOGGLE_TODO':
    //   return state.map(todo =>
    //     (todo.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //   )
    default:
      return state
  }
}
