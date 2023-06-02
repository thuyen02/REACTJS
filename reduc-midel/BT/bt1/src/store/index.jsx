import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getListTodo = createAsyncThunk(
"todos/getListTodo",
async (params, thunkApi) => {
    const list = await axios.get("http://localhost:3000/todos");
    return list;
}
);

export const deleteTodo = createAsyncThunk(
"todos/deleteTodo",
async (params, thunkApi) => {
    const list = await axios.delete(`http://localhost:3000/todos/${params.id}`);
    thunkApi.dispatch(getListTodo());
    return list;
}
);

export const addNewTodo = createAsyncThunk(
"todos/addNewTodo",
async (data, thunkApi) => {
    const newTodo = {
    id: data.id,
    name: data.name,
    };
    const list = await axios.post("http://localhost:3000/todos", newTodo);
    thunkApi.dispatch(getListTodo());
    return list;
}
);

export const updateNewTodo = createAsyncThunk(
"todos/updateNewTodo",
async ({ id, name }, thunkAPI) => {
    const list = await axios.put(`http://localhost:3000/todos/${id}`, { id, name });
    thunkAPI.dispatch(getListTodo());
    return list;
  }
);

const todoSlice = createSlice({
name: "todos",
initialState: {
    loading: "false",
    todos: [],
},
reducers: {
    addTodo: (state, action) => {
    console.log(111);
    state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
    const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
    );
    if (index !== -1) state.todos.splice(index, 1);
    },
},
extraReducers: {
    [getListTodo.pending]: (state, action) => {
    state.loading = true;
    },

    [getListTodo.fulfilled]: (state, action) => {
    state.loading = false;
    state.todos = action.payload.data;
    },

    [getListTodo.rejected]: (state, action) => {
    state.loading = true;
    },

    [addNewTodo.pending]: (state, action) => {
    state.loading = true;
    },

    [addNewTodo.fulfilled]: (state, action) => {
    state.loading = false;
    state.todos.push(action.payload);
    },

    [addNewTodo.rejected]: (state, action) => {
    state.loading = true;
    },

    [deleteTodo.pending]: (state, action) => {
    state.loading = true;
    },

    [deleteTodo.fulfilled]: (state, action) => {
    state.loading = false;
    state.todos = [];
    },
    [deleteTodo.rejected]: (state, action) => {
        state.loading = true;
    },
    
    [updateNewTodo.pending]: (state) => {
    state.loading = true;
    },
    [updateNewTodo.fulfilled]: (state, action) => {
    state.loading = false;
    const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
    );
    if (index !== -1) {
        state.todos.splice(index, 1, action.payload);
    }
    },
    [updateNewTodo.rejected]: (state) => {
    state.loading = false;
    },
},
});

const todoReducer = todoSlice.reducer;
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoReducer;