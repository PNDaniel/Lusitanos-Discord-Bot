const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { path, clientId, guildId } = require('./config.json');
const fs = require('fs')

var files = fs.readdirSync(path)
var files_that_exist = [];

for (const file of files) {
	//files_that_exist.push(file.replace("_vet.png", "").replace("_img.png", "").replace("_doc.png", ""))
	files_that_exist.push({
		name:  file.replace("_vet.png", "").replace("_img.png", "").replace("_doc.png", "").replace("_",""),
		value: file.replace("_vet.png", "").replace("_img.png", "").replace("_doc.png", "").replace("_","")
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
			.addChoices(
				{
				   "name":"Archermilitia",
				   "value":"Archermilitia"
				},
				{
				   "name":"Archermilitia",
				   "value":"Archermilitia"
				},
				{
				   "name":"Armigers",
				   "value":"Armigers"
				},
				{
				   "name":"Armigers",
				   "value":"Armigers"
				},
				{
				   "name":"Axeraiders",
				   "value":"Axeraiders"
				},
				{
				   "name":"Axeraiders",
				   "value":"Axeraiders"
				},
				{
				   "name":"Azaps",
				   "value":"Azaps"
				},
				{
				   "name":"Azaps",
				   "value":"Azaps"
				},
				{
				   "name":"Berserkers",
				   "value":"Berserkers"
				},
				{
				   "name":"Berserkers",
				   "value":"Berserkers"
				},
				{
				   "name":"Cataphract",
				   "value":"Cataphract"
				},
				{
				   "name":"Cataphract",
				   "value":"Cataphract"
				},
				{
				   "name":"Condos",
				   "value":"Condos"
				},
				{
				   "name":"Condos",
				   "value":"Condos"
				},
				{
				   "name":"Coutiliers",
				   "value":"Coutiliers"
				},
				{
				   "name":"Coutiliers",
				   "value":"Coutiliers"
				},
				{
				   "name":"Cudgelmonks",
				   "value":"Cudgelmonks"
				},
				{
				   "name":"Cudgelmonks",
				   "value":"Cudgelmonks"
				},
				{
				   "name":"Daggeraxe_lancers",
				   "value":"Daggeraxe_lancers"
				},
				{
				   "name":"Daggeraxe_lancers",
				   "value":"Daggeraxe_lancers"
				},
				{
				   "name":"Demensearbalists",
				   "value":"Demensearbalists"
				},
				{
				   "name":"Demensearquebusiers",
				   "value":"Demensearquebusiers"
				},
				{
				   "name":"Demensearquebusiers",
				   "value":"Demensearquebusiers"
				},
				{
				   "name":"Demesnearbalists",
				   "value":"Demesnearbalists"
				},
				{
				   "name":"Demesnearcher",
				   "value":"Demesnearcher"
				},
				{
				   "name":"Demesnearchers",
				   "value":"Demesnearchers"
				},
				{
				   "name":"Demesnecrossbow",
				   "value":"Demesnecrossbow"
				},
				{
				   "name":"Demesnecrossbow",
				   "value":"Demesnecrossbow"
				},
				{
				   "name":"Demesnejavs",
				   "value":"Demesnejavs"
				},
				{
				   "name":"Demesnejavs",
				   "value":"Demesnejavs"
				},
				{
				   "name":"Demesnepikemen",
				   "value":"Demesnepikemen"
				},
				{
				   "name":"Demesnepikemen",
				   "value":"Demesnepikemen"
				},
				{
				   "name":"Demesnespearmen",
				   "value":"Demesnespearmen"
				},
				{
				   "name":"Demesnespearmen",
				   "value":"Demesnespearmen"
				},
				{
				   "name":"Falconetti",
				   "value":"Falconetti"
				},
				{
				   "name":"Falconetti",
				   "value":"Falconetti"
				},
				{
				   "name":"Firelancers",
				   "value":"Firelancers"
				},
				{
				   "name":"Firelancers",
				   "value":"Firelancers"
				},
				{
				   "name":"Fortebraccio",
				   "value":"Fortebraccio"
				},
				{
				   "name":"Fortebraccio",
				   "value":"Fortebraccio"
				},
				{
				   "name":"Fortebraccio",
				   "value":"Fortebraccio"
				},
				{
				   "name":"Greyhairgarrison",
				   "value":"Greyhairgarrison"
				},
				{
				   "name":"Greyhairgarrison",
				   "value":"Greyhairgarrison"
				},
				{
				   "name":"Halberdiers",
				   "value":"Halberdiers"
				},
				{
				   "name":"Halberdiers",
				   "value":"Halberdiers"
				},
				{
				   "name":"Halberdiersseargents",
				   "value":"Halberdiersseargents"
				},
				{
				   "name":"Halberdiersseargents",
				   "value":"Halberdiersseargents"
				},
				{
				   "name":"Halberdiers",
				   "value":"Halberdiers"
				},
				{
				   "name":"Hussars",
				   "value":"Hussars"
				},
				{
				   "name":"Hussars",
				   "value":"Hussars"
				},
				{
				   "name":"Imperialarchers",
				   "value":"Imperialarchers"
				},
				{
				   "name":"Imperialarchers",
				   "value":"Imperialarchers"
				},
				{
				   "name":"Imperialarquebusiers",
				   "value":"Imperialarquebusiers"
				},
				{
				   "name":"Imperialarquebusiers",
				   "value":"Imperialarquebusiers"
				},
				{
				   "name":"Imperialjavs",
				   "value":"Imperialjavs"
				},
				{
				   "name":"Imperialjavs",
				   "value":"Imperialjavs"
				},
				{
				   "name":"Imperialpikes",
				   "value":"Imperialpikes"
				},
				{
				   "name":"Imperialpikes",
				   "value":"Imperialpikes"
				},
				{
				   "name":"Imperialspearguards",
				   "value":"Imperialspearguards"
				},
				{
				   "name":"Imperialspearguards",
				   "value":"Imperialspearguards"
				},
				{
				   "name":"Incendiaryarcher",
				   "value":"Incendiaryarcher"
				},
				{
				   "name":"Incendiaryarcher",
				   "value":"Incendiaryarcher"
				},
				{
				   "name":"Ironreapers",
				   "value":"Ironreapers"
				},
				{
				   "name":"Ironreapers",
				   "value":"Ironreapers"
				},
				{
				   "name":"Ironcaoarquebuisers",
				   "value":"Ironcaoarquebuisers"
				},
				{
				   "name":"Ironcaoarquebuisers",
				   "value":"Ironcaoarquebuisers"
				},
				{
				   "name":"Ironcaparchers",
				   "value":"Ironcaparchers"
				},
				{
				   "name":"Ironcaparchers",
				   "value":"Ironcaparchers"
				},
				{
				   "name":"Ironcapbowriders",
				   "value":"Ironcapbowriders"
				},
				{
				   "name":"Ironcapbowriders",
				   "value":"Ironcapbowriders"
				},
				{
				   "name":"Ironcapscout_cavalry",
				   "value":"Ironcapscout_cavalry"
				},
				{
				   "name":"Ironcapscout_cavalry",
				   "value":"Ironcapscout_cavalry"
				},
				{
				   "name":"Ironcapspearman",
				   "value":"Ironcapspearman"
				},
				{
				   "name":"Ironcapspearman",
				   "value":"Ironcapspearman"
				},
				{
				   "name":"Ironcapswordsmen.png",
				   "value":"Ironcapswordsmen.png"
				},
				{
				   "name":"Ironcapswordsmen",
				   "value":"Ironcapswordsmen"
				},
				{
				   "name":"Janissary",
				   "value":"Janissary"
				},
				{
				   "name":"Janissary",
				   "value":"Janissary"
				},
				{
				   "name":"Janissary",
				   "value":"Janissary"
				},
				{
				   "name":"Javalinmilitia",
				   "value":"Javalinmilitia"
				},
				{
				   "name":"Javalinmilitia",
				   "value":"Javalinmilitia"
				},
				{
				   "name":"Javelinseargens",
				   "value":"Javelinseargens"
				},
				{
				   "name":"Javelinseargens",
				   "value":"Javelinseargens"
				},
				{
				   "name":"Kheshigs",
				   "value":"Kheshigs"
				},
				{
				   "name":"Kheshigs",
				   "value":"Kheshigs"
				},
				{
				   "name":"Khev",
				   "value":"Khev"
				},
				{
				   "name":"Khev",
				   "value":"Khev"
				},
				{
				   "name":"Khorchins",
				   "value":"Khorchins"
				},
				{
				   "name":"Khorchins",
				   "value":"Khorchins"
				},
				{
				   "name":"Kriegsfusiliers",
				   "value":"Kriegsfusiliers"
				},
				{
				   "name":"Kriegsfusiliers",
				   "value":"Kriegsfusiliers"
				},
				{
				   "name":"Landsknechts",
				   "value":"Landsknechts"
				},
				{
				   "name":"Landsknechts",
				   "value":"Landsknechts"
				},
				{
				   "name":"Levybowmen",
				   "value":"Levybowmen"
				},
				{
				   "name":"Levybowmen",
				   "value":"Levybowmen"
				},
				{
				   "name":"Liaos",
				   "value":"Liaos"
				},
				{
				   "name":"Liaos",
				   "value":"Liaos"
				},
				{
				   "name":"Menat_arms",
				   "value":"Menat_arms"
				},
				{
				   "name":"Menat_arms",
				   "value":"Menat_arms"
				},
				{
				   "name":"Modao",
				   "value":"Modao"
				},
				{
				   "name":"Modao",
				   "value":"Modao"
				},
				{
				   "name":"Monastic",
				   "value":"Monastic"
				},
				{
				   "name":"Monastic",
				   "value":"Monastic"
				},
				{
				   "name":"Namkhanarchers",
				   "value":"Namkhanarchers"
				},
				{
				   "name":"Namkhanarchers",
				   "value":"Namkhanarchers"
				},
				{
				   "name":"Outriders",
				   "value":"Outriders"
				},
				{
				   "name":"Outriders",
				   "value":"Outriders"
				},
				{
				   "name":"Outriders",
				   "value":"Outriders"
				},
				{
				   "name":"Palaceguards",
				   "value":"Palaceguards"
				},
				{
				   "name":"Palaceguards",
				   "value":"Palaceguards"
				},
				{
				   "name":"Paladins",
				   "value":"Paladins"
				},
				{
				   "name":"Paladins",
				   "value":"Paladins"
				},
				{
				   "name":"Pavise",
				   "value":"Pavise"
				},
				{
				   "name":"Pavise",
				   "value":"Pavise"
				},
				{
				   "name":"Pikemilitia",
				   "value":"Pikemilitia"
				},
				{
				   "name":"Pikemilitia",
				   "value":"Pikemilitia"
				},
				{
				   "name":"Prefecturearchers",
				   "value":"Prefecturearchers"
				},
				{
				   "name":"Prefecturearchers",
				   "value":"Prefecturearchers"
				},
				{
				   "name":"Prefecturearchers",
				   "value":"Prefecturearchers"
				},
				{
				   "name":"Prefecturecavalry",
				   "value":"Prefecturecavalry"
				},
				{
				   "name":"Prefecturecavalry",
				   "value":"Prefecturecavalry"
				},
				{
				   "name":"Prefectureguards",
				   "value":"Prefectureguards"
				},
				{
				   "name":"Prefectureguards",
				   "value":"Prefectureguards"
				},
				{
				   "name":"Prefecturepikemen",
				   "value":"Prefecturepikemen"
				},
				{
				   "name":"Prefecturepikemen",
				   "value":"Prefecturepikemen"
				},
				{
				   "name":"Rattanmarksmen",
				   "value":"Rattanmarksmen"
				},
				{
				   "name":"Rattanmarksmen",
				   "value":"Rattanmarksmen"
				},
				{
				   "name":"Rattanmarksmen",
				   "value":"Rattanmarksmen"
				},
				{
				   "name":"Rattanpikemen",
				   "value":"Rattanpikemen"
				},
				{
				   "name":"Rattanpikemen",
				   "value":"Rattanpikemen"
				},
				{
				   "name":"Rattanrangers.png",
				   "value":"Rattanrangers.png"
				},
				{
				   "name":"Rattanrangers",
				   "value":"Rattanrangers"
				},
				{
				   "name":"Rattanroundshield",
				   "value":"Rattanroundshield"
				},
				{
				   "name":"Rattanroundshield",
				   "value":"Rattanroundshield"
				},
				{
				   "name":"Rattanvipers",
				   "value":"Rattanvipers"
				},
				{
				   "name":"Rattanvipers",
				   "value":"Rattanvipers"
				},
				{
				   "name":"Selemchidcavalry",
				   "value":"Selemchidcavalry"
				},
				{
				   "name":"Selemchidcavalry",
				   "value":"Selemchidcavalry"
				},
				{
				   "name":"Serfsfull.png",
				   "value":"Serfsfull.png"
				},
				{
				   "name":"Serfs",
				   "value":"Serfs"
				},
				{
				   "name":"Shenji",
				   "value":"Shenji"
				},
				{
				   "name":"Shenji",
				   "value":"Shenji"
				},
				{
				   "name":"Shieldmaidens",
				   "value":"Shieldmaidens"
				},
				{
				   "name":"Shieldmaidens",
				   "value":"Shieldmaidens"
				},
				{
				   "name":"Sihladars",
				   "value":"Sihladars"
				},
				{
				   "name":"Sihladars",
				   "value":"Sihladars"
				},
				{
				   "name":"Sipahi",
				   "value":"Sipahi"
				},
				{
				   "name":"Sipahi",
				   "value":"Sipahi"
				},
				{
				   "name":"Siphonari.png",
				   "value":"Siphonari.png"
				},
				{
				   "name":"Siphonari",
				   "value":"Siphonari"
				},
				{
				   "name":"Sonsof_fenrir",
				   "value":"Sonsof_fenrir"
				},
				{
				   "name":"Sonsof_fenrir",
				   "value":"Sonsof_fenrir"
				},
				{
				   "name":"Spearmilitia",
				   "value":"Spearmilitia"
				},
				{
				   "name":"Spearmilitia",
				   "value":"Spearmilitia"
				},
				{
				   "name":"Spearseargents",
				   "value":"Spearseargents"
				},
				{
				   "name":"Spearseargents",
				   "value":"Spearseargents"
				},
				{
				   "name":"Squires",
				   "value":"Squires"
				},
				{
				   "name":"Squires",
				   "value":"Squires"
				},
				{
				   "name":"Stalwarts",
				   "value":"Stalwarts"
				},
				{
				   "name":"Stalwarts",
				   "value":"Stalwarts"
				},
				{
				   "name":"Swordmilitia",
				   "value":"Swordmilitia"
				},
				{
				   "name":"Swordmilitia",
				   "value":"Swordmilitia"
				},
				{
				   "name":"Tenantfarmers",
				   "value":"Tenantfarmers"
				},
				{
				   "name":"Tenantfarmers",
				   "value":"Tenantfarmers"
				},
				{
				   "name":"Tercio",
				   "value":"Tercio"
				},
				{
				   "name":"Tercio",
				   "value":"Tercio"
				},
				{
				   "name":"Tseregs",
				   "value":"Tseregs"
				},
				{
				   "name":"Tseregs",
				   "value":"Tseregs"
				},
				{
				   "name":"Vanguardarchers",
				   "value":"Vanguardarchers"
				},
				{
				   "name":"Vanguardarchers",
				   "value":"Vanguardarchers"
				},
				{
				   "name":"Vasallongbow",
				   "value":"Vasallongbow"
				},
				{
				   "name":"Vasallongbow",
				   "value":"Vasallongbow"
				},
				{
				   "name":"Villagewatchmen",
				   "value":"Villagewatchmen"
				},
				{
				   "name":"Villagewatchmen",
				   "value":"Villagewatchmen"
				},
				{
				   "name":"Woodcutters",
				   "value":"Woodcutters"
				},
				{
				   "name":"Woodcutters",
				   "value":"Woodcutters"
				},
				{
				   "name":"Yeomen",
				   "value":"Yeomen"
				},
				{
				   "name":"Yeomen",
				   "value":"Yeomen"
				},
				{
				   "name":"Zykalianmilitia",
				   "value":"Zykalianmilitia"
				},
				{
				   "name":"Zykalianmilitia",
				   "value":"Zykalianmilitia"
				}
			 ))

]
	.map(command => command.toJSON());
 
const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);