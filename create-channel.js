const { ChannelType } = require('discord.js');

module.exports.createChannel = async (client) => {
    const guild = await client.guilds.fetch(process.env.GUILD_ID);
    const category = client.channels.cache.find(c => c.name == 'Text Channels' && c.type == ChannelType.GuildCategory);

    if (!client.channels.cache.find(c => c.name == 'sign-in')) {
        const channel = await guild.channels.create({ 
            name: 'sign-in',
            type: ChannelType.GuildText
        });

        channel.setParent(category.id)
    }

    if (!client.channels.cache.find(c => c.name == 'general')) {
        const channel = await guild.channels.create({ 
            name: 'general',
            type: ChannelType.GuildText,
        });

        channel.setParent(category.id)
    }    
}