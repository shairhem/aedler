const { SlashCommandBuilder } = require('discord.js');
const { afks } = require('../models/afk.model');
const formatDistance = require('date-fns/formatDistance')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('back')
		.setDescription('List the user that are AFK'),
	async execute(interaction) {
        const username = interaction.user.username;
        const user = await afks.findOne({ where: { name: username } });
        if (user) {
            const message = `${username} is back. They were AFK for ${formatDistance(Date.now(), user.time_sent)}`;
            await interaction.reply(message);
            await user.destroy();
            return;
        }

		await interaction.reply('User is not AFK');
	},
};