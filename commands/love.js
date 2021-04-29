const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"love",
run: function(bot,message,args){
    
    let personArray = args;
        
        let num = Math.floor(Math.random() * 100);
        let hart;
        if (num <= 20) hart = "💔";
        if (num >= 20 && num <= 50) hart = "❤";
        if (num >= 50 && num <= 75) hart = "💖";
        if (num >= 75) hart = "💘";
        const lovembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Szerelem?")
            .setDescription(`${personArray[0]} és ${personArray[1]}`)
            .addField(`${num}%-ban össze illenek`, `${hart}`)
        message.channel.send(lovembed);
}}