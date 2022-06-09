// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log("Ready")
});

client.on('message', msg => {
    if(message.content === "!ping")
        return message.channel.send("Pong ");
});

client.login("OTg0NTcwODI2MjA2NjIxNzI3.GqSxX1.tyc-Gp6zXIulYdWlGFfo6W2e05WJM2Jcq6wn_8");
