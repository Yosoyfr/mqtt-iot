const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://127.0.0.1:1883"); // Conéctese al servidor mqtt
// Escriba un temporizador para enviar información meteorológica regularmente cada 3 segundos, este servicio puede reemplazarse con sus necesidades reales
setInterval(function () {
	const value = Math.ceil(Math.random() * 40);
	client.publish("temperature", value.toString(), { qos: 0, retain: true });
}, 3000);
