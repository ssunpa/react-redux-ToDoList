import {
    faCircleArrowLeft,
    faCircleCheck,
    faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { actionCreators } from '../store';
import style from './Detail.module.css';

const Detail = () => {
    const toDos = useSelector((state) => state);
    const dispatch = useDispatch();
    const id = useParams().id;

    const toDo = toDos.find((todo) => todo.id === parseInt(id));

    const [text, setText] = useState('');

    function addDetail(text) {
        dispatch(actionCreators.addDetail(text, parseInt(id)));
    }

    function deleteDetail() {
        dispatch(actionCreators.deleteDetail());
    }

    function onChange(e) {
        setText(e.target.value);
    }

    function onSaveClick(e) {
        e.preventDefault();
        addDetail(text);
    }

    function onDeleteClick() {
        deleteDetail();
    }

    return (
        <section className={style.container}>
            <header className={style.header}>
                <button className={style.homeBtn}>
                    <Link to="/">
                        <FontAwesomeIcon
                            className={style.linkIcon}
                            icon={faCircleArrowLeft}
                        />
                    </Link>{' '}
                </button>
                <h1>{toDo?.title}</h1>
            </header>
            <textarea className={style.text} onChange={onChange}>
                {toDo?.text}
            </textarea>
            <footer className={style.footer}>
                <button className={style.deleteBtn}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <button className={style.saveBtn} onClick={onSaveClick}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                </button>
            </footer>
        </section>
    );
};

export default Detail;
