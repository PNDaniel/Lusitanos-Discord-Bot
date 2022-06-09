// Discord.js bot
const Discord = require('discord.js');

const client = new Discord.Client();

client.interaction = {}; //Creating interaction object
const DiscordButtons = require('discord-buttons-v13'); //Requiring Discord-BUttons module.
const ButtonPages = require('discord-button-pages'); //Requiring Discord-Button-Pages module.
DiscordButtons(client);


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('clickButton', (button) => {
  ButtonPages.buttonInteractions(button, client.interaction);
});


client.on('message', msg => {
    if(msg.content === "!ping")
        return msg.channel.send("Pong ");
    if(msg.content === "!map")
       return msg.channel.send("North Fort", {files: ["https://static.wixstatic.com/media/ef5476_e993053f63aa4a7dbd0cc11be2f455bf~mv2.png/v1/fill/w_870,h_863,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20North%20Fort.png"]});

    if (msg.content === '!test') {
    const embed1 = new Discord.MessageEmbed()
        .setTitle('Embed #1')
        .setColor('RED');
        
    const embed2 = new Discord.MessageEmbed()
        .setTitle('Embed #2')
        .setColor('YELLOW');
        
    const embed3 = new Discord.MessageEmbed()
        .setTitle('Embed #3')
        .setColor('BLUE');
    
    const embedPages = [embed1, embed2, embed3];
  ButtonPages.createPages(client.interaction, msg, embedPages, 60 * 1000, "red", "👉", "👈", "❌");  }
  
    
});




client.login("OTg0NTcwODI2MjA2NjIxNzI3.GqSxX1.tyc-Gp6zXIulYdWlGFfo6W2e05WJM2Jcq6wn_8");
