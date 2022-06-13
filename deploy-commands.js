const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId } = require('./config.json');

const commands = [
	//new SlashCommandBuilder().setName('unit').setDescription('Guide for specific unit with veterancy and doctrines        Usage:/unit=iron reapers'),
	new SlashCommandBuilder().setName('request').setDescription('Request to change the veterancy or doctrines of a unit.    Screenshot much be included.'),
	new SlashCommandBuilder().setName('activity').setDescription('Get your presence in TW'),
	new SlashCommandBuilder()
	.setName('gif')
	.setDescription('Sends a random gif!')
	.addStringOption(option =>
		option.setName('category')
			.setDescription('The gif category')
			.setRequired(true)
			.addChoices(
				{ name: 'Funny', value: 'gif_funny' },
				{ name: 'Meme', value: 'gif_meme' },
				{ name: 'Movie', value: 'gif_movie' },
			))

]
	.map(command => command.toJSON());
 
const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);