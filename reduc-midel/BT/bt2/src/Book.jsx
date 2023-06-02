import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, addBookAsync, editBook, editBookAsync, getBookAsync, removeBook, removeBookAsync } from "./store";
import { nanoid } from "@reduxjs/toolkit";

export default function Book() {
  const [book, setBook] = useState({ id: 0, name: "" });
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);

  const onChange = (event) => {
    const { value } = event.target;
    setBook({ ...book, name: value });
  };

  const handleAdd = () => {
      if (book.name.trim() !== "") {
      let nextId = books.length;
      setBook({ id: nextId + 1, name: "" });
      dispatch(addBookAsync(book));
      setBook({ id: 0, name: "" });
    }
  };

  const handleDelete = (id) => {
    dispatch(removeBookAsync({id}));
  };
  
  const handleEdit = (book) => {
    setIsEdit(true);
    setBook({id: book.id, name: book.name});
  }

  const handleSave = () => {
    dispatch(editBookAsync({id: book.id, name: book.name}));
    setBook({id: 0, name: ""});
    setIsEdit(false);
    console.log(book.id);
  }

  useEffect(() => {
    dispatch(getBookAsync());
  }, []);
  return (
    <div style={{width: '500px', margin: 'auto'}}>
      <h2>Book Manager</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={book.name} onChange={onChange} />
        {(!isEdit) ? 
        <button type="submit" onClick={handleAdd}>Add</button>
        :<button type="submit" onClick={handleSave}>Save</button>}
        <ul>
          {books?.map((book) => {
            return (
              <li key={book.id}>
                {book.name}
                <button onClick={() => handleDelete(book.id)}>Delete</button>
                <button onClick={() => handleEdit(book)}>Edit</button>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}