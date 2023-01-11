const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events  } = require('discord.js');
const { afks }  = require('../models/afk.model');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('afk')
		.setDescription('User will afk')
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The reason for afk')),
	async execute(interaction, client) {
        const reason = interaction.options.getString('reason');
        const username = interaction.user.username;
        let message = `${username} afk'ed.`;
        if (reason) {
            message += ` Reason: ${reason}`
        }

        await afks.destroy({ where: { name: username } })

        await afks.create({
            name: username,
            time_sent: Date.now()
        });

		await interaction.reply({ content: message, components: [row] });
	},
};