import React, { useState } from 'react';

const Home = (props) => {
    const [text, setText] = useState('');
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        setText('');
    }
    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    );
};

export default Home;
