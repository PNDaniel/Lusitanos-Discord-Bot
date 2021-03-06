// Discord.js bot
const { Discord, Client, Intents } = require('discord.js');
const axios = require('axios').default;
const fs = require('fs')
var stringSimilarity = require('string-similarity');
require('./deploy-commands.js');
const { path, ID_channel_to_delete, ID_channel_request } = require('./config.json');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//https://lh3.googleusercontent.com/d/ID    redirect google images

const purge_messages = 1000 * 60 * 10; //10 minutes



client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'activity') {
	const [a] = await Promise.all([get_google_sheets("Alemaoo")]);
	await interaction.reply(a);
	}	//if (commandName === 'request') {
//		await interaction.reply("Command has to include a screenshot. \nConfirmation message will be send as a private message.\nUsage: ```/request= I don't like the top line, buttom is much better. 'Attached screenshot'```");
//	}
});


// private message:  msg.author.send("Your message here.")

const TWCity1 = ["marraquexe", "kiralvfalva", "gyoma", "mehkerek", "hadur varus", "ovarus", "horka", "heviz", "feheloval", "rozsdaskaszat", "hosvarosa", " kisber", "tura", "hatvan"]
const TWValleyFortress = ['vaja', 'ratot var']
const TWVillage3 = ['ruda', 'sovica', 'csorna', ' delretek', 'tavasz', 'bejarat', 'kistemplom', 'vaseke']

