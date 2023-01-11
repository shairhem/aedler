const { SlashCommandBuilder } = require('discord.js');
const { afks } = require('../models/afk.model');
const formatDistance = require('date-fns/formatDistance')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('List the user that are AFK'),
	async execute(interaction) {
		const dateNow = Date.now();
        const result = await afks.findAll();
        const users = result.map(a => `${a.name} - ${formatDistance(dateNow, a.time_sent)}`).join(', ') || 'No AFK users.';
		await interaction.reply(users);
	},
};