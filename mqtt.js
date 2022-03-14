const mosca = require("mosca");
const MqttServer = new mosca.Server({
	port: 1883,
});

MqttServer.on("clientConnected", function (client) {
	// Devolución de llamada cuando hay una conexión de cliente.
	console.log("client connected", client.id);
});

/*
const aedes = require("aedes")();
const MqttServer = require("net").createServer(aedes.handle);
const port = 1883;

MqttServer.listen(port, function () {
	console.log("server started and listening on port ", port);
});
*/

/**
 * Supervisar mensajes de temas MQTT
 * Cuando el cliente tiene una conexión para publicar un mensaje de tema
 **/
MqttServer.on("published", function (packet, client) {
	var topic = packet.topic;
	switch (topic) {
		case "temperature":
			// console.log('message-publish', packet.payload.toString());
			// MQTT puede reenviar mensajes de temas a otros temas
			//MqttServer.publish({ topic: 'other', payload: 'sssss' });
			break;
		case "other":
			console.log("message-123", packet.payload.toString());
			break;
	}
});

MqttServer.on("ready", function () {
	// Devolución de llamada cuando se inicia el servicio
	console.log("mqtt is running...");
});
