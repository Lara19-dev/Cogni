const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');

// Fahrenheit to Celsius
function convertToCelsius(fahrenheit) {
    return (parseFloat(fahrenheit) - 32) * 5/9;
}
    
exports.run = (client, message, args) => {
    let conversion = new RichEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/596905593378308167/613069167050096640/thermometer.png')
    .setTitle(`Converting ${args}°F to Celsius: `)
    .addField(`${convertToCelsius(args)}°C`, "Fahrenheit to Celsius conversion")
    .setColor(0xFFD800)
    .setFooter(`${prefix} help-util for more tools`);    
    message.channel.send(conversion); 
};

exports.help = {
    name: 'f2c'
};