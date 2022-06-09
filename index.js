// Discord.js bot
const Discord = require('discord.js');

const client = new Discord.Client();
const slash = require('discord-slash-commands-v12');
slash(client);

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
    if (msg.content === '!Map-turul') {
    const embed1 = new Discord.MessageEmbed()
        .setTitle('Ungverija')
        .setImage('https://static.wixstatic.com/media/ef5476_4d570f16907047df8d6c7bebd2c176e9~mv2.png/v1/fill/w_850,h_844,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20City%201.png')
        .setDescription('Kiralvfalva, Gyoma, Méhkerék, Hadur Várus, Óvárus, Horka, Hévíz, Feheloval, Rozsdáskaszát, Hosvarosa, Kisbér, Tura, Hatvan')
        .setColor('BLUE');
        
    const embed2 = new Discord.MessageEmbed()
       .setTitle('Ungverija')
       .setImage('https://static.wixstatic.com/media/ef5476_b14d489b0ef24761b19ebeb375ba7dc8~mv2.png/v1/fill/w_870,h_864,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20Valley%20Fortress.png')
       .setDescription('Vaja, Rátót Var')
       .setColor('BLUE');
         
    const embed3 = new Discord.MessageEmbed()
       .setTitle('Ungverija')
       .setImage('https://static.wixstatic.com/media/ef5476_faf687624cb14fcfbb07efccf422a133~mv2.png/v1/fill/w_829,h_824,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20Village%203.png')
       .setDescription('Ruda, Sovica, Csorna, Délrétek, Tavasz, Bejárat, Kistemplom, Vaseke')   
       .setColor('BLUE');
    
    const embedPages = [embed1, embed2, embed3];
  ButtonPages.createPages(client.interaction, msg, embedPages, 60 * 100 , "green", "👉", "👈", "❌");  }
  
    
});


slash(client);
const ping = {
	name: 'ping',
	description: 'pong!'
};
client.commands.create(ping);

client.on('command', data => {
	if (data.commandName === 'ping') {
		data.reply.send('pong!');
	};
});



client.login("OTg0NTcwODI2MjA2NjIxNzI3.GqSxX1.tyc-Gp6zXIulYdWlGFfo6W2e05WJM2Jcq6wn_8");
