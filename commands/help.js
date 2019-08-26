const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');

exports.run = (client, message, args) => {
    let help = new RichEmbed()
    .setThumbnail('https://cdn.discordapp.com/avatars/611217621571862539/3027c549787f29785f71f53c4149e8f0.jpeg')
    .setTitle(`Command prefix:   \`\`${prefix}\`\`` )
    .setColor(0XFFFFFF)
    .addField('Help', 'Displays help', true)
    .addField('Help_util', 'help for tools & utilities', true)
    .addField('Serverinfo', "Server Information", true)
    .addField('Avatar', 'User\'s Avatar', true)
    .addField('8ball', 'Yes/No question', true)
    .addField('Coin', 'Heads or Tails?', true)
    .addField('Ping', 'Reports Latency', true)
    .addField('Rate', 'Rates you out of 10', true)
    .addField('Feedback', 'Tell us a suggestion!', true)
    .addField('Credits', 'Maker(s) of this AI', true);
    message.channel.send(help);

};

exports.help = {
    name: 'help'
};