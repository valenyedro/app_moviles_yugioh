import { RenderAllProductos, RenderFooter, RenderHeader, RenderSidebar,RenderFilter, RenderPage } from "../services/renderServices.js"
import { GetAllProductos, GetPage, GetRandomProduct } from "../services/fetchServices.js";
import { IndexProductsError } from "../services/errorServices.js"
import { IndexOnloadEvents } from "../services/eventServices.js"

export const IndexRender = () => {
    GetPage(0,RenderPage, IndexProductsError);
    RenderHeader();
    RenderSidebar();
    RenderFooter();
    RenderFilter();
    IndexOnloadEvents();
}


