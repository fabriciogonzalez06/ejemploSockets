const { io } = require('../server');

io.on('connection', (client) => {
    console.log("usuario conectado");

    //emitir mensaje al cliente
    client.emit('enviarMensaje', {
        nombre: "Administrador",
        mensaje: "Bienvenido al sistema"
    });

    //escuchar cuando un cliente se desconecta
    client.on('disconnect', () => {
        console.log("usuario salio de la aplicación!");
    });

    //escuchar al cliente
    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);


        client.broadcast.emit('enviarMensaje', mensaje);

        /*  if (mensaje.nombre) {
             callback({
                 ok: true,
                 mensaje: "todo salio bien"
             });
         } else {


             callback({
                 ok: false,
                 mensaje: "todo salio mal"
             });
         } */


    });
});