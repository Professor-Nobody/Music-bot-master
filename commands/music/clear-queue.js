module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Abe yaar pahle voice channel to join kr !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bhai yar dil se bura lagta hai jo voice channel me hum hain udhar aao na !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Koi gaana nahi baj raha hai abhi  !`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Bhai sunna iss list me ek hi song bacha hai add  karna hai to karle.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - List ka gana nikal dia lagta hai pasand nhi aaya !`);
    },
};