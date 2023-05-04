import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home/Home.tsx";
import {About} from "./Pages/About/About.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App