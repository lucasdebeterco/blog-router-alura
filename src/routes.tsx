import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home/Home.tsx";
import {About} from "./Pages/About/About.tsx";
import {Menu} from "./components/Menu";
import {Rodape} from "./components/Rodape";
import {DefaultPage} from "./components/DefaultPage";
import {Post} from "./components/Post";
import {NotFound} from "./Pages/NotFound";
import {ScrollToTop} from "./components/ScrollToTop";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Menu />

            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<Home />}/>
                    <Route path="about" element={<About />}/>
                </Route>

                <Route path="posts/:id/*" element={<Post />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>

            <Rodape />
        </BrowserRouter>
    )
}
