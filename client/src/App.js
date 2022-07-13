import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './components/routes/Routes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component></route.component>}
                    ></Route>
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
