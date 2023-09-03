import { RenderHeader, RenderSidebar, RenderFooter} from "../services/renderServices.js"
import { ContactOnLoadEvents } from "../services/eventServices.js"

export const contactoRender = () => {
    RenderHeader();
    RenderSidebar();
    RenderFooter();
    ContactOnLoadEvents();
}


contactoRender();