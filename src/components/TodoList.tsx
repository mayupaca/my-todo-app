import { useState } from "react";

const todos = ["Buy groceries", "Clean the house", "Walk the dog"];

function TodoList() {
  // 型がnumber | nullになるのは、最初はnullにしておき、クリックされたらindexを入れるため
  const [selectedTodoIndex, setSelectedTodoIndex] = useState<number | null>(
    null
  );

  const handleTodoClick = (index: number) => {
    setSelectedTodoIndex(index);
  };

  return (
    <>
      <h1>Todo List</h1>
      <div className="todo-list">
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li
              key={index}
              // テンプレートリテラルで複数のBootstrapのクラスを指定している
              className={`list-group-item ${
                selectedTodoIndex === index ? "active" : ""
              }`}
              onClick={() => handleTodoClick(index)}
            >
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
