const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');
// Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
    return (parseFloat(celsius) * 9/5) + 32;
}
    
exports.run = (client, message, args) => {
    let solution = convertToFahrenheit(args);
    let conversion = new RichEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/596905593378308167/613069167050096640/thermometer.png')
    .setTitle(`Converting ${args}°C to Fahrenheit: `)
    .addField(`${solution}°F`, "Celsius to Fahrenheit conversion")
    .setColor(0xFFD800)
    .setFooter(`${prefix} help-util for more tools`);    
    if(isNaN(solution)){
    message.channel.send(conversion);
    }else message.channel.send("Please enter a valid number");
};

exports.help = {
    name: 'c2f'
};