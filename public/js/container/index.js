import { RenderAllProductos, RenderFooter, RenderHeader, RenderSidebar, RenderRandomProduct } from "../services/renderServices.js"
import { GetAllProductos, GetRandomProduct } from "../services/fetchServices.js";
import { IndexProductsError } from "../services/errorServices.js"
import { IndexOnloadEvents } from "../services/eventServices.js"

export const IndexRender = () => {
    GetAllProductos(RenderAllProductos, IndexProductsError);
    RenderHeader();
    RenderSidebar();
    RenderFooter();
    IndexOnloadEvents();
}


