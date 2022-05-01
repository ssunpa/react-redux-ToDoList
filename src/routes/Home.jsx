import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators } from '../store';

const Home = (props) => {
    const toDos = useSelector((state) => state);
    const dispatch = useDispatch();

    const [text, setText] = useState('');

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        setText('');
        addToDo(text);
    }

    function addToDo(text) {
        dispatch(actionCreators.addToDo(text));
    }

    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((todo) => (
                    <ToDo {...todo} key={todo.id} />
                ))}
            </ul>
        </>
    );
};

export default Home;
