import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from '../routes/Detail';
import Home from '../routes/Home';
import style from './App.module.css';

function App() {
    return (
        <div className={style.app}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
