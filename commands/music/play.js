module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - ajeeb ghonchu hai pahle voice channel join kar !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Same channel me aake command dena chomu !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Ajeeb chomu hai gana ka naam to bata sahi se !`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};