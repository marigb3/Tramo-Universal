"use strict"








function sendEmail(){

     mail.send({
        Host : "smtp.gmail.com",
        Username : "mgonza10@outlook.es",
        Password : "tramo",
        To : 'marielagb03@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Experiencia del sitio, por el usuario",
        Body : "Nombre: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Mensaje: " + document.getElementById("message").value
    }).then(
    message => alert("Se envio el mensaje")
    );

}