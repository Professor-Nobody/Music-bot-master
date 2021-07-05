module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Kiun mazak karrha hai bhai pahle voice channel join karna !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Abe budbak hai kya same voice channel me aana yr !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - abhi kuch nhi baj rha hai !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Abe ayee dhang ka filter bolna lagane ko kya ulta seedha bol rha hai !`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Ye filter ghanta nhi milega haa ye sab mil sakta hai jaise (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Dekh bhidu mein filter laga raha hun music me... ek baat dhyaan rakho : jitna lamba gana hoga utta zada time lagega samjha re?.`);
        else message.channel.send(`${client.emotes.music} - mein filter hata raha hun samjha ... or sun : jitta lamba gana hoga utna lamba time lagega bheje me gaii baaat?.`);
    },
};