// Discord.js bot
const Discord = require('discord.js');
const axios = require('axios').default;
const fs = require('fs')
var stringSimilarity = require('string-similarity');
const schedule = require("node-schedule");
const { MessageEmbed } = require('discord.js');


const client = new Discord.Client();
//https://lh3.googleusercontent.com/d/ID    redirect google images
client.interaction = {}; //Creating interaction object
const DiscordButtons = require('discord-buttons-v13'); //Requiring Discord-BUttons module.
const ButtonPages = require('discord-button-pages'); //Requiring Discord-Button-Pages module.
const { maxHeaderSize } = require('http');
DiscordButtons(client);
const path = './images'
const purge_messages = 1000 * 60 * 10; //10 minutes
const ID_channel_to_delete = '985345694447579206';
const ID_channel_request = '985278059001290753';


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('clickButton', (button) => {
	ButtonPages.buttonInteractions(button, client.interaction);
});
// private message:  msg.author.send("Your message here.")

const TWCity1 = ["marraquexe", "kiralvfalva", "gyoma", "mehkerek", "hadur varus", "ovarus", "horka", "heviz", "feheloval", "rozsdaskaszat", "hosvarosa", " kisber", "tura", "hatvan"]
const TWValleyFortress = ['vaja', 'ratot var']
const TWVillage3 = ['ruda', 'sovica', 'csorna', ' delretek', 'tavasz', 'bejarat', 'kistemplom', 'vaseke']

