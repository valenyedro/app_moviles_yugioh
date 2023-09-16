import { RenderFooter, RenderHeader, RenderSidebar, RenderHistorial } from "../services/renderServices.js"
import { HistorialError } from "../services/errorServices.js"
import { HistorialOnLoadEvents } from "../services/eventServices.js"

export const HistorialRender = () => {
    RenderHistorial();
    RenderHeader();
    RenderSidebar();
    RenderFooter();
    HistorialOnLoadEvents();
}

HistorialRender();