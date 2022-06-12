const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('unit').setDescription('Guide for specific unit with veterancy and doctrines\nUso:/unit=iron reapers'),
	new SlashCommandBuilder().setName('request').setDescription('Request to change the veterancy or doctrines of a unit. Screenshot much be included.'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());
 
const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);