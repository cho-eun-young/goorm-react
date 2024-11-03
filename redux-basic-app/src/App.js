import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// 리덕스 미들웨어 thunk

function App({ onIncrement, onDecrement }) {
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  // Action 객체임  Dispatch 하는건 action

  // const fetchPosts = () => {
  //   return async function fetchPosts(dispatch, getState) {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );

  //     dispatch({ type: "FETCH_POST", payload: response.data });
  //   };
  // };

  const fetchPosts = () => async (dispatch, getState) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    dispatch({ type: "FETCH_POST", payload: response.data });
  };

  // async function fetchPosts() {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/posts"
  //   );

  //   dispatch({ type: "FETCH_POST", payload: response.data });
  // }

  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //ACTION DISPATCH
    dispatch({ type: "ADD_TODO", text: todoValue });
    setTodoValue("");
  };

  const counter = useSelector((state) => state.counter);
  console.log(counter);

  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div className="App">
      Clicked: {counter} times <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <input type="submit" />
      </form>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
