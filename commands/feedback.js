exports.run = (client, message, args) => {
    var requestor = `<@${message.author.id}>`;
    let feedback = message.content.split(/\s+/g).slice(2).join(" ");
    client.users.get('551760879289368610').send(`A feedback from **${requestor}**: \n${feedback}`);
    client.users.get('369988289354006528').send(`A feedback from **${requestor}**: \n${feedback}`);
    message.delete();
    message.channel.send("Your feedback has been received!");
    console.log(`A feedback from **${requestor}**: \n${feedback} `);
};

exports.help = {
    name: 'feedback'
};

// exports.run = (client, message, args) => {
//     let mention = message.mentions.users.first();
//     let messageProper = message.content.slice(29);
//     if(mention === null) return;
//     message.delete();
//     mention.sendMessage(messageProper);
//     message.channel.send("done!");
// };

// exports.help = {
//     name: 'send'
// };