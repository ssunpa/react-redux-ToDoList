import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators } from '../store';
import style from './Home.module.css';

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
        <section className={style.container}>
            <h1 className={style.title}>To Do List</h1>
            <form className={style.form} onSubmit={onSubmit}>
                <input
                    className={style.input}
                    type="text"
                    value={text}
                    onChange={onChange}
                />
                <button className={style.button}>ADD</button>
            </form>
            <ul>
                {toDos.map((todo) => (
                    <ToDo {...todo} key={todo.id} />
                ))}
            </ul>
        </section>
    );
};

export default Home;
