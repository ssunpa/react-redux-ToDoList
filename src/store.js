import { createStore } from 'redux';

const ADD_TODO = 'ADD_TODO';
const ADD_DETAIL = 'ADD_DETAIL';
const DELETE_TODO = 'DELETE_TODO';
const DELETE_DETAIL = 'DELETE_DETAIL';

const addToDo = (title) => {
    return {
        type: ADD_TODO,
        title,
    };
};

const addDetail = (text, id) => {
    return {
        type: ADD_DETAIL,
        id,
        text,
    };
};

const deleteToDo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    };
};

const deleteDetail = (id) => {
    return {
        type: DELETE_DETAIL,
        id,
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{ title: action.title, id: Date.now() }, ...state];
        case ADD_DETAIL:
            return state.map((toDo) => {
                if (toDo.id === action.id) {
                    toDo = { ...toDo, text: action.text };
                }
                return toDo;
            });
        case DELETE_TODO:
            return state.filter((toDo) => toDo.id !== action.id);
        case DELETE_DETAIL:
            return state.map((toDo) => {
                if (toDo.id === action.id) {
                    delete toDo.text;
                }
                return toDo;
            });
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo,
    addDetail,
    deleteDetail,
};

export default store;
