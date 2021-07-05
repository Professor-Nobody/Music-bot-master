module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Kaisa chomu hai pahle voice channel join krna yaar !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Abe yaar ajeeb chomu hai same voice channel me aana bhai !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Koi gaana nhi baj rha hai guru !`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} - Repeat mode **band ho gya hai** !`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} - Repeat mode ** On hogya hai** Pura list baar baar bajega bc !`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} - Repeat mode **band hogya bhai** !`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} - Repeat mode **khul gya bc** ab yahi gana baar baar chalega !`);
            };
        };
    },
};