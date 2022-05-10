import {
    faSquareArrowUpRight,
    faSquareMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import style from './ToDo.module.css';

const ToDo = ({ title, id }) => {
    const dispatch = useDispatch();

    function deleteToDo(id) {
        dispatch(actionCreators.deleteToDo(id));
    }

    function onClick() {
        deleteToDo(id);
    }
    return (
        <li className={style.list}>
            <span className={style.toDo}>{title}</span>

            <button className={style.linkBtn}>
                <Link to={`/${id}`}>
                    <FontAwesomeIcon
                        className={style.linkIcon}
                        icon={faSquareArrowUpRight}
                    />
                </Link>
            </button>

            <button className={style.deleteBtn} onClick={onClick}>
                <FontAwesomeIcon icon={faSquareMinus} />
            </button>
        </li>
    );
};

export default ToDo;
