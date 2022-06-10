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

const TWCity1 = ["kiralvfalva", "gyoma", "mehkerek", "hadur varus", "ovarus", "horka", "heviz", "feheloval", "rozsdaskaszat", "hosvarosa"," kisber", "tura", "hatvan"]
const TWValleyFortress = ['vaja, ratot var']
const TWVillage3 = ['ruda', 'sovica', 'csorna',' delretek', 'tavasz', 'bejarat', 'kistemplom', 'vaseke']

client.on('message', msg => {

	if(TWCity1.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/", "")) && msg.content.includes("/")){{
	   msg.delete();
	   msg.channel.send({files: ["https://static.wixstatic.com/media/ef5476_4d570f16907047df8d6c7bebd2c176e9~mv2.png/v1/fill/w_850,h_844,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20City%201.png"]});
	}
   	
	if(TWValleyFortress.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/", "")) && msg.content.includes("/")){
	   msg.delete();
	   msg.channel.send({files: ["https://static.wixstatic.com/media/ef5476_b14d489b0ef24761b19ebeb375ba7dc8~mv2.png/v1/fill/w_870,h_864,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20Valley%20Fortress.png"]});
	}

	if(TWVillage3.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/", "")) && msg.content.includes("/")){
	   msg.delete();
	   msg.channel.send({files: ["https://static.wixstatic.com/media/ef5476_faf687624cb14fcfbb07efccf422a133~mv2.png/v1/fill/w_829,h_824,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20Village%203.png"]});
	}

	if(TWVillage3.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/equal_", "")) && msg.content.includes("/equal_")){
	   msg.delete();
	   msg.channel.send("Kiralvfalva", "Gyoma","Méhkerék","Hadur Várus", "Óvárus", "Horka", "Hévíz", "Feheloval", "Rozsdáskaszát", "Hosvarosa", "Kisbér", "Tura", "Hatvan")

	}


    }


});
  

client.login(process.env.TOKEN);