import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Liturgia from "./pages/liturgia/liturgia";
import PontificePage from "./pages/pontifex/pontifex";
import AcendaVela from "./pages/acenda-vela/AcendaVela";

export const PATHS = {
    home: "/",
    liturgic: "/liturgia",
    pontifex: "/pontifex",
    candle: "/acenda-vela",

};

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATHS.home} element={<Navigate to={PATHS.liturgic} />} />
                <Route path={PATHS.liturgic} element={<Liturgia />} />
                <Route path={PATHS.pontifex} element={<PontificePage />} />
                <Route path={PATHS.candle} element={<AcendaVela />} />
            </Routes>
        </BrowserRouter>
    );
}
