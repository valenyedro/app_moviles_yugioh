import { RenderHeader, RenderSidebar, RenderFooter} from "../services/renderServices.js"
import { CarritoEvents, ContactOnLoadEvents } from "../services/eventServices.js"
import { CarritoCount } from "../services/auxiliaryServices.js";
import { SendToMail , MessageAreaEvent} from "../services/formServices.js";
import { StartMapService } from "../services/mapServices.js";


export const contactoRender = () => {
    RenderHeader();
    RenderSidebar();
    RenderFooter();
    ContactOnLoadEvents();
    CarritoEvents();
    CarritoCount();
    SendToMail();
    MessageAreaEvent();
    StartMapService();
}


contactoRender();

