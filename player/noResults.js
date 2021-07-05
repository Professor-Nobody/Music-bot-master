module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - kuch nahi mila bhai ${query} naam se!`);
};