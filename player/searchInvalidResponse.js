module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Tera selection cancelle hogya !`);
    } else message.channel.send(`${client.emotes.error} - kya bhai sahi number bhej na  **1** or **${tracks.length}** ke  beech me  !`);
};