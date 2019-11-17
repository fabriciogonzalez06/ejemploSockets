 var socket = io();

 //estar a la escucha
 socket.on('connect', function() {
     console.log("conectado con el servidor");
 });


 socket.on('disconnect', function() {
     console.log("perdimos conexión con el servidor");
 });

 //enviar mensajes
 socket.emit('enviarMensaje', {
     // nombre: "fabricio",
     mensaje: 'hola mundo'
 }, function(respuestaBack) {
     console.log("se disparó el callback");

     console.log(respuestaBack);
 });

 //escuchar al servidor 
 socket.on('enviarMensaje', function(mensaje) {
     console.log("servidor", mensaje);

     //  alert("Bienvenido al sistema por parte del " + mensaje.nombre);
 });