// Discord.js bot
const Discord = require('discord.js');
const axios = require('axios').default;
const fs = require('fs')
var stringSimilarity = require('string-similarity');
const schedule = require("node-schedule");

const client = new Discord.Client();

client.interaction = {}; //Creating interaction object
const DiscordButtons = require('discord-buttons-v13'); //Requiring Discord-BUttons module.
const ButtonPages = require('discord-button-pages'); //Requiring Discord-Button-Pages module.
DiscordButtons(client);
const path = './images'


client.on('ready' ,() => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('clickButton', (button) => {
  ButtonPages.buttonInteractions(button, client.interaction);
});
// private message:  msg.author.send("Your message here.")

const TWCity1 = ["marraquexe","kiralvfalva", "gyoma", "mehkerek", "hadur varus", "ovarus", "horka", "heviz", "feheloval", "rozsdaskaszat", "hosvarosa"," kisber", "tura", "hatvan"]
const TWValleyFortress = ['vaja', 'ratot var']
const TWVillage3 = ['ruda', 'sovica', 'csorna',' delretek', 'tavasz', 'bejarat', 'kistemplom', 'vaseke']

client.on('message', async msg => {

	if(TWCity1.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/", "")) && msg.content.includes("/")){
	   msg.delete();
	   if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
	   msg.channel.send({files: ["https://static.wixstatic.com/media/ef5476_4d570f16907047df8d6c7bebd2c176e9~mv2.png/v1/fill/w_850,h_844,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20City%201.png"]});
	}
   	
	if(TWValleyFortress.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/", "")) && msg.content.includes("/")){
	   msg.delete();
	   if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
	   msg.channel.send({files: ["https://static.wixstatic.com/media/ef5476_b14d489b0ef24761b19ebeb375ba7dc8~mv2.png/v1/fill/w_870,h_864,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20Valley%20Fortress.png"]});
	}

	if(TWVillage3.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/", "")) && msg.content.includes("/")){
	   msg.delete();
	   if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
	   msg.channel.send({files: ["https://static.wixstatic.com/media/ef5476_faf687624cb14fcfbb07efccf422a133~mv2.png/v1/fill/w_829,h_824,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20Village%203.png"]});
	}

	if(TWCity1.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/equal=", "")) && msg.content.includes("/equal=")){
	   msg.delete();
	   if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
	   msg.channel.send("Kiralvfalva\n Gyoma\n Méhkerék\n Hadur Várus\n Óvárus\n Horka\n Hévíz \nFeheloval\n Rozsdáskaszát\n Hosvarosa\n Kisbér\n Tura\n Hatvan")
	}

	if(TWValleyFortress.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/equal=", "")) && msg.content.includes("/equal=")){
		msg.delete();
		if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
		msg.channel.send("Vaja \n Ratót Var")
	 }

	 if(TWVillage3.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/equal=", "")) && msg.content.includes("/equal=")){
		msg.delete();
		if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
		msg.channel.send("Ruda\nSovica\nCsorna\nDélrétek\nTavasz\nBejárat\nKistemplom\nVaseke") 
	 }
	 if(msg.content.includes("/player=")) {
		msg.delete();
		const [a] = await Promise.all([get_google_sheets(msg.content.replace("/player=", ""))]);
		msg.channel.send(a) 
	 }

	 if(msg.content.includes("/request=")){
		msg.attachments.forEach(attachment => {
			const ImageLink = attachment.proxyURL;
			msg.delete();
			msg.author.send("Update has been requested!")
			msg.author.send({files: [ImageLink]})
			client.channels.cache.get('985278059001290753').send(msg.author.username + " :\n\n\n" +msg.content.replace("/request=",""));
			client.channels.cache.get('985278059001290753').send({files: [ImageLink]});
		});
	 }



	 if(msg.content.includes("/tropa=") || msg.content.includes("/tropas=")){
		var unit = msg.content.toLowerCase().replace("/tropa=","").replace(" ","_").replace("/tropas=","")
		var files = fs.readdirSync(path)
		var files_that_exist= [];

		for (const file of files) {
			files_that_exist.push(file.replace("_vet.png","").replace("_img.png","").replace("_doc.png",""))
			
		  }
		while(unit.charAt(0) === '_')
			{
				unit = unit.substring(1);
			}
			var matches = stringSimilarity.findBestMatch(unit, files_that_exist);
		  try {
			if (fs.existsSync(`${path}/${matches['bestMatch']['target']}_img.png`) && fs.existsSync(`${path}/${matches['bestMatch']['target']}_vet.png`) ) {
			delete_all_expect_pin()
			if(fs.existsSync(`${path}/${matches['bestMatch']['target']}_doc.png`)){	
				msg.delete();
				msg.channel.send(matches['bestMatch']['target'].charAt(0).toUpperCase() + matches['bestMatch']['target'].slice(1).replace("_"," "));
				msg.channel.send({files: [`${path}/${matches['bestMatch']['target']}_img.png`,`${path}/${matches['bestMatch']['target']}_vet.png`,`${path}/${matches['bestMatch']['target']}_doc.png`]});
			}else{
				msg.delete();
				msg.channel.send(matches['bestMatch']['target'].charAt(0).toUpperCase() + matches['bestMatch']['target'].slice(1).replace("_"," "));
				msg.channel.send({files: [`${path}/${matches['bestMatch']['target']}_img.png`,`${path}/${matches['bestMatch']['target']}_vet.png`]});
			}
			}else{
				msg.channel.send("Não existe uma unidade com esse nome");
			}
		  } catch(err) {
			console.error(err)
		  }
	 }




function delete_all_expect_pin()
{
    setTimeout(function()
    {
		const allMessages = await msg.channel.messages.fetch()
		const deletable = allMessages.filter(message => !message.pinned)
		await msg.channel.bulkDelete(deletable, true)
    },10000);
}


});

async function get_google_sheets(nome) {
    return new Promise((resolve, reject) => {
    var currentDate = new Date();
    var timestamp = currentDate.getTime();
	axios.get("https://opensheet.elk.sh/1uUu5epwHjGf2ykQlHD4QfPhU-RS0FfYsgrFiMddXxlk/Presen%C3%A7as%20S%20XII?" + timestamp)
	.then((response)=>{
		//resolve(JSON.stringify(response.data))
		response.data.forEach(element => {
			
            if(element['Nation']!='undefined' && element['Nation']!="")
            if(element[" "].toLowerCase()==nome.toLowerCase()){
            delete element['Nation'];
            delete element['undefined'];
            delete element['Current House'];
            delete element[''];
            delete element[' '];
            var string = JSON.stringify(element, null, 2)
            var tentative = (string.match(/\?/g) || []).length;
            var presenca = (string.match(/✓/g) || []).length;
            var falta = (string.match(/x/g) || []).length;
            resolve("Presenças para :"+nome+"\nPresente: "+presenca+"\nFalta: "+falta+"\nTentative: " + tentative)
            }


        
        
        
        });
		
	});
})
}

client.login(process.env.TOKEN);


