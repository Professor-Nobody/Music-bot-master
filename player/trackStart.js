module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Abhi ${track.title} song ${message.member.voice.channel.name} me chal rha hai...`);
};