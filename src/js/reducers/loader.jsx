var LOADER_STATE = 'LOADER_STATE';
var loader = (state = false, action) => {
  switch (action.type) {
    case LOADER_STATE:
      state = action.payload;
    default:
      console.log("LOADER STATE CHANGE", state);
      return state
  }
}
