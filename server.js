const discord = require("discord.js")
const client = new discord.Client()

client.on("ready", () => {
console.log("I am ready.");
});

client.on("message", message=>
{
if(message.content === "!ping"){
return message.channel.send("Pong " + client.ws.ping);}
});

client.login("OTg0NTcwODI2MjA2NjIxNzI3.GURzJn.9wvPVFbtq5eERiRLcxaNB89nEO6tY19LbR1jyc")