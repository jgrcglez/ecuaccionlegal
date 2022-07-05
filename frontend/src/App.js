import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage";

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import {fab} from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab)

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/blog" element={<BlogPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
