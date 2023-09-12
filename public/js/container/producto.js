import { RenderHeader, RenderSidebar, RenderFooter, RenderProductDetail, RenderRelatedProducts } from "../services/renderServices.js"
import { GetProductoById, GetProductoByType } from "../services/fetchServices.js";
import { ProductoDetailError } from "../services/errorServices.js";
import { GetParametro } from "../services/auxiliaryServices.js"
import { ProductoOnloadEvents } from "../services/eventServices.js"


export const ProductPageRender = () => {
    RenderHeader();
    RenderSidebar();
    RenderFooter();
    GetProductoById(GetParametro(), RenderProductDetail, ProductoDetailError);
   
    const getType = () => { 
        let type = sessionStorage.getItem('related_type');
        GetProductoByType(type,RenderRelatedProducts, () => {});
    }
    setTimeout(getType,400)
    ProductoOnloadEvents();
}

ProductPageRender();