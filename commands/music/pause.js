module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Abe yaar bhai pahle voice channel to join kr !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Sunn be chomu pahle voice channel join kar fir aadesh dena  !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - abhi koi gana nahi baj rha hai !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Abe andha hai kya pahle se pause hai ye gana !`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} paused !`);
    },
};