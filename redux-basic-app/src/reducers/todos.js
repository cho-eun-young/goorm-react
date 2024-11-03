// reducer function
// action 안에는 주로{type, payload}
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text];
    default:
      return state;
  }
};

export default todos;
