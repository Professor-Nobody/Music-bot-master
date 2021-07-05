module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Abe ajeeb aadmi hai pahle voice channel to join karle !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Abe andha hai kya same voice channel me aana !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Abhi koi gana nhi baj rha hai !`);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send(`${client.emotes.success} - Gana rok dia gya hai bhai !`);
    },
};