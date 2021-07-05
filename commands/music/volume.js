module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Abe hutia insaan pahle voice channel to join karle !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Abe andha hai kya same voice channel me aana !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Koi gana nhi baj rha hai !`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Abe chomu sahi number daal !`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - Abe chomu sahi sahi 1-100 ke beech me number dena  !`);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`${client.emotes.success} - Gana ka volume **${parseInt(args[0])}%** !`);
    },
};