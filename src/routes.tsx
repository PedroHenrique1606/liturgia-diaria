import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Liturgia from "./pages/liturgia/liturgia";
import PontificePage from "./pages/pontifex/pontifex";
import AcendaVela from "./pages/acenda-vela/AcendaVela";
import ManualConfissao from "./pages/confissao/confissao";
import CalendarioLiturgico from "./pages/calendario-liturgico/calendario-liturgico";
import PrayRosaryPage from "./pages/santo-terco/santo-terco";

export const PATHS = {
    home: "/",
    liturgic: "/liturgia",
    pontifex: "/pontifex",
    candle: "/acenda-vela",
    confession: "/confissao",
    dateliturgic: "/calendario-liturgico",
    santoterco: "/santo-terco",
};

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATHS.home} element={<Navigate to={PATHS.liturgic} />} />
                <Route path={PATHS.liturgic} element={<Liturgia />} />
                <Route path={PATHS.pontifex} element={<PontificePage />} />
                <Route path={PATHS.candle} element={<AcendaVela />} />
                <Route path={PATHS.confession} element={<ManualConfissao />} />
                <Route path={PATHS.dateliturgic} element={<CalendarioLiturgico />} />
                <Route path={PATHS.santoterco} element={<PrayRosaryPage />} />
            </Routes>
        </BrowserRouter>
    );
}