client.on('message', async msg => {

	if (TWCity1.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/", "")) && msg.content.includes("/")) {
		msg.delete();

		if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
		axios.get("https://drive.google.com/uc?id=1e8j9GvtYrdf-qhNGJ-TAUi78YuPgi63A")
		.then((response) => {
			//image url : response.request.res.req._redirectable._currentUrl
			let embeded = []
			const embed = new Discord.MessageEmbed().setTitle('Veterancy').setImage(response.request.res.req._redirectable._currentUrl);
			embeded.push(embed)
			const embed1 = new Discord.MessageEmbed().setTitle('unit').setImage(response.request.res.req._redirectable._currentUrl);
			embeded.push(embed1)
			msg.channel.send(embeded)

			//msg.channel.send({
		//		files: [response.request.res.req._redirectable._currentUrl]
	//		});

		});

	}

	if (TWValleyFortress.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/", "")) && msg.content.includes("/")) {
		msg.delete();
		if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
			msg.channel.send({
				files: ["https://static.wixstatic.com/media/ef5476_b14d489b0ef24761b19ebeb375ba7dc8~mv2.png/v1/fill/w_870,h_864,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20Valley%20Fortress.png"]
			});
	}

	if (TWVillage3.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/", "")) && msg.content.includes("/")) {
		msg.delete();
		if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
			msg.channel.send({
				files: ["https://static.wixstatic.com/media/ef5476_faf687624cb14fcfbb07efccf422a133~mv2.png/v1/fill/w_829,h_824,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20Village%203.png"]
			});
	}

	if (TWCity1.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/equal=", "")) && msg.content.includes("/equal=")) {
		msg.delete();
		if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
			msg.channel.send("Kiralvfalva\n Gyoma\n Méhkerék\n Hadur Várus\n Óvárus\n Horka\n Hévíz \nFeheloval\n Rozsdáskaszát\n Hosvarosa\n Kisbér\n Tura\n Hatvan")
	}

	if (TWValleyFortress.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/equal=", "")) && msg.content.includes("/equal=")) {
		msg.delete();
		if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
			msg.channel.send("Vaja \n Ratót Var")
	}

	if (TWVillage3.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/equal=", "")) && msg.content.includes("/equal=")) {
		msg.delete();
		if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
			msg.channel.send("Ruda\nSovica\nCsorna\nDélrétek\nTavasz\nBejárat\nKistemplom\nVaseke")
	}
	if (msg.content.includes("/player=")) {
		msg.delete();
		const [a] = await Promise.all([get_google_sheets(msg.content.replace("/player=", ""))]);
		msg.channel.send(a)
	}

	if (msg.content.includes("/request=")) {
		msg.attachments.forEach(attachment => {
			const ImageLink = attachment.proxyURL;
			msg.delete();
			msg.author.send("Update has been requested!")
			msg.author.send({
				files: [ImageLink]
			})
			client.channels.cache.get(ID_channel_request).send(msg.author.username + " :\n\n\n" + msg.content.replace("/request=", ""));
			client.channels.cache.get(ID_channel_request).send({
				files: [ImageLink]
			});
		});
	}



	if (msg.content.includes("/tropa=") || msg.content.includes("/tropas=")) {
		var unit = msg.content.toLowerCase().replace("/tropa=", "").replace(" ", "_").replace("/tropas=", "")
		var files = fs.readdirSync(path)
		var files_that_exist = [];

		for (const file of files) {
			files_that_exist.push(file.replace("_vet.png", "").replace("_img.png", "").replace("_doc.png", ""))

		}
		while (unit.charAt(0) === '_') {
			unit = unit.substring(1);
		}
		var matches = stringSimilarity.findBestMatch(unit, files_that_exist);
		try {
			if (fs.existsSync(`${path}/${matches['bestMatch']['target']}_img.png`) && fs.existsSync(`${path}/${matches['bestMatch']['target']}_vet.png`)) {
				if (fs.existsSync(`${path}/${matches['bestMatch']['target']}_doc.png`)) {
					delete_all_expect_pin()
					msg.delete();
					msg.channel.send(`Mensagem será apagada em:  <t:${Math.floor(Date.now()/1000)+ purge_messages/1000}:R>`)
					//msg.channel.send("**" + matches['bestMatch']['target'].charAt(0).toUpperCase() + matches['bestMatch']['target'].slice(1).replace("_", " ") + "**");
					//msg.channel.send({
				//		files: [`${path}/${matches['bestMatch']['target']}_img.png`, `${path}/${matches['bestMatch']['target']}_vet.png`, `${path}/${matches['bestMatch']['target']}_doc.png`]
			//		});

					var data = await get_unit_linkV3(matches['bestMatch']['target']);

					

					const Embed = new Discord.MessageEmbed()
									.setColor('#0099ff')
									.setURL('https://discord.js.org/')
									.setTitle('Guide for '+"**" + matches['bestMatch']['target'].charAt(0).toUpperCase() + matches['bestMatch']['target'].slice(1).replace("_", " ") + "**")
									.setDescription('Unit guide text can be implemented here!')
									.setThumbnail(data[0])
									.setImage(data[1],data[2])
					const Embed1 = new Discord.MessageEmbed()
									.setColor('#0099ff')
									.setURL('https://discord.js.org/')
									.setDescription('Veterancy')
									.setThumbnail(data[0])
									.setImage(data[2])

					msg.channel.send(Embed);
					msg.channel.send(Embed1);

			

				} else {
					delete_all_expect_pin()
					msg.delete();
					msg.channel.send(`Mensagem será apagada às:  <t:${Math.floor(Date.now()/1000)+ purge_messages/1000}:R>`)
					msg.channel.send("**" + matches['bestMatch']['target'].charAt(0).toUpperCase() + matches['bestMatch']['target'].slice(1).replace("_", " ") + "**");
					msg.channel.send({
						files: [`${path}/${matches['bestMatch']['target']}_img.png`, `${path}/${matches['bestMatch']['target']}_vet.png`]
					});
				}
			} else {
				msg.channel.send("Não existe uma unidade com esse nome");
			}
		} catch (err) {
			console.error(err)
		}
	}




	async function delete_all_expect_pin() {

		const allMessages = await client.channels.cache.get(ID_channel_to_delete).messages.fetch()
		const deletable = allMessages.filter(message => !message.pinned)
		await client.channels.cache.get(ID_channel_to_delete).bulkDelete(deletable, true)

		setTimeout(async function() {
			const allMessages = await client.channels.cache.get(ID_channel_to_delete).messages.fetch()
			const deletable = allMessages.filter(message => !message.pinned)

			while (allMessages.filter(message => !message.pinned)) {
				const allMessages = await client.channels.cache.get(ID_channel_to_delete).messages.fetch()
				const deletable = allMessages.filter(message => !message.pinned)
				await client.channels.cache.get(ID_channel_to_delete).bulkDelete(deletable, true)
			}
		}, purge_messages);
	}


	//usage get_unit_link("iron_reapers")

async function get_unit_linkV3(name){
    var id_vet = null;
    var id_img = null;
    var id_doc = null;

  const [get_ids] = await Promise.all([
    axios.get(`https://opensheet.elk.sh/1oRAmZe-Msrw2sfE--hWHQEa-w9lPAo8933jFvaTXFLs/Folha3`),
  ]);

  get_ids.data.forEach(element => {
	if(element['Image Name'].includes(name)){
		if(element['Image Name'].includes('_img'))
		id_img = element['Image ID'];
		if(element['Image Name'].includes('_vet'))
		id_vet = element['Image ID']
		if(element['Image Name'].includes('_doc'))
		id_doc = element['Image ID']

	}
});

const  [link_img, link_vet, link_doc] =  await Promise.all([
    axios.get(`https://drive.google.com/uc?id=${id_img}`),
    axios.get(`https://drive.google.com/uc?id=${id_vet}`),
	axios.get(`https://drive.google.com/uc?id=${id_doc}`)
	
  ])

  return [link_img.request.res.req._redirectable._currentUrl,link_vet.request.res.req._redirectable._currentUrl,link_doc.request.res.req._redirectable._currentUrl]


}




});





































async function get_google_sheets(nome) {
	return new Promise((resolve, reject) => {
		var currentDate = new Date();
		var timestamp = currentDate.getTime();
		axios.get("https://opensheet.elk.sh/1uUu5epwHjGf2ykQlHD4QfPhU-RS0FfYsgrFiMddXxlk/Presen%C3%A7as%20S%20XII?" + timestamp)
			.then((response) => {
				//resolve(JSON.stringify(response.data))
				response.data.forEach(element => {

					if (element['Nation'] != 'undefined' && element['Nation'] != "")
						if (element[" "].toLowerCase() == nome.toLowerCase()) {
							delete element['Nation'];
							delete element['undefined'];
							delete element['Current House'];
							delete element[''];
							delete element[' '];
							var string = JSON.stringify(element, null, 2)
							var tentative = (string.match(/\?/g) || []).length;
							var presenca = (string.match(/✓/g) || []).length;
							var falta = (string.match(/x/g) || []).length;
							resolve("Presenças para :" + nome + "\nPresente: " + presenca + "\nFalta: " + falta + "\nTentative: " + tentative)
						}





				});

			});
	})
}

client.login(process.env.TOKEN);