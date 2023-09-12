import { RenderHeader, RenderSidebar, RenderFooter} from "../services/renderServices.js"
import { CarritoEvents, ContactOnLoadEvents } from "../services/eventServices.js"
import { CarritoCount } from "../services/auxiliaryServices.js";

const SendToMail = () => {
    
    $("#send_mail").on("click",()=>{
        
        const nombre = $("#mail_name").val();
        const mail =  $("#mail_mail").val();
        const asunto = $("#mail_asunto").val();
        const message =  $("#mail_mensaje").val();
        console.log(nombre)
       
    })
}

export const contactoRender = () => {
    RenderHeader();
    RenderSidebar();
    RenderFooter();
    ContactOnLoadEvents();
    CarritoEvents();
    CarritoCount();
    SendToMail();
}


contactoRender();

