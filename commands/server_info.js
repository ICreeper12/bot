const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"server_info",
run: function(bot,message,args){
    
    const serstat = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server Info")
            .setThumbnail(message.guild.iconURL())
            .addField("Név: ", `${message.guild}`)
            .addField("Tulaj ID:", `${message.guild.owner}`)
            .addField("Tagok:", `${message.guild.memberCount} tag van a szerveren`)
            .addField("Emojik:", `${message.guild.emojis.cache.size} emoji van`)
            .addField("Rangok:", `${message.guild.roles.cache.size} rang van`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`);
        message.channel.send(serstat);
}}