const { RichEmbed, client } = require('discord.js');
const { botVersion } = require('../config');


  //     let Aurora =  `<@551760879289368610>`;
  //     let Nevin = `<@369988289354006528`;
  //     let JG_Online = `@246655292664709120`;

exports.run = (client, message, args) => {
    let credits = new RichEmbed()
    .setThumbnail("https://cdn.discordapp.com/avatars/611217621571862539/3027c549787f29785f71f53c4149e8f0.png")
    .setTitle(`**Now Serving Cognitionis!**`)
    .addField(`This utility bot is brought to you by Auwowa`, 'Under the guidance of God King Impy')
    .setColor(0xFFFFFF)
    .setFooter(`If you wish to support the developer please check out: patreon.com/aurorapaisley16`);

    message.channel.send(credits);

};

exports.help = {
    name: 'credits'
};