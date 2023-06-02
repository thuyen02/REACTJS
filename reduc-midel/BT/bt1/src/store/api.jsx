import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const listTodo = createAsyncThunk("todos/listTodo", async () => {
    const list = await axios.get("http://localhost:3000/todos");
    return list;
});

export default listTodo;