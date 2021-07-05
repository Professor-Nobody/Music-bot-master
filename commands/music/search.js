module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - voice channel me aana hutiya !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Abe andha hai kya same voice channel me aana !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Ajeeb chomu hai sahi se naam daal song ka!`);

        client.player.play(message, args.join(" "));
    },
};