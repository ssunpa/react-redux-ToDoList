import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const toDos = useSelector((state) => state);
    const id = useParams().id;
    const toDo = toDos.find((todo) => todo.id === parseInt(id));
    return <h1>{toDo?.text}</h1>;
};

export default Detail;