client.on('messageCreate', async msg => {

	if (TWCity1.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/", "")) && msg.content.includes("/")) {
		msg.delete();

		if (msg.member.roles.cache.some(role => role.name === 'Conselho')) {


		}

	}

	else if (TWValleyFortress.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/", "")) && msg.content.includes("/")) {
		msg.delete();
		if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
			msg.channel.send({
				files: ["https://static.wixstatic.com/media/ef5476_b14d489b0ef24761b19ebeb375ba7dc8~mv2.png/v1/fill/w_870,h_864,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20Valley%20Fortress.png"]
			});
	}

	else if (TWVillage3.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/", "")) && msg.content.includes("/")) {
		msg.delete();
		if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
			msg.channel.send({
				files: ["https://static.wixstatic.com/media/ef5476_faf687624cb14fcfbb07efccf422a133~mv2.png/v1/fill/w_829,h_824,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20Village%203.png"]
			});
	}

	else if (TWCity1.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/equal=", "")) && msg.content.includes("/equal=")) {
		msg.delete();
		if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
			msg.channel.send("Kiralvfalva\n Gyoma\n M??hker??k\n Hadur V??rus\n ??v??rus\n Horka\n H??v??z \nFeheloval\n Rozsd??skasz??t\n Hosvarosa\n Kisb??r\n Tura\n Hatvan")
	}

	else if (TWValleyFortress.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/equal=", "")) && msg.content.includes("/equal=")) {
		msg.delete();
		if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
			msg.channel.send("Vaja \n Rat??t Var")
	}

	else if (TWVillage3.includes(msg.content.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("/equal=", "")) && msg.content.includes("/equal=")) {
		msg.delete();
		if (msg.member.roles.cache.some(role => role.name === 'Conselho'))
			msg.channel.send("Ruda\nSovica\nCsorna\nD??lr??tek\nTavasz\nBej??rat\nKistemplom\nVaseke")
	}
	else if (msg.content.includes("/player=")) {
		msg.delete();
		const [a] = await Promise.all([get_google_sheets(msg.content.replace("/player=", ""))]);
		msg.channel.send(a)
	}

	else if (msg.content.includes("/request=")) {
		client.channels.cache.get(ID_channel_request).send(msg.author.username + " :\n\n\n" + msg.content.replace("/request=", ""));
		msg.attachments.forEach(attachment => {
			const ImageLink = attachment.proxyURL;
			msg.delete();
			msg.author.send("Update has been requested!")
			msg.author.send({
				files: [ImageLink]
			})
			client.channels.cache.get(ID_channel_request).send({
				files: [ImageLink]
			});
		});
	}



	else if (msg.content.includes("/unit=") || msg.content.includes("/unit =") || msg.content.includes("/unit = ")) {
		try {
		var unit = msg.content.toLowerCase().replace("/unit = ", "").replace("/unit=", "_").replace("/unit = ", "_").replace(" ", "_").replace("/unit=", "")
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
            delete_all_expect_pin()
            //msg.delete();

            var type = 0
            if(files.includes(matches['bestMatch']['target']+"_doc.png") && files.includes(matches['bestMatch']['target']+"_vet.png") && files.includes(matches['bestMatch']['target']+"_img.png"))
            type=2
            else if(!files.includes(matches['bestMatch']['target']+"_doc.png") && files.includes(matches['bestMatch']['target']+"_vet.png") && files.includes(matches['bestMatch']['target']+"_img.png"))
            type=1

            if(type==0){
                msg.channel.send(`N??o existe dados suficientes para esta unidade<t:${Math.floor(Date.now()/1000)+ purge_messages/1000}:R>`)
            }
            if(type>0)	{	
            var data = await get_unit_linkV3(matches['bestMatch']['target'],type);		
            msg.channel.send(`Mensagem ser?? apagada em:  <t:${Math.floor(Date.now()/1000)+ purge_messages/1000}:R>`)
            const Embed = new Discord.MessageEmbed()
                            .setColor('#0099ff')
                            .setTitle('Guide for '+"**" + matches['bestMatch']['target'].charAt(0).toUpperCase() + matches['bestMatch']['target'].slice(1).replace("_", " ") + "**")
                            .setDescription('Unit guide text can be implemented here!')
                            .setThumbnail(data[0])
                            .setImage(data[1])
            msg.channel.send(Embed);
            }
            if(type>1)	{			
            const Embed1 = new Discord.MessageEmbed().setColor('#0099ff').setImage(data[2])
            msg.channel.send(Embed1);
            }



                } catch (err) {
                    console.error(err)
                }
		} catch (err) {
			console.error(err)
		}
	}
	else{
		//purge everything, only commands are allowed
		delete_all_expect_pin()
	}




	async function delete_all_expect_pin() {

		const allMessages = await client.channels.cache.get(ID_channel_to_delete).messages.fetch()
		const deletable = allMessages.filter(message => !message.pinned)
		const deletable_bot = deletable.filter(message => !message.author.bot)
		await client.channels.cache.get(ID_channel_to_delete).bulkDelete(deletable_bot, true)

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


    async function get_units(){

		var names=[]

		const [get_ids] = await Promise.all([
			axios.get(`https://opensheet.elk.sh/1oRAmZe-Msrw2sfE--hWHQEa-w9lPAo8933jFvaTXFLs/Folha3`),
		  ]);

		  get_ids.data.forEach(element => {
			names.push(element['Image Name'])
		});

		return names;
	}

async function get_unit_linkV3(name,type){
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

if(type==2){
const  [link_img, link_vet, link_doc] =  await Promise.all([
    axios.get(`https://drive.google.com/uc?id=${id_img}`),
    axios.get(`https://drive.google.com/uc?id=${id_vet}`),
	axios.get(`https://drive.google.com/uc?id=${id_doc}`)
	
  ])

  return [link_img.request.res.req._redirectable._currentUrl,link_vet.request.res.req._redirectable._currentUrl,link_doc.request.res.req._redirectable._currentUrl]

}else{
	const  [link_img, link_vet] =  await Promise.all([
		axios.get(`https://drive.google.com/uc?id=${id_img}`),
		axios.get(`https://drive.google.com/uc?id=${id_vet}`)
	  ])
	  return [link_img.request.res.req._redirectable._currentUrl,link_vet.request.res.req._redirectable._currentUrl]

}


}


});

async function get_google_sheets(nome) {
	return new Promise((resolve) => {
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
							var presenca = (string.match(/???/g) || []).length;
							var falta = (string.match(/x/g) || []).length;
							resolve("Presen??as para :" + nome + "\nPresente: " + presenca + "\nFalta: " + falta + "\nTentative: " + tentative)
						}





				});

			});
	})
}





client.login(process.env.TOKEN);