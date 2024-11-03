// reducer는 함수이다.
// (prev, action) => nextState

// {type: 'INCREMENT'}
// {type: 'DECREMENT'}

// store state 업데이트 하는 방법 ==> action(객체) dispatch(함수)

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counter;
