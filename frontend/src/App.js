import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage";

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas)

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
