  
   //   if (msg.content === '!Map-turul') {
    //        msg.channel.send("Kiralvfalva, Gyoma, Méhkerék, Hadur Várus, Óvárus, Horka, Hévíz, Feheloval, Rozsdáskaszát, Hosvarosa, Kisbér, Tura, Hatvan", {files: ["https://static.wixstatic.com/media/ef5476_4d570f16907047df8d6c7bebd2c176e9~mv2.png/v1/fill/w_850,h_844,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20City%201.png"]});
     //       msg.channel.send("Vaja, Rátót Var", {files: ["https://static.wixstatic.com/media/ef5476_b14d489b0ef24761b19ebeb375ba7dc8~mv2.png/v1/fill/w_870,h_864,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20Valley%20Fortress.png"]});
      //      msg.channel.send("Ruda, Sovica, Csorna, Délrétek, Tavasz, Bejárat, Kistemplom, Vaseke", {files: ["https://static.wixstatic.com/media/ef5476_faf687624cb14fcfbb07efccf422a133~mv2.png/v1/fill/w_829,h_824,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20Village%203.png"]});

   
/*
    if(msg.content === "!maps"){
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
  ButtonPages.createPages(client.interaction, msg, embedPages, 60 * 100 , "green", "👉", "👈");  
    }

*/


//Discord Client
const { Client, Intents, MessageActionRow, MessageButton } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

const fs = require('fs-extra')

const functions = fs.readdirSync("./functions").filter(file => file.endsWith(".js"));
const eventsFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
const commandsFolder = fs.readdirSync("./commands");

client.commands = new Collection();

(async () =>{
	for(file of functions){
		require(`./function/${file}`)(client);
	}
	client.handleEvents(eventFiles, "./events")
	client.handleCommands(commandsFolder, "./commands")

















client.login(process.env.TOKEN);
})();



