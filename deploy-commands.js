const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId } = require('./config.json');
const fs = require('fs')

var files = fs.readdirSync(path)
var files_that_exist = {};

for (const file of files) {
	files_that_exist.push(file.replace("_vet.png", "").replace("_img.png", "").replace("_doc.png", ""))
	dict.push({
		key:   file.replace("vet.png", "").replace("img.png", "").replace("doc.png", "").replace("_",""),
		value: file.replace("vet.png", "").replace("img.png", "").replace("doc.png", "").replace("_","")
	});
}


const commands = [
	//new SlashCommandBuilder().setName('unit').setDescription('Guide for specific unit with veterancy and doctrines        Usage:/unit=iron reapers'),
	new SlashCommandBuilder().setName('request').setDescription('Request to change the veterancy or doctrines of a unit.    Screenshot much be included.'),
	new SlashCommandBuilder().setName('activity').setDescription('Get your presence in TW'),
	new SlashCommandBuilder()
	.setName('unit')
	.setDescription('Guide for specific unit with veterancy and doctrines        Usage:/unit iron reapers')
	.addStringOption(option =>
		option.setName('unit')
			.setDescription('The name of the unit')
			.setRequired(true)
			.addChoices(files_that_exist))

]
	.map(command => command.toJSON());
 
const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);