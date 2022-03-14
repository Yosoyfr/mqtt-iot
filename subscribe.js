const mqtt = require("mqtt");
// const mqtt = require('./node_modules/mqtt/dist/mqtt.min.js')
const client = mqtt.connect("mqtt://127.0.0.1:1883"); // Especifique la dirección y el puerto del servidor

client.on("connect", function () {
	console.log("La conexión al servidor es exitosa");
	// connected = client.connected
	client.subscribe("temperature", { qos: 1 }); // Suscríbete a noticias con prueba de tema
});
client.on("message", function (top, message) {
	console.log("Tema actual:", top);
	console.log("Temperatura actual:", message.toString());
});
