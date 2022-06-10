  
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

//Importing Rest & api-types
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')

//Loading Config
const config = require('./config.json')
console.log('Config Loaded')
var owners = config.owners

//Ready Event
client.on('ready', async () => {
	console.log(`${client.user.tag} is Ready!`)

	client.user.setPresence({
		status: "online",
		activities: [{
			name: config.status,
			type: "LISTENING",
		}]
	})
	
	//Registering Slash
	if (config.enable_slash) {
		const rest = new REST({ version: '9' }).setToken(process.env.TOKEN)

		const commands = [{
			name: 'create',
			description: 'Replies with Help Embed!'
		}]
		
		try {
			console.log('Started refreshing application (/) commands.')
			
			await rest.put(
				Routes.applicationCommands(client.user.id),
				{ body: commands },
			);

			console.log('Successfully reloaded application (/) commands.')
		}
		catch (error) {
			console.error(error)
		}
	}
})


client.on("interactionCreate", async (interaction) => {
	var SupportEmbed = 
	{
		author: { name: config.embed_content.title, icon_url: client.user.displayAvatarURL({ size: 2048, dynamic: false, format:"png"}) },
		timestamp: new Date(),
		color: `0x${config.embed_content.color}`,
		thumbnail: { url: config.thumbnail ? config.thumbnail_url : client.user.displayAvatarURL({ size: 2048, format: "png", dynamic: false}) },
		description: `\u200b\n1️⃣ ${config.embed_content.question_1}\n\u200b\n2️⃣ ${config.embed_content.question_2}\n\u200b\n3️⃣ ${config.embed_content.question_3}\n\u200b\n4️⃣ ${config.embed_content.question_4}\n\u200b\n5️⃣ ${config.embed_content.question_5}\n\u200b\n> **None Of The Above**\nIf Your Question is not in the Above List.(Further Assistance)\n\u200b\n`,
		footer:{
			text: interaction.guild.name
		}
	}
	let button1 = new MessageButton()
		.setStyle("SECONDARY")
		.setEmoji("1️⃣")
		.setCustomId("button_one")

	let button2 = new MessageButton()
		.setEmoji("2️⃣")
		.setStyle("SECONDARY")
		.setCustomId("button_two")
		
	let button3 = new MessageButton()
		.setEmoji("3️⃣")
		.setStyle("SECONDARY")
		.setCustomId("button_three")
	
	let button4 = new MessageButton()
		.setEmoji("4️⃣")
		.setStyle("SECONDARY")
		.setCustomId("button_four")

	//If You Don't Need 5th Button Remove The 4 Lines Below and Remove Line 67 
	let button5 = new MessageButton()
		.setEmoji("5️⃣")
		.setStyle("SECONDARY")
		.setCustomId("button_five")

	let button6 = new MessageButton()
		.setLabel("None Of The Above")
		.setStyle("SUCCESS")
		//.setEmoji("🤷🏻‍♂️")
		.setCustomId("none_of_the_above")
	
	let buttonRow1 = new MessageActionRow()
		.addComponents([button1, button2, button3, button4, button5])
	
	let buttonRow2 = new MessageActionRow()
		.addComponents([button6])
	
	if (interaction.isCommand()) {
		if (!owners.includes(interaction.user.id)) {
			await interaction.reply({ content: "You aren\'t Authorized To use This Command!", ephemeral: true })
		}

		await interaction.reply({ embeds: [SupportEmbed], components: [buttonRow1, buttonRow2] })
	}
	else if (interaction.isButton()) {
		let responseembed = 
		{
			author:{ name: config.title, icon_url: config.thumbnail ? config.thumbnail_url : client.user.displayAvatarURL({ size: 2048, format: "png", dynamic: false}) },
			color: `0x${config.embed_content.color}`,
			description: null,
			timestamp: new Date(),
			footer:{
				text: interaction.guild.name
			}
		}
		const logchannel = interaction.guild.channels.cache.get(config.log_channel_id)
		if (interaction.customId === "button_one") {
			responseembed.description = `\u200b\n**${config.responses.response_1}**\n\u200b\n`
			logchannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.customId}\nTimeStamp: ${new Date()}`)
			// let invitecutie = new MessageButton()
			//     .setLabel("Invite Link")
			//     .setStyle("url")
			//     .setURL("Link")
			// let buttonRow = new MessageActionRow()
			// 	.addComponent(invitecutie)
			//!If You Want Button in the Response remove // from the the Above 6 lines
			return interaction.reply({ embeds: [responseembed], ephemeral: true })//If you want to send link button add ,component: buttonRow after the ephermeral: true declaration
		}
		if (interaction.customId === "button_two") {
			responseembed.description = `**${config.responses.response_2}**\n\u200b\n`
			logchannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.customId}\nTimeStamp: ${new Date()}`)
			return interaction.reply({ embeds: [responseembed], ephemeral: true })
		}
		if (interaction.customId === "button_three") {
			responseembed.description = `**${config.responses.response_3}**`
			logchannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.customId}\nTimeStamp: ${new Date()}`)
			return interaction.reply({ embeds: [responseembed], ephemeral: true })
		}
		if (interaction.customId === "button_four") {
			responseembed.description = `**${config.responses.response_4}**`
			logchannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.customId}\nTimeStamp: ${new Date()}`)
			return interaction.reply({ embeds: [responseembed], ephemeral: true })
		}
		if (interaction.customId === "button_five") {
			responseembed.description = `**${config.responses.response_5}**`
			logchannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.customId}\nTimeStamp: ${new Date()}`)
			return interaction.reply({ embeds: [responseembed], ephemeral: true })
		}
		if (interaction.customId === "none_of_the_above") {
			responseembed.description = `**Go to <#${config.assistance_channel_id}> Channel and ask Your Questions.**`
			interaction.guild.members.cache.get(interaction.user.id).roles.add(config.assistance_role_id)
			interaction.guild.channels.cache.get(config.assistance_channel_id).send(`<@${interaction.user.id}> Here you can Ask your Further Questions.`)
			logchannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.customId}\nTimeStamp: ${new Date()}`)
			return interaction.reply({ embeds: [responseembed], ephemeral: true })
		}
	}
})

//Message Event only Listen to owners so make sure to fill the owner array in config
client.on("messageCreate", async (msg) => {
	if (msg.author.bot) return
	if (msg.channel.type === "dm") return
	if (!owners.includes(msg.author.id)) return
	if (msg.content !== `${config.prefix}create`) return
	if (msg.content = `${config.prefix}create`) {
		await msg.delete().catch(() => {})
		let button1 = new MessageButton()
			.setStyle("SECONDARY")
			.setEmoji("1️⃣")
			.setCustomId("button_one")

		let button2 = new MessageButton()
			.setEmoji("2️⃣")
			.setStyle("SECONDARY")
			.setCustomId("button_two")
			
		let button3 = new MessageButton()
			.setEmoji("3️⃣")
			.setStyle("SECONDARY")
			.setCustomId("button_three")
		
		let button4 = new MessageButton()
			.setEmoji("4️⃣")
			.setStyle("SECONDARY")
			.setCustomId("button_four")

		//If You Don't Need 5th Button Remove The 4 Lines Below and Remove Line 67 
		let button5 = new MessageButton()
			.setEmoji("5️⃣")
			.setStyle("SECONDARY")
			.setCustomId("button_five")

		let button6 = new MessageButton()
			.setLabel("None Of The Above")
			.setStyle("SUCCESS")
			//.setEmoji("🤷🏻‍♂️")
			.setCustomId("none_of_the_above")
		
		let buttonRow1 = new MessageActionRow()
			.addComponents([button1, button2, button3, button4, button5])
		
		let buttonRow2 = new MessageActionRow()
			.addComponents([button6])
		
		const supportembed = {
			author: { name: config.embed_content.title, icon_url: client.user.displayAvatarURL({ size: 2048, dynamic: false, format:"png"}) },
			timestamp: new Date(),
			color: `0x${config.embed_content.color}`,
			thumbnail: { url: config.thumbnail ? config.thumbnail_url : client.user.displayAvatarURL({ size: 2048, format: "png", dynamic: false}) },
			description: `\u200b\n1️⃣ ${config.embed_content.question_1}\n\u200b\n2️⃣ ${config.embed_content.question_2}\n\u200b\n3️⃣ ${config.embed_content.question_3}\n\u200b\n4️⃣ ${config.embed_content.question_4}\n\u200b\n5️⃣ ${config.embed_content.question_5}\n\u200b\n> **None Of The Above**\nIf Your Question is not in the Above List.(Further Assistance)\n\u200b\n`,
			footer:{
				text: msg.guild.name
			}
		}
		return msg.channel.send({ embeds: [supportembed], components: [buttonRow1, buttonRow2] })
	} else return
})

//Bot Coded By Abdul#5464
//For Support Join Support Server https://discord.gg/sAMznQK2NG
//For Feature Request Open a Pull Request

client.login(process.env.TOKEN);