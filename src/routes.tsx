import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home/Home.tsx";
import {About} from "./Pages/About/About.tsx";
import {Menu} from "./components/Menu";
import {Rodape} from "./components/Rodape";
import {DefaultPage} from "./components/DefaultPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />

            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="*" element={<div>Página não encontrada</div>}/>
                </Route>
            </Routes>

            <Rodape />
        </BrowserRouter>
    )
}
