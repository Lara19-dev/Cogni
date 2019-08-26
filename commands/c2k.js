const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');

// Celsius to Kelvin
function convertToFahrenheit(celsius) {
    return (parseFloat(celsius) + 273.15);
}
    
exports.run = (client, message, args) => {
    let conversion = new RichEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/596905593378308167/613069167050096640/thermometer.png')
    .setTitle(`Converting ${args}°C to Kelvin: `)
    .addField(`${convertToFahrenheit(args)}K`, "Celsius to Kelvin conversion")
    .setColor(0xFFD800)
    .setFooter(`${prefix} utilities for more tools`);    
    message.channel.send(conversion);
};

exports.help = {
    name: 'c2k'
};