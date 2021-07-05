module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} Tere playlist add kardia hai bheedu (**${playlist.tracks.length}** songs) !`);
};