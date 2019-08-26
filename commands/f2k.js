const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');

// Fahrenheit to Kelvin
function convertToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5/9 + 273.15);
}
    
exports.run = (client, message, args) => {
    let conversion = new RichEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/596905593378308167/613069167050096640/thermometer.png')
    .setTitle(`Converting ${args}°F to Kelvin: `)
    .addField(`${convertToCelsius(args)}K`, "Fahrenheit to Kelvin conversion")
    .setColor(0xFFD800)
    .setFooter(`${prefix} help-util for more tools`);    
    message.channel.send(conversion); 
};

exports.help = {
    name: 'f2k'
};