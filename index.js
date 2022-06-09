// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log("Ready")
});

client.on('message', msg => {
    if(msg.content === "!ping")
        return msg.channel.send("Pong ");
    if(msg.content === "!map")
        message.channel.send({ files: [{ attachment: 'northfort.png' }] });
});




client.login("OTg0NTcwODI2MjA2NjIxNzI3.GqSxX1.tyc-Gp6zXIulYdWlGFfo6W2e05WJM2Jcq6wn_8");
