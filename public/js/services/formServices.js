import { showNotification } from "./auxiliaryServices.js";

export const SendToMail = () => {
    
    $("#send_mail").closest("form").on("submit", (event) => {
        event.preventDefault();
        
        const nombre = $("#mail_name").val();
        const mail =  $("#mail_mail").val();
        const asunto = $("#mail_asunto").val();
        const message =  $("#mail_mensaje").val();
        console.log(message)

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const nombreRegex = /^[a-zA-Z]+$/;

        if (!nombreRegex.test(nombre)) {
            showNotification('Error','Por favor, ingresa un nombre valido.','error')
            return; 
        }

        if (!emailRegex.test(mail)) {
            
            showNotification('Error','Por favor, ingresa una dirección de correo electrónico válida.','error')
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

        $('#mail_name').val('');
        $('#mail_mail').val('');
        $('#mail_asunto').val('');
        $('#mail_mensaje').val('');
    }
 )
}


export const MessageAreaEvent = () => {

    $('#mail_mensaje').on('input',()=>{

        let cantidadCaracteres = $('#mail_mensaje').val().trim().length;
        $('.character-count').text(`${cantidadCaracteres+'/100'}`)
    })
}