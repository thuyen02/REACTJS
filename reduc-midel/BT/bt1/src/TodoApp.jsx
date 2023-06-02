import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, deleteTodo, getListTodo, updateNewTodo } from "./store";
import axios from "axios";

export default function TodoApp() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const [todo, setTodo] = useState({ id: 0, name: "" });
  const [isEdit, setIsEdit] = useState(false);

  const onChange = (event) => {
    const { value } = event.target;
    setTodo({ ...todo, name: value });
  };

  const handleAdd = () => {   
      let nextId = todos.length;
      if (todo.name.trim() !== "") {
        dispatch(addNewTodo(todo));
        setTodo({ id: nextId + 1, name: "" });
      }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleEdit = (todo) => {
    setTodo({id: todo.id, name: todo.name});
    setIsEdit(true);
  };

  const handleSave = () => {
    console.log(1323232);
    dispatch(updateNewTodo({ id: todo.id, name: todo.name }));
    setTodo({id: 0, name: ""});
    setIsEdit(false);
  };

  useEffect(() => {
    dispatch(getListTodo());
  }, []);

  return (
    <div>
      <h2>Todo App</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={todo.name} onChange={onChange} />
        {(!isEdit) ? 
        <button type="submit" onClick={handleAdd}>Add</button>
        :<button type="submit" onClick={handleSave}>Save</button>}
        <ul>
          {todos?.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.name}
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                <button onClick={() => handleEdit(todo)}>Edit</button>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
        }
