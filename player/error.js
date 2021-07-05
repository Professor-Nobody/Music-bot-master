module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Iss server pe koi music nhi bajj rha hai !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Abe  yaar pahle voice channel to join kr  !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - bhai yaar join nhi kr paarhe hain thoda permission check kar ke dekh !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} Tere country me nhi hai ye ! Skipping...`);
            break;
        case 'MusicStarting':
            message.channel.send(`gana shuru hone wala hai... aram se ruko or dubara try karo!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - kuch to gadbad hai daya ... Error : ${error}`);
    };
};
