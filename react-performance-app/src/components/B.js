import React, { useCallback } from "react";

const Message = React.memo(({ message }) => {
  console.log("Message Component is Rendered");
  return <p>{message}</p>;
});

const ListItem = React.memo(({ post }) => {
  console.log("ListItem Component is Rendered");
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  );
});

const List = React.memo(({ posts }) => {
  console.log("List Component is Rendered");
  return (
    <ul>
      {posts.map((post) => {
        return <ListItem key={post.id} post={post} />;
      })}
    </ul>
  );
});

const B = ({ message, posts }) => {
  console.log("B Component is Rendered");
  const testFunction = useCallback(() => {}, []);
  // const result = useMemo(() => compute(a,b), [a,b]);

  return (
    <div>
      <h1>B Component</h1>
      <Message message={message} />
      <List posts={posts} testFunction={testFunction} />
    </div>
  );
};

export default B;

// React memo => 이전 props 다음 props 비교(얕은 비교)

// React memo, useCallback, useMemo

// React memo => 컴포넌트 최적화
// useCallback => 함수 최적화
// useMemo => 결과 값 최적화
