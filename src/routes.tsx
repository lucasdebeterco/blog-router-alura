import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home/Home.tsx";
import {About} from "./Pages/About/About.tsx";
import {Menu} from "./components/Menu";
import {Rodape} from "./components/Rodape";
import {DefaultPage} from "./components/DefaultPage";
import {Post} from "./components/Post";
import {NotFound} from "./Pages/NotFound";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />

            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<Home />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="posts/:id" element={<Post />}/>
                </Route>

                <Route path="*" element={<NotFound />}/>
            </Routes>

            <Rodape />
        </BrowserRouter>
    )
}
