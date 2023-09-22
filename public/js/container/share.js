import { RenderFooter, RenderHeader, RenderSidebar,RenderFilter } from "../services/renderServices.js"
import { CarritoEvents, ContactOnLoadEvents, IndexOnloadEvents } from "../services/eventServices.js"
import { getShareContent } from "../services/shareService.js";
import { showNotification } from "../services/auxiliaryServices.js";

export const IndexRender = () => {
    RenderHeader();
    RenderFooter();
    RenderSidebar();
    CarritoEvents();
    ContactOnLoadEvents();
    loadMessage();
    validateMessage();
}

IndexRender();

function loadMessage(){

    let shareItem = getShareContent();

    let message = `Hola , te comparto la carta ${shareItem.nombre}! la cual solo cuesta ${shareItem.precio}. Podes encontrarla por su codigo ${shareItem.id}`
    $("#mail_mensaje").val(message)
    $('#mail_asunto').val(shareItem.nombre)
}

function validateMessage(){

    $("#send_mail").closest("form").on("submit", (event) => {
        event.preventDefault();
        
        const nombre = $("#mail_name").val();
        const mail =  $("#mail_mail").val();
        const asunto = $("#mail_asunto").val();
        const message =  $("#mail_mensaje").val();
        const mailEmisor = $('#mail_emisor').val();
        console.log(message)

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const nombreRegex = /^[a-zA-Z]+$/;

        if (!emailRegex.test(mailEmisor)) {
            showNotification('Error','Por favor, ingresa un mail valido.','error')
            return; 
        }

        if (!emailRegex.test(mail)) {
            
            showNotification('Error','Por favor, ingresa una dirección de correo electrónico válida.','error')
            return;
        }

        if(mailEmisor === mail){
            showNotification('Error','el mail de destino y emisor no pueden ser iguales','error')
            return;
        }

        if(asunto == ''|| asunto == null){
            showNotification('Error','el asunto no puede esta vacio','error')
            return; 
        }
        
    

        if(message == '' || message.trim().length < 20){
            showNotification('Error','tu mensaje debe tener como minimo 20 caracteres','error')
            return; 
        }


        showNotification('Enviado','tu mensaje fue enviado con exito y pronto te responderemos','success')

        sendMail(mail,asunto,message);

    })

}

function sendMail(mail,asunto,message) {


    const emailAsunto = encodeURIComponent(asunto);
    const emailBody = encodeURIComponent(message);

    const mailtoLink = `mailto:${mail}?subject=${emailAsunto}&body=${emailBody}`;
    
    
    window.location.href = mailtoLink;
}
