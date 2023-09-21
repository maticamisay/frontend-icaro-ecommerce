import React, { useEffect } from "react";

const App = () => {
  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return <div>App</div>;
};

export default App;
