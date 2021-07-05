module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Abe pahle voice channel join to kar !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Abe andha hai kya same voice channel me aana !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Koi gana nhi baj rha hai abhi !`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} - Abhi jo gana  baj rha tha usee hata dia hai !`);
    },
};