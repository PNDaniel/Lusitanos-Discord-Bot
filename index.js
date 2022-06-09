// Discord.js bot
const Discord = require('discord.js');

const { MessageActionRow, MessageButton } = require('discord.js');
const client = new Discord.Client();
const disbut = require('discord-buttons');
disbut(client);

client.on('ready', () => {
console.log("Ready")
});

client.on('message', msg => {
    if(msg.content === "!ping")
        return msg.channel.send("Pong ");
    if(msg.content === "!map")
        

        msg.channel.send("North Fort", {files: ["https://static.wixstatic.com/media/ef5476_e993053f63aa4a7dbd0cc11be2f455bf~mv2.png/v1/fill/w_870,h_863,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/TW%20North%20Fort.png"]});

});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
	}
});




client.login("OTg0NTcwODI2MjA2NjIxNzI3.GqSxX1.tyc-Gp6zXIulYdWlGFfo6W2e05WJM2Jcq6wn_8");
